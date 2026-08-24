import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Sellpoint
          </Link>
          <nav>
            <Link
              href="/products"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Produkter
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
