import "./OrderSummary.css";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import { customOrderMessage } from "../../utils/whatsapp";

const FIELDS = [
  { key: "occasion", label: "Occasion" },
  { key: "flavour", label: "Flavour" },
  { key: "size", label: "Size" },
  { key: "theme", label: "Theme" },
  { key: "date", label: "Date needed" },
  { key: "delivery", label: "Delivery" },
];

export default function OrderSummary({ form }) {
  const hasAnyDetail = FIELDS.some((field) => form[field.key]);

  return (
    <aside className="order-summary">
      <h3>Your order summary</h3>

      {hasAnyDetail ? (
        <dl className="order-summary__list">
          {FIELDS.map(
            (field) =>
              form[field.key] && (
                <div key={field.key} className="order-summary__row">
                  <dt>{field.label}</dt>
                  <dd>{form[field.key]}</dd>
                </div>
              )
          )}
        </dl>
      ) : (
        <p className="order-summary__empty">Fill in the form and your order details will appear here.</p>
      )}

      <div className="order-summary__deposit">50% deposit required on booking.</div>

      <WhatsAppButton
        className="btn-block"
        label="Send Order Request on WhatsApp"
        message={customOrderMessage(form)}
      />
    </aside>
  );
}
