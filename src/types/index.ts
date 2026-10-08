export interface Category {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  featuredFabrics?: string[];
  subCategories?: string[];
}

export interface CollectionItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
}

export interface StatisticItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface StoreInfo {
  name: string;
  city: string;
  state: string;
  pincode: string;
  addressPlaceholder: string;
  fullAddress?: string;
  phonePlaceholder: string;
  phoneTel?: string;
  hours: string;
  landmarkNote: string;
  staffCount: string;
  managementCount: string;
  categoriesCount: string;
}
