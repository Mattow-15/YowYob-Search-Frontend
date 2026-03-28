export interface SearchResult {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'product' | 'service' | 'shop';
  category: string;
  city: string;
  rating: number;
  detailsUrl?: string;
  // UI specific fields that might be missing from backend
  images: string[];
  shop: {
    name: string;
    address: string;
  };
  location: {
    lat: number;
    lng: number;
  };
  tags: string[];
}