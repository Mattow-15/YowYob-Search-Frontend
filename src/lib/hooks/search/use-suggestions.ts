/**
 * useSuggestions hook
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-07
 */
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/query-keys';

interface Suggestion {
  id: string;
  text: string;
  type: 'keyword' | 'product' | 'category';
}

// Mock API function
async function fetchSuggestions(query: string): Promise<Suggestion[]> {
  await new Promise(resolve => setTimeout(resolve, 200));

  const mockSuggestions: Suggestion[] = [
    { id: '1', text: `${query} ordinateur`, type: 'keyword' },
    { id: '2', text: `${query} téléphone`, type: 'keyword' },
    { id: '3', text: `${query} Yaoundé`, type: 'keyword' },
  ];

  return mockSuggestions;
}

export function useSuggestions(query: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.SUGGESTIONS, query],
    queryFn: () => fetchSuggestions(query),
    enabled: query.length >= 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}