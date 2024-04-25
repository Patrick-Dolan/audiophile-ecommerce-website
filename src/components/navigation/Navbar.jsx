import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import NavLinks from "./NavLinks";

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [showNavBar, setShowNavBar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top);
      setShowNavBar(document.body.getBoundingClientRect().top > scrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const openMobileNav = () => {
    document.body.style.overflow = 'hidden';
    setMobileNavOpen(true);
  }

  const closeMobileNav = () => {
    document.body.style.overflow = 'auto';
    setMobileNavOpen(false);
  }

  if (!showNavBar) {
    return null;
  } else {
    return (
      <>
        <nav className={`w-full z-30 fixed ${mobileNavOpen ? "rounded-b-md" : ""} ${location.pathname === "/audiophile-ecommerce-website/" && scrollPos === 0 ? "bg-transparent" : "bg-black"}`}>
          <div className="flex justify-between items-center px-6 min-h-22.5 border-b border-white border-opacity-10">
            <button onClick={mobileNavOpen ? closeMobileNav : openMobileNav}>
              <img src="/audiophile-ecommerce-website/shared/tablet/icon-hamburger.svg" alt="Hamburger icon for navigation menu." />
            </button>
            <Link to="/audiophile-ecommerce-website/" onClick={closeMobileNav}>
              <img src="/audiophile-ecommerce-website/shared/desktop/logo.svg" alt="audiophile logo." />
            </Link>
            <button onClick={() => alert("Cart clicked")}>
              <img src="/audiophile-ecommerce-website/shared/desktop/icon-cart.svg" alt="Cart icon button." />
            </button>
          </div>
          {mobileNavOpen && <NavLinks handleMobileNav={closeMobileNav} />}
        </nav>
        <div onClick={closeMobileNav} className={`fixed inset-0 bg-black opacity-40 z-20 ${mobileNavOpen ? "" : "hidden"}`}></div>
        {/* Following div is designed to push elements down below fixed nav height */}
        {location.pathname !== "/audiophile-ecommerce-website/" && <div className="min-h-22.5"></div>}
      </>
    )
  }

}

export default Navbar