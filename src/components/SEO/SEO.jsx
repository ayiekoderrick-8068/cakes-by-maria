import { useEffect } from "react";

function setMetaTag(name, content, attr = "name") {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/** Sets the document title and description per page without a router-level data API. */
export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Cakes by Maria` : "Cakes by Maria | Custom Cakes & Sweet Treats";
    document.title = fullTitle;
    setMetaTag("description", description);
    setMetaTag("og:title", fullTitle, "property");
    setMetaTag("og:description", description, "property");
  }, [title, description]);

  return null;
}
