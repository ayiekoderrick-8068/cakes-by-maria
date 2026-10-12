import { photoCakes } from "./cakes";

/** The Gallery page shows the same photographed cakes as the catalogue (one record each). */
export const galleryItems = photoCakes.map((cake) => ({
  id: cake.id,
  title: cake.name,
  image: cake.image,
  categories: cake.categories,
  ratio: "3 / 4",
}));
