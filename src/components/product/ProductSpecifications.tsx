import type { Product } from "@/types/product";

const LABELS: Record<keyof Product["specifications"], string> = {
  height: "Höjd",
  width: "Bredd",
  length: "Längd",
  ageRange: "Åldersintervall",
  capacity: "Max antal användare",
};

export function ProductSpecifications({
  specifications,
}: {
  specifications: Product["specifications"];
}) {
  const entries = (
    Object.keys(LABELS) as Array<keyof Product["specifications"]>
  )
    .filter((key) => specifications[key] !== undefined)
    .map((key) => [LABELS[key], specifications[key]] as const);

  if (entries.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight">
        Specifikationer
      </h2>
      <dl className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
        {entries.map(([label, value]) => (
          <div key={label} className="border-t border-border pt-3">
            <dt className="text-xs uppercase tracking-wide text-foreground/50">
              {label}
            </dt>
            <dd className="mt-1 text-sm font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
