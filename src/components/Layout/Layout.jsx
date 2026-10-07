import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton floating />
    </div>
  );
}
