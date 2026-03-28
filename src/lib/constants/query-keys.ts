/**
 * React Query keys configuration
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-05
 */

export const QUERY_KEYS = {
  SEARCH: 'search',
  SEARCH_RESULTS: (query: string, filters: string) => ['search', query, filters] as const,
  SEARCH_SUGGESTIONS: (query: string) => ['search', 'suggestions', query] as const,
  TRENDING_SEARCHES: ['search', 'trending'] as const,
  
  SEARCH_INFINITE: 'search-infinite',
  
  SUGGESTIONS: 'suggestions',
  
  PRODUCT: 'product',
  
  PRODUCTS: 'products',
  PRODUCT_DETAIL: (id: string) => ['products', id] as const,
  
  SHOPS: 'shops',
  SHOP_DETAIL: (id: string) => ['shops', id] as const,
  SHOPS_NEARBY: (lat: number, lon: number, radius: number) => 
    ['shops', 'nearby', lat, lon, radius] as const,
  
  USER_PROFILE: ['user', 'profile'] as const,
  USER_HISTORY: ['user', 'history'] as const,
  USER_FAVORITES: ['user', 'favorites'] as const,
} as const;