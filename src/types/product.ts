export type ProductCategory =
  | "playgrounds"
  | "swings"
  | "slides"
  | "climbing"
  | "accessories";

export interface Product {
  id: string;
  slug: string;

  name: string;
  description: string;

  category: ProductCategory;

  price: number;

  images: string[];

  model3d?: {
    url: string;
    poster?: string;
  };

  specifications: {
    height?: string;
    width?: string;
    length?: string;
    ageRange?: string;
    capacity?: number;
  };

  featured?: boolean;
}
