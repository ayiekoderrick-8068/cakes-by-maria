import { useState } from "react";
import SEO from "../../components/SEO/SEO";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import { cakeMatches, filtersWithCounts } from "../../data/cakes";
import { galleryItems } from "../../data/gallery";
import "./Gallery.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const items = galleryItems.filter((item) => cakeMatches(item, activeCategory));

  return (
    <>
      <SEO
        title="Gallery"
        description="See real cakes by Cakes by Maria — birthdays, kids' parties, baby showers, graduations and custom designs."
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
            <CategoryFilter
              categories={filtersWithCounts(galleryItems)}
              active={activeCategory}
              onChange={setActiveCategory}
              allLabel="All Cakes"
              allCount={galleryItems.length}
            />
          </div>
          <GalleryGrid key={activeCategory} items={items} />
        </div>
      </section>
    </>
  );
}
