import { Link } from "react-router-dom";
import "./OccasionCard.css";
import CakeImage from "../CakeImage/CakeImage";

export default function OccasionCard({ category }) {
  return (
    <Link to={`/our-cakes?category=${category.slug}`} className="occasion-card" style={{ "--focus": category.focus }}>
      <CakeImage src={category.image} name={category.label} alt={category.label} ratio="1 / 1" className="occasion-card__image" />
      <span className="occasion-card__label">{category.label}</span>
    </Link>
  );
}
