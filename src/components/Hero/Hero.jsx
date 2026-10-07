import { Link } from "react-router-dom";
import "./Hero.css";
import CakeImage from "../CakeImage/CakeImage";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__badge">Freshly baked • Made to order</span>
          <h1>Cakes made for the moments that matter.</h1>
          <p>
            Beautiful celebration cakes, cupcakes and sweet treats made to your taste, theme and
            occasion.
          </p>
          <div className="hero__actions">
            <Link to="/our-cakes" className="btn btn-primary">
              Explore Cakes
            </Link>
            <WhatsAppButton />
          </div>
        </div>
        <div className="hero__media">
          <CakeImage name="Cakes by Maria" alt="A celebration cake by Cakes by Maria" ratio="1 / 1" />
        </div>
      </div>
    </section>
  );
}
