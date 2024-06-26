import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import NavLinks from "./NavLinks";
import Cart from "../cart/Cart";
import useWindowWidth from "../../hooks/useWindowWidth";

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [showNavBar, setShowNavBar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const location = useLocation();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const handleScroll = () => {
      if (cartOpen) {
        closeCart();
      }
      setTimeout(() => {
        setScrollPos(document.body.getBoundingClientRect().top);
        setShowNavBar(document.body.getBoundingClientRect().top > scrollPos);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollPos(0);
  }, [location.pathname]);

  const openMobileNav = () => {
    document.body.style.overflow = "hidden";
    setCartOpen(false);
    setMobileNavOpen(true);
  }

  const closeMobileNav = () => {
    document.body.style.overflow = "auto";
    closeCart();
    setMobileNavOpen(false);
  }

  const openCart = () => {
    document.body.style.overflow = "hidden";
    setMobileNavOpen(false);
    setCartOpen(true);
  }

  const closeCart = () => {
    document.body.style.overflow = "auto";
    setCartOpen(false);
  }

  const handleCloseOverlays = () => {
    closeMobileNav();
    closeCart();
  }

  if (!showNavBar) {
    return null;
  } else if (windowWidth >= 1440) {
    return (
      <>
        <nav className={`w-full z-30 fixed ${location.pathname === "/audiophile-ecommerce-website/" && scrollPos === 0 ? "bg-transparent" : "bg-black"}`}>
          <div className="grid grid-cols-3 justify-between items-center border-b border-white border-opacity-10 min-h-22.5 md:max-w-196.5 md:mx-auto lg:max-w-277.25 lg:mx-auto">
            <div className="flex">
              <Link to="/audiophile-ecommerce-website/">
                <img src="/audiophile-ecommerce-website/shared/desktop/logo.svg" alt="audiophile logo." />
              </Link>
            </div>
            <div className="flex gap-8 text-white">
              <Link className="hover:text-primary" to="/audiophile-ecommerce-website/">Home</Link>
              <Link className="hover:text-primary" to="/audiophile-ecommerce-website/category/headphones">Headphones</Link>
              <Link className="hover:text-primary" to="/audiophile-ecommerce-website/category/speakers">Speakers</Link>
              <Link className="hover:text-primary" to="/audiophile-ecommerce-website/category/earphones">Earphones</Link>
            </div>
            <div className="flex justify-end">
              <button onClick={cartOpen ? closeCart : openCart}>
                <img src="/audiophile-ecommerce-website/shared/desktop/icon-cart.svg" alt="Cart icon button." />
              </button>
            </div>
          </div>
          {cartOpen &&
            <div className="fixed z-30 w-full">
              <Cart closeCartOverlay={handleCloseOverlays} />
            </div>
          }
        </nav>
        <div onClick={handleCloseOverlays} className={`fixed inset-0 bg-black opacity-40 z-20 ${mobileNavOpen || cartOpen ? "" : "hidden"}`}></div>
      </>
    )
  } else {
    return (
      <>
        <nav className={`w-full z-30 fixed  ${mobileNavOpen ? "rounded-b-md" : ""} ${location.pathname === "/audiophile-ecommerce-website/" && scrollPos === 0 ? "bg-transparent" : "bg-black"}`}>
          <div className={`flex justify-between items-center border-b border-white border-opacity-10 px-6 min-h-22.5 md:px-10 md:max-w-196.5 md:mx-auto lg:max-w-277.25 lg:mx-auto`}>
            <button onClick={mobileNavOpen ? closeMobileNav : openMobileNav}>
              <img src="/audiophile-ecommerce-website/shared/tablet/icon-hamburger.svg" alt="Hamburger icon for navigation menu." />
            </button>
            <Link className="md:mr-auto md:ml-10" to="/audiophile-ecommerce-website/" onClick={closeMobileNav}>
              <img src="/audiophile-ecommerce-website/shared/desktop/logo.svg" alt="audiophile logo." />
            </Link>
            <button onClick={cartOpen ? closeCart : openCart}>
              <img src="/audiophile-ecommerce-website/shared/desktop/icon-cart.svg" alt="Cart icon button." />
            </button>
          </div>
          {mobileNavOpen && <NavLinks handleMobileNav={closeMobileNav} />}
          {cartOpen && 
            <div className="fixed z-30 w-full">
              <Cart closeCartOverlay={handleCloseOverlays} />
            </div>
          }
        </nav>
        <div onClick={handleCloseOverlays} className={`fixed inset-0 bg-black opacity-40 z-20 ${mobileNavOpen || cartOpen ? "" : "hidden"}`}></div>
      </>
    )
  }
}

export default Navbar