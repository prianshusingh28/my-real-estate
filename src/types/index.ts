export type FlatType = '1RK' | '2BHK' | '3BHK';

export interface Amenity {
  icon: string;
  label: string;
}

export interface Property {
  id: number;
  type: FlatType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  size: number;
  floor: string;
  available: boolean;
  totalFlats: number;
  availableCount: number;
  images: string[];
  amenities: string[];
  highlights: string[];
}
