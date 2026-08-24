# Sellpoint – Projektbrief

## 1. Projektets syfte

Sellpoint är en demo-webshop för lekplatsprodukter.

Projektets viktigaste selling point är att produkterna presenteras med **interaktiva 3D-modeller**. Målet är att skapa en modern och visuellt tilltalande produktupplevelse där användaren kan se, rotera och zooma in på produkterna innan köp.

Detta är en **demo**, inte en komplett produktionswebshop.

### Primära mål

1. Snyggt och professionellt UI
2. Bra UX
3. Tydlig produktpresentation
4. Interaktiv 3D som central del av produktupplevelsen
5. Ren och begriplig kodstruktur
6. Responsiv design
7. Möjlighet att enkelt lägga till fler produkter

### Lägre prioritet / ej relevant för demon

* SEO
* Avancerad backend
* Användarkonton
* Betalningssystem
* Orderhantering
* Adminpanel
* CMS
* Avancerad databasarkitektur
* Microservices
* Kubernetes
* Produktionsklar e-handel

Fokus ska ligga på **UI, UX, produktpresentation och 3D**.

---

# 2. Användarflöde

Demon består i huvudsak av två viktiga vyer.

```text
Produktöversikt
      │
      │ klick på produkt
      ▼
Produktdetalj
      │
      ├── Interaktiv 3D-modell
      ├── Produktinformation
      ├── Specifikationer
      ├── Pris
      └── Lägg i kundvagn
```

Det ska kännas som en vanlig modern webshop, men 3D ska vara den tydliga skillnaden.

---

# 3. Produkter

Demon börjar med cirka 10 produkter.

Exempel på kategorier:

* Lekplatser
* Gungor
* Rutschkanor
* Klättermoduler
* Tillbehör

Varje produkt ska kunna innehålla:

* ID
* namn
* slug
* beskrivning
* pris
* kategori
* produktbilder
* 3D-modell
* specifikationer

Exempel på specifikationer:

* Höjd
* Bredd
* Längd
* Åldersintervall
* Max antal användare

Produktdata ska initialt vara statisk/mockad TypeScript-data.

Ingen databas behövs för demon.

---

# 4. Produktöversikt

Route:

```text
/products
```

Produktöversikten ska visa cirka 10 produkter.

Fokus:

* snygga produktkort
* tydliga produktbilder/renderingar
* produktnamn
* pris
* kategori
* tydlig hover-state
* tydlig CTA
* bra spacing
* responsiv grid

### Viktigt

Interaktiv 3D behöver inte användas på varje produktkort.

För att hålla sidan snabb och visuellt ren används i första hand statiska bilder/renderingar på produktkorten.

Interaktiv 3D ska framför allt användas på produktdetaljsidan.

---

# 5. Produktdetaljsida

Route:

```text
/products/[slug]
```

Detta är projektets viktigaste sida.

Produktdetaljsidan ska innehålla:

* Stor interaktiv 3D-viewer
* Produktnamn
* Pris
* Beskrivning
* Specifikationer
* Eventuellt betyg
* Lägg i kundvagn
* Tillbaka till produkter

Ungefärlig layout:

```text
┌─────────────────────────────────────────────┐
│ ← Tillbaka                                  │
│                                             │
│ ┌──────────────────────┐ ┌────────────────┐ │
│ │                      │ │ Produktnamn    │ │
│ │                      │ │                │ │
│ │     3D VIEWER        │ │ Pris           │ │
│ │                      │ │                │ │
│ │                      │ │ Beskrivning    │ │
│ │                      │ │                │ │
│ │                      │ │ [Köp]          │ │
│ └──────────────────────┘ └────────────────┘ │
│                                             │
│ SPECIFIKATIONER                             │
│                                             │
└─────────────────────────────────────────────┘
```

3D-viewern bör få stort visuellt utrymme.

Målet är att användaren direkt ska förstå:

> "Jag kan interagera med produkten."

---

# 6. 3D-system

Teknisk stack:

```text
Next.js
  ↓
React
  ↓
React Three Fiber
  ↓
Three.js
  ↓
GLB / GLTF
  ↑
Blender
```

3D-modeller skapas/hanteras i Blender och exporteras som `.glb`.

Modellerna placeras initialt i:

```text
public/models/
```

Exempel:

```text
public/models/
├── playground-01.glb
├── playground-02.glb
├── swing-01.glb
└── slide-01.glb
```

---

# 7. 3D Viewer

3D-funktionaliteten ska isoleras från övrig UI-kod.

Komponent:

```text
components/3d/ProductViewer.tsx
```

Viewer ska initialt stödja:

* Rotation
* Zoom
* Pan
* Responsiv storlek
* Bra kamera
* Bra belysning
* Loading state

Om tid finns:

* Fullscreen
* Reset camera
* Auto rotate
* Material/färgbyte
* Hotspots

### Viktigt

Bygg först en fungerande 3D-viewer med **en enda modell**.

Arbetsflödet ska verifieras:

```text
Blender
  ↓
GLB
  ↓
Next.js
  ↓
React Three Fiber
  ↓
ProductViewer
  ↓
Interaktiv modell
```

När detta fungerar kan resterande modeller läggas till.

---

# 8. Produktmodell

Skapa en tydlig TypeScript-modell för produkter.

Exempel:

```ts
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
```

3D ska vara en egenskap hos produkten.

Det ska vara möjligt att ha produkter utan 3D-modell.

---

# 9. Projektstruktur

Föreslagen struktur:

```text
src/
│
├── app/
│   ├── page.tsx
│   │
│   └── products/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Container.tsx
│   │
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductInfo.tsx
│   │   └── ProductSpecifications.tsx
│   │
│   ├── 3d/
│   │   ├── ProductViewer.tsx
│   │   ├── ProductModel.tsx
│   │   └── Loading3D.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       └── Badge.tsx
│
├── data/
│   └── products.ts
│
├── types/
│   └── product.ts
│
└── lib/
    └── products.ts
```

Publika filer:

```text
public/
│
├── models/
│   ├── playground-01.glb
│   ├── playground-02.glb
│   ├── swing-01.glb
│   └── slide-01.glb
│
└── images/
    └── products/
        ├── playground-01.jpg
        ├── playground-02.jpg
        └── ...
```

---

# 10. Dataåtkomst

Produktdata ska ligga i:

```text
src/data/products.ts
```

Skapa ett enkelt lager i:

```text
src/lib/products.ts
```

Exempel på funktioner:

```ts
getProductBySlug(slug)
getFeaturedProducts()
getProductsByCategory(category)
```

Komponenterna ska helst inte direkt arbeta mot den statiska arrayen.

Detta gör det enkelt att byta till databas senare om projektet utvecklas.

---

# 11. Next.js Server/Client Components

Använd Next.js Server Components där det är naturligt.

### Server Components

Använd för:

* Produktdata
* Produktöversikt
* Produktdetaljsida
* Statiskt innehåll

### Client Components

Använd där interaktivitet krävs:

* React Three Fiber / Three.js
* 3D Viewer
* Kundvagn
* Interaktiva filter
* UI-interaktioner

Undvik att göra hela applikationen till `"use client"`.

---

# 12. Kundvagn

Kundvagnen är sekundär.

Den ska bara finnas för att förstärka webshop-känslan.

Det räcker med:

```text
Cart state
+
localStorage
```

Ingen backend/orderhantering behövs.

Minimal funktionalitet:

* Lägg till produkt
* Ta bort produkt
* Ändra antal
* Visa antal i header
* Visa enkel totalsumma

---

# 13. UI/UX-principer

UI/UX är en av projektets högsta prioriteringar.

Designen ska kännas:

* Modern
* Professionell
* Ren
* Premium
* Lekfull utan att bli barnslig
* Luftig
* Tydlig

Undvik att göra sidan till ett färgkaos bara för att produkterna är lekplatser.

Produkterna får gärna stå för färgerna.

### Viktigt

3D-modellen ska vara en central del av designen, inte en vanlig bild som råkar vara interaktiv.

---

# 14. Responsivitet

Demon ska fungera på:

* Desktop
* Tablet
* Mobil

Produktdetaljsidan kan exempelvis gå från:

```text
Desktop:

3D 60% | Information 40%
```

till:

```text
Mobil:

3D
↓
Produktinfo
↓
Specifikationer
↓
CTA
```

3D-viewern måste fungera bra även på mindre skärmar.

---

# 15. Prioriteringsordning

Utveckla projektet i denna ordning:

## Steg 1 – Grundprojekt

* Skapa Next.js + TypeScript
* App Router
* Grundläggande styling
* Header
* Container
* Globala designvariabler

## Steg 2 – Produktdata

* Product type
* Mockdata
* 10 produkter
* Produktbilder

## Steg 3 – Produktöversikt

* `/products`
* ProductCard
* ProductGrid
* Responsiv layout

## Steg 4 – Produktdetaljsida

* `/products/[slug]`
* Produktinformation
* Specifikationer
* Pris
* CTA

## Steg 5 – 3D Proof of Concept

Använd endast EN produkt.

```text
Blender
→ GLB
→ React Three Fiber
→ ProductViewer
→ Rotation
→ Zoom
```

Lös alla problem med 3D innan resterande modeller implementeras.

## Steg 6 – Integrera 3D med produkter

Varje produkt kan nu ange:

```ts
model3d: {
  url: "/models/playground-01.glb"
}
```

## Steg 7 – Polera UI/UX

* Spacing
* Typografi
* Hover states
* Animationer
* Loading states
* Responsivitet
* 3D-kontroller
* Microinteractions

## Steg 8 – Enkel kundvagn

Endast om tid finns efter att huvudupplevelsen är bra.

---

# 16. Prioriteringar

När det uppstår en konflikt mellan funktioner ska följande prioriteringsordning användas:

```text
1. 3D-upplevelse
2. UI/UX
3. Produktpresentation
4. Responsivitet
5. Kodstruktur
6. Webshop-funktionalitet
7. Övriga funktioner
```

Det är bättre att ha:

**10 produkter + fantastisk 3D + fantastisk UX**

än:

**50 produkter + massa funktioner + medioker 3D/UX.**

---

# 17. Saker som inte ska byggas utan uttryckligt behov

Implementera inte följande bara för att "det är bra att ha":

* SEO-system
* Metadata-system
* PostgreSQL
* Prisma
* Auth
* Admin
* CMS
* Betalning
* Orderhantering
* API-server
* Express
* Redux
* Microservices
* Kubernetes
* Avancerad caching
* Komplex state management

Om en funktion inte förbättrar demon eller krävs för dess funktion ska den inte prioriteras.

---

# 18. Definition of Done

Demon är i första hand färdig när användaren kan:

1. Öppna produktöversikten
2. Se cirka 10 snyggt presenterade produkter
3. Klicka på en produkt
4. Komma till produktsidan
5. Se en stor interaktiv 3D-modell
6. Rotera modellen
7. Zooma modellen
8. Förstå att modellen är interaktiv
9. Läsa produktinformation
10. Se specifikationer
11. Se pris
12. Lägga produkten i en enkel kundvagn

Det viktigaste visuella målet är:

> När någon ser demon ska de direkt förstå att 3D är Sellpoints främsta produktupplevelse.

---

# 19. Utvecklingsprincip

Bygg inte hela projektet på en gång.

Arbeta vertikalt.

Första fungerande versionen bör vara:

```text
1 produkt
   ↓
produktdata
   ↓
produktsida
   ↓
en GLB-modell
   ↓
3D Viewer
   ↓
rotation + zoom
```

När detta fungerar:

```text
1 produkt
   ↓
10 produkter
   ↓
produktöversikt
   ↓
polerat UI
   ↓
kundvagn
```

På så sätt identifieras de tekniska riskerna med 3D tidigt.

---

# 20. Grundprincip för implementation

Prioritera enkelhet.

Kod ska vara:

* lätt att förstå
* lätt att ändra
* komponentiserad
* TypeScript-typad
* utan onödig abstraktion

Skapa inte abstraktioner bara för abstraktionens skull.

Om en komponent eller funktion endast används på ett ställe behöver den inte automatiskt göras till ett avancerat generellt system.

Målet är en **ren demoarkitektur som samtidigt liknar hur ett riktigt projekt skulle kunna struktureras**.
