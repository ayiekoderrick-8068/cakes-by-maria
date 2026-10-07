import "./GalleryGrid.css";
import CakeImage from "../CakeImage/CakeImage";

export default function GalleryGrid({ items }) {
  if (items.length === 0) {
    return <p className="gallery-grid__empty">No photos in this category yet — check back soon.</p>;
  }

  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <figure className="gallery-grid__item" key={item.id}>
          <CakeImage name={item.title} alt={item.title} ratio={item.ratio} />
        </figure>
      ))}
    </div>
  );
}
