import "./PolicyList.css";
import { policies } from "../../data/pricing";

export default function PolicyList({ title = "Good to know" }) {
  return (
    <div className="policy-list">
      <h3>{title}</h3>
      <ul>
        {policies.map((policy) => (
          <li key={policy}>{policy}</li>
        ))}
      </ul>
    </div>
  );
}
