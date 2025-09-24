import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import {AxiosError} from 'axios';

// mutation 과정에서 사용할 option을 커스터마이즈 해서 사용 가능

type ResponseError = AxiosError<{
  statusCode: number;
  message: string;
  error: string;
}>;

// TData : mutation 함수 실행 결과로 반환되는 값의 타입
// TVariables : mutation 함수에 전달되는 인자의 값의 타입
type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ResponseError, TVariables, unknown>,
  'mutationFn'
>;

// Omit으로 'queryKey' 기능 제외
type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>,
  'queryKey'
>;

export type {ResponseError, UseMutationCustomOptions, UseQueryCustomOptions};
