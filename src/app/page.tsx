import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <Container>
      <div className="py-24 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Sellpoint</h1>
        <p className="mt-4 text-foreground/70">
          Grundprojektet är på plats. Produkter och 3D-visning kommer i nästa
          steg.
        </p>
      </div>
    </Container>
  );
}
