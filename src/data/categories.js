import birthdayImg from "../assets/gallery/black-gold-silhouette.jpg";
import babyShowerImg from "../assets/gallery/teddy-bear.jpg";
import bridalImg from "../assets/gallery/peony-line-art.jpg";
import graduationImg from "../assets/gallery/graduation.jpg";
import corporateImg from "../assets/gallery/wine-black.jpg";
import bentoImg from "../assets/cakes/bento-chocolate-hd.jpg";
import cupcakesImg from "../assets/gallery/oreo-drip.jpg";
import treatsImg from "../assets/gallery/cake-pops.jpg";
import customImg from "../assets/gallery/green-crown.jpg";

export const categories = [
  { slug: "birthday", label: "Birthday Cakes", image: birthdayImg },
  { slug: "baby-shower", label: "Baby Shower Cakes", image: babyShowerImg },
  { slug: "bridal", label: "Bridal Shower Cakes", image: bridalImg },
  { slug: "graduation", label: "Graduation Cakes", image: graduationImg },
  { slug: "corporate", label: "Corporate Cakes", image: corporateImg },
  { slug: "bento", label: "Bento Cakes", image: bentoImg },
  { slug: "cupcakes", label: "Cupcakes", image: cupcakesImg },
  { slug: "treats", label: "Cake Pops & Popsicles", image: treatsImg },
  { slug: "custom", label: "Custom Cakes", image: customImg },
];

export const galleryCategories = [
  { slug: "birthdays", label: "Birthdays" },
  { slug: "kids", label: "Kids" },
  { slug: "graduation", label: "Graduation" },
  { slug: "bridal", label: "Bridal" },
  { slug: "baby-shower", label: "Baby Shower" },
  { slug: "corporate", label: "Corporate" },
  { slug: "bento", label: "Bento" },
  { slug: "treats", label: "Cake Pops & Treats" },
];

export function getCategoryLabel(slug) {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}
