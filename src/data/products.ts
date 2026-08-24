import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "lekland-mini",
    name: "Lekland Mini",
    description:
      "En kompakt lekplatsmodul som samlar rutschkana, klätterparti och lekhus i en enda, yteffektiv struktur. Perfekt för mindre gårdar och förskolemiljöer.",
    category: "playgrounds",
    price: 42900,
    images: ["/images/products/lekland-mini.svg"],
    specifications: {
      height: "2.4 m",
      width: "3.0 m",
      length: "4.2 m",
      ageRange: "2–8 år",
      capacity: 6,
    },
    featured: true,
  },
  {
    id: "2",
    slug: "lekland-xl",
    name: "Lekland XL",
    description:
      "Vår största kombinationslekplats med flera våningsplan, dubbla rutschkanor och integrerat klätternät. Byggd för att hålla ett helt skolgårdsgäng sysselsatt.",
    category: "playgrounds",
    price: 68900,
    images: ["/images/products/lekland-xl.svg"],
    model3d: {
      url: "/models/lekland-xl.glb",
    },
    specifications: {
      height: "3.6 m",
      width: "5.5 m",
      length: "7.0 m",
      ageRange: "4–12 år",
      capacity: 14,
    },
  },
  {
    id: "3",
    slug: "swing-duo",
    name: "Gungställning Duo",
    description:
      "Klassisk gungställning i pulverlackerat stål med två gungsitsar. Robust konstruktion med mjuka, väderbeständiga upphängningar.",
    category: "swings",
    price: 15900,
    images: ["/images/products/swing-duo.svg"],
    specifications: {
      height: "2.2 m",
      width: "0.9 m",
      length: "3.4 m",
      ageRange: "3–10 år",
      capacity: 2,
    },
  },
  {
    id: "4",
    slug: "swing-nest",
    name: "Fågelbogunga",
    description:
      "Rund korggunga som ger plats för flera barn samtidigt. En av våra mest populära produkter tack vare den sociala gungupplevelsen.",
    category: "swings",
    price: 12400,
    images: ["/images/products/swing-nest.svg"],
    specifications: {
      height: "2.0 m",
      width: "1.2 m",
      length: "1.2 m",
      ageRange: "3–12 år",
      capacity: 3,
    },
    featured: true,
  },
  {
    id: "5",
    slug: "slide-wave",
    name: "Vågrutschkana",
    description:
      "Fristående rutschkana med vågformad bana som ger extra fart och skoj. Halksäker yta och förstärkta kanter genomgående.",
    category: "slides",
    price: 18700,
    images: ["/images/products/slide-wave.svg"],
    specifications: {
      height: "1.8 m",
      width: "0.8 m",
      length: "3.8 m",
      ageRange: "3–10 år",
      capacity: 1,
    },
  },
  {
    id: "6",
    slug: "slide-spiral",
    name: "Spiralrutschkana",
    description:
      "Spiralformad rutschkana i rostfritt stål som sparar markyta samtidigt som den ger en längre, mer spännande åkning.",
    category: "slides",
    price: 24500,
    images: ["/images/products/slide-spiral.svg"],
    specifications: {
      height: "2.6 m",
      width: "1.4 m",
      length: "1.4 m",
      ageRange: "4–12 år",
      capacity: 1,
    },
  },
  {
    id: "7",
    slug: "climbing-tower",
    name: "Klättertorn",
    description:
      "Flervånings klättertorn med repbroar, klätterväggar och utsiktsplattform. Utformat för att utmana motorik och balans på ett säkert sätt.",
    category: "climbing",
    price: 54900,
    images: ["/images/products/climbing-tower.svg"],
    specifications: {
      height: "3.8 m",
      width: "3.0 m",
      length: "3.0 m",
      ageRange: "5–14 år",
      capacity: 8,
    },
    featured: true,
  },
  {
    id: "8",
    slug: "climbing-net",
    name: "Klätternät",
    description:
      "Fristående klätternät i kraftigt rep, spänt mellan tre stålpelare. Ger en dynamisk klätterupplevelse som skiljer sig från traditionella klätterställningar.",
    category: "climbing",
    price: 31200,
    images: ["/images/products/climbing-net.svg"],
    specifications: {
      height: "2.8 m",
      width: "3.5 m",
      length: "3.5 m",
      ageRange: "4–12 år",
      capacity: 6,
    },
  },
  {
    id: "9",
    slug: "bench-park",
    name: "Parkbänk",
    description:
      "Väderbeständig parkbänk i trä och stål som kompletterar lekplatsen med sittplatser för vårdnadshavare. Enkel att placera var som helst på anläggningen.",
    category: "accessories",
    price: 6900,
    images: ["/images/products/bench-park.svg"],
    specifications: {
      height: "0.8 m",
      width: "0.6 m",
      length: "1.8 m",
      capacity: 3,
    },
  },
  {
    id: "10",
    slug: "fence-safety",
    name: "Säkerhetsstaket",
    description:
      "Modulärt staket i pulverlackerat stål som avgränsar lekytan på ett tydligt och säkert sätt utan att kännas instängande.",
    category: "accessories",
    price: 4200,
    images: ["/images/products/fence-safety.svg"],
    specifications: {
      height: "0.9 m",
      width: "0.05 m",
      length: "2.0 m",
    },
  },
];
