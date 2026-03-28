/**
 * Application configuration constants
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-05
 */

export const APP_NAME = 'Yowyob Search';
export const APP_DESCRIPTION = 'Moteur de recherche géolocalisé pour produits et services';
export const APP_VERSION = '1.0.0';

export const DEFAULT_LOCALE = 'fr';
export const SUPPORTED_LOCALES = ['fr', 'en'] as const;

export const SEARCH_CONFIG = {
  MIN_QUERY_LENGTH: 2,
  DEBOUNCE_DELAY: 300,
  MAX_SUGGESTIONS: 10,
  RESULTS_PER_PAGE: 20,
  MAX_DISTANCE: 200,
  DEFAULT_DISTANCE: 30,
} as const;

export const MAP_CONFIG = {
  DEFAULT_CENTER: {
    latitude: 3.848,
    longitude: 11.502,
  },
  DEFAULT_ZOOM: 12,
  MAX_ZOOM: 18,
  MIN_ZOOM: 8,
} as const;

export const CACHE_CONFIG = {
  SEARCH_RESULTS_TTL: 5 * 60 * 1000,
  AUTOCOMPLETE_TTL: 10 * 60 * 1000,
  USER_DATA_TTL: 15 * 60 * 1000,
} as const;