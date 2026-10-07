import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import OurCakes from "./pages/OurCakes/OurCakes";
import Flavours from "./pages/Flavours/Flavours";
import CustomOrder from "./pages/CustomOrder/CustomOrder";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/our-cakes" element={<OurCakes />} />
          <Route path="/flavours-pricing" element={<Flavours />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
