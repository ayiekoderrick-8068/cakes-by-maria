import { galleryCategories } from "./categories";

const ratios = ["3 / 4", "1 / 1", "4 / 5", "4 / 3"];

export const galleryItems = galleryCategories.flatMap((category, categoryIndex) =>
  Array.from({ length: 3 }, (_, i) => ({
    id: `${category.slug}-${i + 1}`,
    category: category.slug,
    title: `${category.label} cake`,
    ratio: ratios[(categoryIndex + i) % ratios.length],
  }))
);
