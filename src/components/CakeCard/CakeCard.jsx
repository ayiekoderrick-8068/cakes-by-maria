import { Link } from "react-router-dom";
import "./CakeCard.css";
import CakeImage from "../CakeImage/CakeImage";
import { formatPrice } from "../../data/cakes";
import { categoryLabels } from "../../data/categories";

export default function CakeCard({ cake }) {
  return (
    <article className="cake-card">
      <CakeImage src={cake.image} name={cake.name} alt={`${cake.name} cake`} className="cake-card__image" />
      <div className="cake-card__body">
        <span className="cake-card__category">{categoryLabels[cake.categories[0]] ?? cake.categories[0]}</span>
        <h3 className="cake-card__name">{cake.name}</h3>
        <p className="cake-card__meta">
          {cake.flavour !== cake.name && <span>{cake.flavour}</span>}
          {cake.size !== "Custom size" && <span className="cake-card__size">{cake.size}</span>}
        </p>
        <p className={`cake-card__price ${typeof cake.price === "number" ? "" : "cake-card__price--quote"}`}>
          {formatPrice(cake.price)}
        </p>
        <div className="cake-card__actions">
          <Link to={`/our-cakes?cake=${cake.id}`} className="btn btn-secondary btn-sm">
            View Details
          </Link>
          <Link to={`/checkout?cake=${cake.id}`} className="btn btn-primary btn-sm">
            Order
          </Link>
        </div>
      </div>
    </article>
  );
}
