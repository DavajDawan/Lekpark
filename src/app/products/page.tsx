import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getAllProducts } from "@/lib/products";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Produkter</h1>
        <p className="mt-2 text-foreground/70">
          Utforska vårt sortiment av lekplatsutrustning.
        </p>
        <div className="mt-8">
          <ProductGrid products={products} />
        </div>
      </div>
    </Container>
  );
}
