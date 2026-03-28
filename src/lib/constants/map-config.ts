/**
 * Map configuration constants
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-05
 */

export const MAP_CONFIG = {
  DEFAULT_CENTER: {
    latitude: 3.848,
    longitude: 11.502,
  } as const,

  DEFAULT_ZOOM: 12,
  MAX_ZOOM: 18,
  MIN_ZOOM: 8,
  CLUSTER_MAX_ZOOM: 15,

  TILE_LAYERS: {
    DEFAULT: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
    SATELLITE: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: '&copy; Esri',
    },
  } as const,

  CLUSTER_RADIUS: 80,
  CLUSTER_MAX_ITEMS: 100,

  ROUTING_COLOR: '#0ea5e9',
  ROUTING_WEIGHT: 5,
} as const;