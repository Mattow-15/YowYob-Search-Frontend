/**
 * Geolocation types
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-05
 */

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export interface MapMarker {
  id: string;
  position: GeoCoordinates;
  title: string;
  description?: string;
  type?: 'shop' | 'product' | 'service';
  data?: any;
}

export interface RouteSegment {
  start: GeoCoordinates;
  end: GeoCoordinates;
  distance: number;
  duration: number;
  instructions: string[];
}

export interface ClusterPoint {
  cluster: boolean;
  point_count?: number;
  coordinates: [number, number];
  properties: {
    id: string;
    [key: string]: any;
  };
}