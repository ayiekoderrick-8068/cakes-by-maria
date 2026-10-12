import { Link } from "react-router-dom";
import "./Hero.css";
import HeroCarousel from "./HeroCarousel";
import LocationBadge from "../LocationBadge/LocationBadge";
import oreoDripImg from "../../assets/gallery/oreo-drip.jpg";
import graduationImg from "../../assets/gallery/graduation.jpg";
import rosetteOmbreImg from "../../assets/gallery/rosette-ombre-first-birthday.jpg";
import teddyBearImg from "../../assets/gallery/teddy-bear.jpg";
import brushstrokeFloralImg from "../../assets/gallery/brushstroke-floral.jpg";

// Real gallery photos, one per occasion we have photos for (no wedding photo yet). The first is the original hero photo.
const HERO_SLIDES = [
  {
    id: "oreo-drip",
    src: oreoDripImg,
    label: "Birthday",
    alt: "A chocolate drip celebration cake with a gold Happy Birthday topper by Cakes by Maria",
    focus: "50% 55%",
  },
  {
    id: "graduation",
    src: graduationImg,
    label: "Graduation",
    alt: "A white graduation cake with a black mortarboard topper and a graduate illustration",
    focus: "50% 45%",
  },
  {
    id: "first-birthday",
    src: rosetteOmbreImg,
    label: "Kids' first birthday",
    alt: "A pink-to-red ombre rosette first birthday cake with a gold number one candle",
    focus: "50% 70%",
  },
  {
    id: "baby-shower",
    src: teddyBearImg,
    label: "Baby shower",
    alt: "A cream and chocolate cake topped with a teddy bear and pearl-white spheres",
    focus: "50% 70%",
  },
  {
    id: "brushstroke",
    src: brushstrokeFloralImg,
    label: "Birthday florals",
    alt: "A white brushstroke birthday cake with a lilac rose and gold leaf toppers",
    focus: "50% 45%",
  },
];

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
          <LocationBadge prefix="Baking in " className="hero__location" />
        </div>
        <div className="hero__media">
          <HeroCarousel slides={HERO_SLIDES} />
        </div>
      </div>
    </section>
  );
}
