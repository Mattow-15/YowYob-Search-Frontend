/**
 * API endpoint constants
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-05
 */

// export const API_VERSION = 'v1'; // Removed because Gateway handles versioning

export const API_ENDPOINTS = {
  // Search
  SEARCH: `/api/search`,
  SEARCH_AUTOCOMPLETE: `/api/search/autocomplete`,
  SEARCH_SUGGESTIONS: `/api/search/suggestions`,

  // Products
  PRODUCTS: `/api/products`,
  PRODUCT_DETAIL: (id: string) => `/api/products/${id}`,

  // Shops
  SHOPS: `/api/shops`,
  SHOP_DETAIL: (id: string) => `/api/shops/${id}`,
  SHOPS_NEARBY: `/api/shops/nearby`,

  // Auth
  AUTH_LOGIN: `/api/auth/login`,
  AUTH_REGISTER: `/api/auth/register`,
  AUTH_LOGOUT: `/api/auth/logout`,
  AUTH_REFRESH: `/api/auth/refresh`,
  AUTH_GOOGLE: `/api/auth/google`,

  // User
  USER_PROFILE: `/api/users/me`,
  USER_HISTORY: `/api/user/history`,
  USER_FAVORITES: `/api/user/favorites`,

  // Listings by Seller
  LISTINGS_BY_SELLER: (sellerId: string) => `/api/listings/seller/${sellerId}`,

  // Merchant
  MERCHANT_DASHBOARD: `/api/merchant/dashboard`,
  MERCHANT_PRODUCTS: `/api/merchant/products`,
  MERCHANT_STATS: `/api/merchant/stats`,

  // Geo
  GEO_DISTANCE: `/api/geo/distance`,
  GEO_ROUTE: `/api/geo/route`,
} as const;

export const WS_ENDPOINTS = {
  SEARCH_STREAM: '/ws/search/stream',
  NOTIFICATIONS: '/ws/notifications',
} as const;