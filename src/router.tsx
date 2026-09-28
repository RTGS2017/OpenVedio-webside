import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Layout } from "./layout/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DataPage } from "./pages/DataPage";
import { DeliverablesPage } from "./pages/DeliverablesPage";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export function AppRouter() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="data" element={<DataPage />} />
          <Route path="deliverables" element={<DeliverablesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
