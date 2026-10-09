import { useState } from "react";
import SEO from "../../components/SEO/SEO";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import { galleryCategories } from "../../data/categories";
import { galleryItems } from "../../data/gallery";
import "./Gallery.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filledCategories = galleryCategories.filter((c) => galleryItems.some((item) => item.category === c.slug));

  const items =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Gallery"
        description="See real cakes by Cakes by Maria — birthdays, baby showers, bridal showers, graduations, corporate events and bento cakes."
      />

      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Gallery</span>
          <h1>A peek at our creations</h1>
          <p>Browse by category for inspiration, then start your own custom order.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-page__filter">
            <CategoryFilter categories={filledCategories} active={activeCategory} onChange={setActiveCategory} />
          </div>
          <GalleryGrid items={items} />
        </div>
      </section>
    </>
  );
}
