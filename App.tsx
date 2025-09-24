import React from 'react';
import RootNavigation from './src/navigations/RootNavigation';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/api/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
}
