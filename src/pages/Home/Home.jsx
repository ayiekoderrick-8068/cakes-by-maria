import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import Hero from "../../components/Hero/Hero";
import OccasionCard from "../../components/OccasionCard/OccasionCard";
import CakeCard from "../../components/CakeCard/CakeCard";
import { categories } from "../../data/categories";
import { signatureCakes } from "../../data/cakes";
import "./Home.css";

export default function Home() {
  return (
    <>
      <SEO
        title="Custom Cakes & Sweet Treats"
        description="Beautiful celebration cakes, cupcakes and sweet treats made to your taste, theme and occasion. Order on WhatsApp."
      />
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Shop by Occasion</span>
            <h2>What are we celebrating?</h2>
            <p>Pick an occasion to see cakes made for it — or start a custom request.</p>
          </div>
          <div className="occasion-grid">
            {categories.map((category) => (
              <OccasionCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Popular Cakes</span>
            <h2>Customer favourites</h2>
            <p>Loved again and again — ready to order or use as inspiration for your own.</p>
          </div>
          <div className="cake-grid">
            {signatureCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
          <div className="home-cta">
            <Link to="/our-cakes" className="btn btn-secondary">
              View Full Catalogue
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-banner">
          <div>
            <span className="eyebrow">Custom Orders</span>
            <h2>Have something specific in mind?</h2>
            <p>
              Tell us the occasion, flavour, theme and date — we'll turn it into a cake worth
              celebrating. Get a quote on WhatsApp in minutes.
            </p>
            <Link to="/custom-order" className="btn btn-primary">
              Start a Custom Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
