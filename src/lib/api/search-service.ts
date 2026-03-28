/**
 * Search service - Version minimaliste
 */

import { httpClient } from './http-client';

// Types simplifiés
interface SimpleSearchItem {
  id: string;
  name: string;
  price?: number;
  type: string;
}

interface SimpleFilters {
  query: string;
  page?: number;
}

interface SimpleResponse {
  items: SimpleSearchItem[];
  total: number;
  page: number;
}

// Service minimal
class SimpleSearchService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

  async search(filters: SimpleFilters): Promise<SimpleResponse> {
    try {
      const params = new URLSearchParams();
      params.append('q', filters.query || '');
      if (filters.page) params.append('page', filters.page.toString());

      const response = await fetch(`${this.baseUrl}/api/v1/search?${params.toString()}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Search failed:', error);
      return {
        items: [],
        total: 0,
        page: filters.page || 1
      };
    }
  }

  async getSuggestions(query: string): Promise<string[]> {
    if (!query || query.length < 2) return [];

    try {
      const params = new URLSearchParams({ q: query });
      const response = await fetch(`${this.baseUrl}/api/v1/search/suggestions?${params.toString()}`);

      if (!response.ok) return [];

      const data = await response.json();
      return data.suggestions || data || [];
    } catch {
      return [];
    }
  }
}

export const simpleSearchService = new SimpleSearchService();