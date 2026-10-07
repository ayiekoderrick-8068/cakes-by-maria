import { useState } from "react";
import SEO from "../../components/SEO/SEO";
import CustomOrderForm from "../../components/CustomOrderForm/CustomOrderForm";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PolicyList from "../../components/PolicyList/PolicyList";
import "./CustomOrder.css";

const INITIAL_FORM = {
  occasion: "",
  flavour: "",
  size: "",
  theme: "",
  date: "",
  message: "",
  designNotes: "",
  delivery: "",
  hasInspirationImage: false,
};

export default function CustomOrder() {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SEO
        title="Custom Cake Order"
        description="Request a custom cake from Cakes by Maria — tell us the occasion, flavour, theme and date, then send your order request on WhatsApp."
      />

      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Custom Orders</span>
          <h1>Design your dream cake</h1>
          <p>Fill in the details below and send your request straight to Maria on WhatsApp.</p>
        </div>
      </div>

      <section className="section custom-order">
        <div className="container custom-order__grid">
          <CustomOrderForm form={form} onChange={handleChange} />
          <OrderSummary form={form} />
        </div>
        <div className="container">
          <div className="custom-order__policies">
            <PolicyList title="Please note" />
          </div>
        </div>
      </section>
    </>
  );
}
