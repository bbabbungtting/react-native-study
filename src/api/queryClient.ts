import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1000, // 데이터 refesh 텀
    },
    mutations: {
      retry: false,
    },
  },
});

export default queryClient;
