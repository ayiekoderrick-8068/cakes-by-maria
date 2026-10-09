import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import Hero from "../../components/Hero/Hero";
import OccasionCard from "../../components/OccasionCard/OccasionCard";
import CakeCard from "../../components/CakeCard/CakeCard";
import CakeImage from "../../components/CakeImage/CakeImage";
import { categories } from "../../data/categories";
import { signatureCakes } from "../../data/cakes";
import customImg from "../../assets/gallery/green-crown.jpg";
import "./Home.css";

const STEPS = [
  {
    title: "Choose your cake",
    text: "Browse our catalogue or tell us your theme, flavour and size.",
    icon: (
      <path d="M4 20h16M6 20v-7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7M9 11V8m3 3V6m3 5V8" />
    ),
  },
  {
    title: "Confirm on WhatsApp",
    text: "Share your date and details — we'll send a quote within minutes.",
    icon: (
      <path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4 3.5V16H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
    ),
  },
  {
    title: "Enjoy your cake",
    text: "A 50% deposit books your date. We bake fresh and deliver it ready to celebrate.",
    icon: (
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    ),
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Custom Cakes & Sweet Treats"
        description="Beautiful celebration cakes, cupcakes and sweet treats made to your taste, theme and occasion. Order on WhatsApp."
      />
      <Hero />

      <section className="section section--tinted section--compact">
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Signature Cakes</span>
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

      <section className="section section--tinted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How It Works</span>
            <h2>Ordering is simple</h2>
          </div>
          <ol className="steps">
            {STEPS.map((step, index) => (
              <li className="steps__item" key={step.title}>
                <span className="steps__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {step.icon}
                  </svg>
                </span>
                <span className="steps__number">Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container home-custom">
          <CakeImage src={customImg} name="Custom cake" alt="An emerald custom cake with a gold crown" ratio="4 / 5" className="home-custom__image" />
          <div className="home-custom__copy">
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
