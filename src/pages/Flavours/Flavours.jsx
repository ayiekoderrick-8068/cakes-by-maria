import SEO from "../../components/SEO/SEO";
import PriceSection from "../../components/PriceSection/PriceSection";
import PolicyList from "../../components/PolicyList/PolicyList";
import { pricingSections } from "../../data/pricing";
import "./Flavours.css";

export default function Flavours() {
  return (
    <>
      <SEO
        title="Flavours & Pricing"
        description="See Cakes by Maria's flavours and prices — simple and premium cakes, bento cakes, cupcakes, doughnuts and more."
      />

      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Flavours & Pricing</span>
          <h1>Transparent pricing, every time</h1>
          <p>Browse our flavours and treats below. Final quotes depend on size, theme and design.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {pricingSections.map((section) => (
              <PriceSection key={section.id} section={section} />
            ))}
          </div>

          <div className="pricing-policies">
            <PolicyList />
          </div>
        </div>
      </section>
    </>
  );
}
