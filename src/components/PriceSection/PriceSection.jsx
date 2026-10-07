import "./PriceSection.css";

export default function PriceSection({ section }) {
  const isFlatRate = Boolean(section.priceLabel);

  return (
    <div className="price-section">
      <div className="price-section__head">
        <h3>{section.title}</h3>
        {isFlatRate && <span className="price-section__rate">{section.priceLabel}</span>}
      </div>

      {isFlatRate ? (
        <ul className="price-section__flavours">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <ul className="price-section__items">
          {section.items.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <span className="price-section__price">
                KSh {item.price.toLocaleString("en-KE")}
                {item.suffix ? ` ${item.suffix}` : ""}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
