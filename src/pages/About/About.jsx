import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import CakeImage from "../../components/CakeImage/CakeImage";
import "./About.css";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Cakes by Maria creates custom cakes and sweet treats for celebrations, with a focus on flavour, presentation and your requests."
      />

      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Bite into a world of flavour & delight</h1>
        </div>
      </div>

      <section className="section about">
        <div className="container about__grid">
          <div className="about__media">
            <CakeImage name="Cakes by Maria" alt="A Cakes by Maria celebration cake" ratio="4 / 5" />
          </div>
          <div className="about__copy">
            <p>
              Cakes by Maria creates custom cakes and sweet treats for celebrations of every kind —
              birthdays, baby showers, bridal showers, graduations and corporate events. Every order
              is made to order, with close attention to flavour, presentation and the details that
              matter most to you.
            </p>
            <p>
              We work closely with each customer to bring their occasion to life — from the flavour
              and size to the theme, colours and message on the cake. Whether it's a simple bento
              cake or a full celebration centrepiece, our focus stays the same: a cake that tastes as
              good as it looks.
            </p>
            <p>
              Ready to get started? Browse our cakes or send us your custom request, and let's create
              something sweet together.
            </p>
            <div className="about__actions">
              <Link to="/our-cakes" className="btn btn-primary">
                Explore Cakes
              </Link>
              <Link to="/custom-order" className="btn btn-secondary">
                Start a Custom Order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
