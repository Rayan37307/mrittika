export type Post = {
  id: string;
  day: string;
  month: string;
  tag: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
};

export const posts: Post[] = [
  {
    id: "faq",
    day: "01",
    month: "AUG",
    tag: "NEWS",
    author: "Anaya Sen",
    title: "Our Most Frequently Asked Questions Explained",
    excerpt:
      "From firing temperatures to glaze safety — the questions we hear most often from new collectors, answered in one place.",
    image: "/images/blog-1.jpg",
  },
  {
    id: "gift-ideas",
    day: "24",
    month: "JUL",
    tag: "IDEAS",
    author: "Anaya Sen",
    title: "Our Top 5 Pottery Gift Ideas",
    excerpt:
      "Handmade pieces make the warmest gifts. Here are five Mrittika favourites for the people you love.",
    image: "/images/blog-2.jpg",
  },
  {
    id: "dust-to-dust",
    day: "21",
    month: "JUL",
    tag: "INSPIRATION",
    author: "Anaya Sen",
    title: "The Inspiration Behind the Dust to Dust Collection",
    excerpt:
      "Earth becomes vessel and back again — the story of clay, fire, and patience behind our newest collection.",
    image: "/images/blog-3.jpg",
  },
];
