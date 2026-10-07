export const categories = [
  { slug: "birthday", label: "Birthday Cakes" },
  { slug: "baby-shower", label: "Baby Shower Cakes" },
  { slug: "bridal", label: "Bridal Shower Cakes" },
  { slug: "graduation", label: "Graduation Cakes" },
  { slug: "corporate", label: "Corporate Cakes" },
  { slug: "bento", label: "Bento Cakes" },
  { slug: "cupcakes", label: "Cupcakes" },
  { slug: "custom", label: "Custom Cakes" },
];

export const galleryCategories = [
  { slug: "birthdays", label: "Birthdays" },
  { slug: "kids", label: "Kids" },
  { slug: "graduation", label: "Graduation" },
  { slug: "bridal", label: "Bridal" },
  { slug: "baby-shower", label: "Baby Shower" },
  { slug: "corporate", label: "Corporate" },
  { slug: "bento", label: "Bento" },
];

export function getCategoryLabel(slug) {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}
