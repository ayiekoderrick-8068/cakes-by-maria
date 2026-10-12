import { Link } from "react-router-dom";
import "./Hero.css";
import CakeImage from "../CakeImage/CakeImage";
import heroImg from "../../assets/gallery/oreo-drip.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">Freshly baked • Made to order</span>
          <h1>
            Cakes made for the <em>moments</em> that matter.
          </h1>
          <p>
            Beautiful celebration cakes, cupcakes and sweet treats made to your taste, theme and
            occasion.
          </p>
          <div className="hero__actions">
            <Link to="/our-cakes" className="btn btn-primary">
              Explore Cakes
            </Link>
            <Link to="/custom-order" className="btn btn-secondary">
              Create Your Cake
            </Link>
          </div>
        </div>
        <div className="hero__media">
          <CakeImage src={heroImg} name="Cakes by Maria" alt="A chocolate drip celebration cake with a gold Happy Birthday topper by Cakes by Maria" ratio="4 / 5" />
        </div>
      </div>
    </section>
  );
}
