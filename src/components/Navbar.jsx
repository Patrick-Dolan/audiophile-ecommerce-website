import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/audiophile-ecommerce-website/">Home</Link></li>
        <li><Link to="/audiophile-ecommerce-website/category/headphones">Headphones</Link></li>
        <li><Link to="/audiophile-ecommerce-website/category/speakers">Speakers</Link></li>
        <li><Link to="/audiophile-ecommerce-website/category/earphones">Earphones</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar