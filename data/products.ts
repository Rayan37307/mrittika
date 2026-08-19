export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: "SALE" | "NEW" | "HOT";
  description: string;
  details: string[];
};

export const categories = ["Mugs", "Pots", "Plates", "Decor", "Bowls"] as const;

export const products: Product[] = [
  {
    id: "white-glazed-mug",
    name: "White Glazed Mug",
    category: "Mugs",
    image: "/images/product-mug.jpg",
    price: 36,
    oldPrice: 45,
    badge: "SALE",
    description:
      "A wheel-thrown mug finished in a soft white glaze that pools gently at the base. Sits warm in the hand and holds a generous pour.",
    details: [
      "Hand-thrown stoneware, glazed and fired to 1250°C",
      "Holds 12oz / 350ml",
      "Microwave and dishwasher safe",
      "Each piece is one of a kind — expect small variations",
    ],
  },
  {
    id: "entree-bowl",
    name: "Entree Bowl",
    category: "Bowls",
    image: "/images/product-bowl.jpg",
    price: 40,
    description:
      "A textured stoneware bowl sized for a starter, a side, or a quiet bowl of something warm. Unglazed exterior, smooth glazed interior.",
    details: [
      "Hand-thrown stoneware with a matte exterior",
      "5.5in / 14cm diameter",
      "Dishwasher safe, hand wash recommended",
      "Made in small batches — natural variation expected",
    ],
  },
  {
    id: "bump-plate",
    name: "Bump Plate",
    category: "Plates",
    image: "/images/product-plate.jpg",
    price: 56,
    description:
      "A softly reactive glaze breaks over the raised rim of this plate, leaving every piece with its own quiet pattern of movement.",
    details: [
      "Stoneware with reactive glaze finish",
      "10in / 25cm diameter",
      "Oven, microwave and dishwasher safe",
      "Glaze pattern varies piece to piece",
    ],
  },
  {
    id: "set-of-3-wall-tiles",
    name: "Set of 3 Wall Tiles",
    category: "Decor",
    image: "/images/product-tiles.jpg",
    price: 86,
    badge: "NEW",
    description:
      "Three hand-painted ceramic tiles on leather cord, made to hang together or apart. A small, quiet piece of colour for a wall or shelf.",
    details: [
      "Set of 3 hand-painted ceramic tiles",
      "Each tile approx. 3in / 8cm, hung on waxed cord",
      "Ready to hang out of the box",
      "Indoor display recommended",
    ],
  },
  {
    id: "rice-bowl",
    name: "Rice Bowl",
    category: "Bowls",
    image: "/images/product-rice-bowl.jpg",
    price: 40,
    description:
      "A compact, deep bowl thrown for rice, grains, or a small side. Comfortable weight, glazed inside and out for easy care.",
    details: [
      "Hand-thrown stoneware, fully glazed",
      "4.5in / 11cm diameter",
      "Microwave and dishwasher safe",
      "Sold individually",
    ],
  },
  {
    id: "dinner-plate",
    name: "Dinner Plate",
    category: "Plates",
    image: "/images/product-dinner-plate.jpg",
    price: 53,
    description:
      "Our everyday dinner plate — a wide, even rim and a low profile that sits well in a stack or on its own at the table.",
    details: [
      "Stoneware, glazed food-safe finish",
      "11in / 28cm diameter",
      "Oven, microwave and dishwasher safe",
      "Sold individually",
    ],
  },
  {
    id: "chad-pot-terra",
    name: "Chad Pot Terra",
    category: "Pots",
    image: "/images/product-pot.jpg",
    price: 43,
    badge: "HOT",
    description:
      "An unglazed terracotta pot, hand-carved with a fine botanical pattern and left to breathe. Best suited to a sunny windowsill.",
    details: [
      "Natural unglazed terracotta, hand-carved detail",
      "6in / 15cm diameter, drainage hole included",
      "Indoor or sheltered outdoor use",
      "Plant and saucer sold separately",
    ],
  },
  {
    id: "triple-candle-holder",
    name: "Triple Candle Holder",
    category: "Decor",
    image: "/images/product-candle.jpg",
    price: 86,
    description:
      "A sculptural three-arm candle holder, hand-built and finished in a warm neutral glaze. A quiet centrepiece for any table.",
    details: [
      "Hand-built stoneware, holds 3 taper candles",
      "8in / 20cm wide",
      "Wipe clean with a soft cloth",
      "Candles not included",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter(
    (p) => p.id !== product.id && p.category === product.category
  );
  const rest = products.filter(
    (p) => p.id !== product.id && p.category !== product.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
