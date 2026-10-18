import { Link } from "react-router-dom";
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
          <Link to={`/our-cakes?cake=${item.id}`} className="gallery-grid__link" aria-label={`View details: ${item.title}`}>
            <CakeImage src={item.image} name={item.title} alt={item.title} ratio={item.ratio} />
          </Link>
        </figure>
      ))}
    </div>
  );
}
