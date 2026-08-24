import { products } from "@/data/products";
import type { Product, ProductCategory } from "@/types/product";

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  playgrounds: "Lekplatser",
  swings: "Gungor",
  slides: "Rutschkanor",
  climbing: "Klättermoduler",
  accessories: "Tillbehör",
};

export function formatPrice(price: number): string {
  return `${price.toLocaleString("sv-SE")} kr`;
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}
