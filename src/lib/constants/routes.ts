/**
 * Application route constants
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-05
 */

export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  SEARCH_RESULTS: (query: string) => `/search?q=${encodeURIComponent(query)}`,
  
  MAP: '/map',
  
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id: string) => `/products/${id}`,
  
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',
  AUTH_FORGOT_PASSWORD: '/auth/forgot-password',
  
  PROFILE: '/profile',
  PROFILE_HISTORY: '/profile/history',
  PROFILE_PREFERENCES: '/profile/preferences',
  PROFILE_SAVED: '/profile/saved',
  
  MERCHANT: '/merchant',
  MERCHANT_ANALYTICS: '/merchant/analytics',
  MERCHANT_PRODUCTS: '/merchant/products',
  MERCHANT_PRODUCT_NEW: '/merchant/products/new',
  MERCHANT_PRODUCT_EDIT: (id: string) => `/merchant/products/${id}/edit`,
  
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_SYSTEM: '/admin/system',
} as const;