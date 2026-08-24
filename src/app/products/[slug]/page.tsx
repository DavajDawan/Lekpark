import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductViewer } from "@/components/3d/ProductViewer";
import { Container } from "@/components/layout/Container";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductSpecifications } from "@/components/product/ProductSpecifications";
import { getProductBySlug } from "@/lib/products";

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <div className="py-8">
        <Link
          href="/products"
          className="text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          ← Tillbaka
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {product.model3d ? (
              <div className="h-[420px] overflow-hidden rounded-xl border border-border bg-background sm:h-[520px] lg:h-[600px]">
                <ProductViewer modelUrl={product.model3d.url} />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element -- static placeholder SVG, no optimization needed
              <img
                src={product.images[0]}
                alt={product.name}
                className="aspect-[4/3] w-full rounded-xl border border-border bg-background object-cover"
              />
            )}
          </div>

          <div className="lg:col-span-2">
            <ProductInfo product={product} />
          </div>
        </div>

        <div className="mt-16">
          <ProductSpecifications specifications={product.specifications} />
        </div>
      </div>
    </Container>
  );
}
