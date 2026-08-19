export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: "SALE" | "NEW" | "HOT";
};

export const products: Product[] = [
  {
    id: "white-glazed-mug",
    name: "White Glazed Mug",
    category: "Mugs",
    image: "/images/product-mug.jpg",
    price: 36,
    oldPrice: 45,
    badge: "SALE",
  },
  {
    id: "entree-bowl",
    name: "Entree Bowl",
    category: "Bowls",
    image: "/images/product-bowl.jpg",
    price: 40,
  },
  {
    id: "bump-plate",
    name: "Bump Plate",
    category: "Plates",
    image: "/images/product-plate.jpg",
    price: 56,
  },
  {
    id: "set-of-3-wall-tiles",
    name: "Set of 3 Wall Tiles",
    category: "Decor",
    image: "/images/product-tiles.jpg",
    price: 86,
    badge: "NEW",
  },
  {
    id: "rice-bowl",
    name: "Rice Bowl",
    category: "Bowls",
    image: "/images/product-rice-bowl.jpg",
    price: 40,
  },
  {
    id: "dinner-plate",
    name: "Dinner Plate",
    category: "Plates",
    image: "/images/product-dinner-plate.jpg",
    price: 53,
  },
  {
    id: "chad-pot-terra",
    name: "Chad Pot Terra",
    category: "Pots",
    image: "/images/product-pot.jpg",
    price: 43,
    badge: "HOT",
  },
  {
    id: "triple-candle-holder",
    name: "Triple Candle Holder",
    category: "Decor",
    image: "/images/product-candle.jpg",
    price: 86,
  },
];
