import {useEffect} from 'react';
import {queryOptions, useMutation, useQuery} from '@tanstack/react-query';

import {
  getAccessToken,
  getProfile,
  postLogin,
  postSignup,
  logout,
} from '@/api/auth';
import {UseMutationCustomOptions, UseQueryCustomOptions} from '@/types/api';
import {removeHeader, setHeader} from '@/utils/header';
import {removeEncryptStorage, setEnCryptStorage} from '@/utils/encryptStorage';
import {numbers} from '@/constants/numbers';
import {Profile} from '@/types/domain';
import queryClient from '@/api/queryClient';
import {queryKeys, storageKeys} from '@/constants/key';

// 회원가입 커스텀 hook
function useSignup(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postSignup,
    ...mutationOptions,
  });
}

// 로그인 커스텀 hook
function useLogin(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({accessToken, refreshToken}) => {
      setHeader('Authorization', `Bearer ${accessToken}`);
      await setEnCryptStorage(storageKeys.REFRESH_TOKEN, refreshToken);

      queryClient.fetchQuery({
        queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
      });
    },
    ...mutationOptions,
  });
}

// 토큰 갱신 커스텀 hook
function useGetRefreshToken() {
  const {data, isSuccess, isError} = useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
    queryFn: getAccessToken,
    staleTime: numbers.ACCESS_TOKEN_REFRESH_TIME,
    //시간 주기로 refetch 할 수 있게
    refetchInterval: numbers.ACCESS_TOKEN_REFRESH_TIME,
  });

  useEffect(() => {
    // 즉시 실행 함수
    (async () => {
      if (isSuccess) {
        setHeader('Authorization', `Bearer ${data?.accessToken}`);
        await setEnCryptStorage(storageKeys.REFRESH_TOKEN, data.refreshToken);
      }
    })();
  }, [isSuccess]);

  useEffect(() => {
    (async () => {
      if (isError) {
        removeHeader('Authorization');
        await removeEncryptStorage(storageKeys.REFRESH_TOKEN);
      }
    })();
  }, [isError]);

  return {isSuccess, isError};
}

// 로그인 성공시 profile 받아 오는 hook
function useGetProfile(QueryOptions?: UseQueryCustomOptions<Profile>) {
  return useQuery({
    queryFn: getProfile,
    queryKey: [queryKeys.AUTH, queryKeys.GET_PROFILE],
    ...queryOptions,
  });
}

// 로그 아웃 훅
function useLogout(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      removeHeader('Authorization');
      await removeEncryptStorage(storageKeys.REFRESH_TOKEN);
      queryClient.resetQueries({queryKey: [queryKeys.AUTH]});
    },
    ...mutationOptions,
  });
}

function useAuth() {
  const signupMutation = useSignup();
  const loginMutation = useLogin();
  const refreshTokenQuery = useGetRefreshToken();
  // 받아온 data로 isSuccess 상태를 이용해서 isLogin 상태를 판단
  const {data, isSuccess: isLogin} = useGetProfile({
    // 앞서 쿼리의 결과값이 있어야 그 다음 쿼리를 실행할 수 있을 때 사용
    enabled: refreshTokenQuery.isSuccess,
  });

  const logoutMutation = useLogout();

  return {
    auth: {
      id: data?.id || '',
      nickname: data?.nickname || '',
      email: data?.email || '',
      imageUri: data?.imageUri || '',
    },
    signupMutation,
    loginMutation,
    isLogin,
    logoutMutation,
  };
}

export default useAuth;
