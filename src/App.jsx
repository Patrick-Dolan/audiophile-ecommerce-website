import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="mx-6">
        <h1 className="text-center">Audiophile site</h1>
      </header>
      <div className="mx-6">
        <Navbar />
      </div>
      <main className="mx-6">
        <Routes>
          <Route path="/audiophile-ecommerce-website/" element={<h1>Home</h1>} />
          <Route path="/audiophile-ecommerce-website/category/headphones" element={<h1>headphones</h1>} />
          <Route path="/audiophile-ecommerce-website/category/speakers" element={<h1>speakers</h1>} />
          <Route path="/audiophile-ecommerce-website/category/earphones" element={<h1>earphones</h1>} />
          <Route path="/audiophile-ecommerce-website/checkout" element={<h1>checkout</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
