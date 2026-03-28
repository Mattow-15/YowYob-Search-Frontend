/**
 * useSearch hook with React Query
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-07
 */

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/query-keys';

interface SearchParams {
  query: string;
  filters?: {
    type?: string;
    min_price?: number;
    max_price?: number;
    location?: string;
  };
  page?: number;
  limit?: number;
}

interface SearchResult {
  id: string;
  name: string;
  description: string;
  type: 'product' | 'service' | 'shop';
  price?: number;
  images: string[];
  shop: {
    name: string;
    address: string;
  };
  tags?: string[];
}

interface SearchResponse {
  results: SearchResult[];
  total: number;
  page: number;
  total_pages: number;
}

// Mock API function - Replace with real API call
async function searchAPI(params: SearchParams): Promise<SearchResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Mock data
  const mockResults: SearchResult[] = [
    {
      id: '1',
      name: 'Ordinateur Portable HP',
      description: 'HP Pavilion 15, Intel i5, 8GB RAM, 256GB SSD',
      type: 'product',
      price: 350000,
      images: ['/placeholder-laptop.jpg'],
      shop: {
        name: 'Tech Store Yaoundé',
        address: 'Bastos, Yaoundé',
      },
      tags: ['Informatique', 'HP', 'Laptop'],
    },
    {
      id: '2',
      name: 'Service de Plomberie',
      description: 'Réparation et installation sanitaire à domicile',
      type: 'service',
      price: 15000,
      images: ['/placeholder-plumbing.jpg'],
      shop: {
        name: 'Pro Services',
        address: 'Omnisport, Yaoundé',
      },
      tags: ['Service', 'Plomberie'],
    },
  ];

  // Filter by query
  let filtered = params.query
    ? mockResults.filter(r =>
        r.name.toLowerCase().includes(params.query.toLowerCase())
      )
    : mockResults;

  // Filter by type
  if (params.filters?.type && params.filters.type !== 'all') {
    filtered = filtered.filter(r => r.type === params.filters?.type);
  }

  // Filter by price
  if (params.filters?.min_price) {
    filtered = filtered.filter(r => (r.price || 0) >= params.filters!.min_price!);
  }
  if (params.filters?.max_price) {
    filtered = filtered.filter(r => (r.price || 0) <= params.filters!.max_price!);
  }

  return {
    results: filtered,
    total: filtered.length,
    page: params.page || 1,
    total_pages: Math.ceil(filtered.length / (params.limit || 10)),
  };
}

export function useSearch(params: SearchParams) {
  return useQuery({
    queryKey: [QUERY_KEYS.SEARCH, params],
    queryFn: () => searchAPI(params),
    enabled: params.query.length > 0,
  });
}