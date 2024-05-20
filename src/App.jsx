import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/shared/Footer";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import CategoryPage from "./components/pages/CategoryPage";
import CheckoutPage from "./components/pages/CheckoutPage";

function App() {
  const location = useLocation();
  const NavbarSpacer = () => (
    location.pathname !== "/audiophile-ecommerce-website/" && <div className="min-h-22.5"></div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
        <NavbarSpacer />
      </header>
      <main className="flex-grow overflow-auto">
        <Routes>
          <Route path="/audiophile-ecommerce-website/" element={<HomePage />} />
          <Route path="/audiophile-ecommerce-website/product/:slug" element={<ProductDetailsPage />} />
          <Route path="/audiophile-ecommerce-website/category/:category" element={<CategoryPage />} />
          <Route path="/audiophile-ecommerce-website/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<h1 className="py-40 text-center">Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
