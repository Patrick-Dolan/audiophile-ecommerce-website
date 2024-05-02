import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/shared/Footer";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";

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
          <Route path="/audiophile-ecommerce-website/product/:id" element={<ProductDetailsPage />} />
          <Route path="/audiophile-ecommerce-website/category/headphones" element={<h1>headphones</h1>} />
          <Route path="/audiophile-ecommerce-website/category/speakers" element={<h1>speakers</h1>} />
          <Route path="/audiophile-ecommerce-website/category/earphones" element={<h1>earphones</h1>} />
          <Route path="/audiophile-ecommerce-website/checkout" element={<h1>checkout</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
