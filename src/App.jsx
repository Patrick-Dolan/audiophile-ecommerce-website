import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow overflow-auto">
        <Routes>
          <Route path="/audiophile-ecommerce-website/" element={<h1>Home</h1>} />
          <Route path="/audiophile-ecommerce-website/category/headphones" element={<h1>headphones</h1>} />
          <Route path="/audiophile-ecommerce-website/category/speakers" element={<h1>speakers</h1>} />
          <Route path="/audiophile-ecommerce-website/category/earphones" element={<h1>earphones</h1>} />
          <Route path="/audiophile-ecommerce-website/checkout" element={<h1>checkout</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
