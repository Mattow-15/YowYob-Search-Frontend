/**
 * useInfiniteSearch hook for infinite scrolling
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-07
 */

import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/query-keys';

interface SearchParams {
  query: string;
  filters?: Record<string, unknown>;
}

async function searchInfiniteAPI(params: SearchParams, pageParam: number) {
  await new Promise(resolve => setTimeout(resolve, 500));

  // Mock paginated results
  const mockResults = Array.from({ length: 10 }, (_, i) => ({
    id: `${pageParam}-${i}`,
    name: `Produit ${pageParam * 10 + i}`,
    description: 'Description du produit',
    type: 'product' as const,
    price: Math.floor(Math.random() * 100000),
    images: ['/placeholder.jpg'],
    shop: {
      name: 'Shop Name',
      address: 'Yaoundé',
    },
  }));

  return {
    results: mockResults,
    nextPage: pageParam < 5 ? pageParam + 1 : undefined,
  };
}

export function useInfiniteSearch(params: SearchParams) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.SEARCH_INFINITE, params],
    queryFn: ({ pageParam }) => searchInfiniteAPI(params, pageParam as number),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    enabled: params.query.length > 0,
  });
}