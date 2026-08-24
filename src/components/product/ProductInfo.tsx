import { CATEGORY_LABELS, formatPrice } from "@/lib/products";
import type { Product } from "@/types/product";

export function ProductInfo({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs font-medium uppercase tracking-wide text-foreground/50">
        {CATEGORY_LABELS[product.category]}
      </span>
      <h1 className="text-3xl font-semibold tracking-tight">
        {product.name}
      </h1>
      <span className="text-2xl font-medium text-accent">
        {formatPrice(product.price)}
      </span>
      <p className="leading-relaxed text-foreground/70">
        {product.description}
      </p>
      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 sm:w-auto"
      >
        Lägg i kundvagn
      </button>
    </div>
  );
}
