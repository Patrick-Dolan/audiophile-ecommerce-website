// import { Link } from "react-router-dom"
import MainNavLinkCard from "./MainNavLinkCard"
import PropTypes from "prop-types"

function NavLinks({ handleMobileNav, className}) {
  const links = [
    {
      title: "headphones",
      link: "/audiophile-ecommerce-website/category/headphones",
      imgSrc: "/audiophile-ecommerce-website/shared/desktop/image-category-thumbnail-headphones.png",
      alt: "earphones"
    },
    {
      title: "speakers",
      link: "/audiophile-ecommerce-website/category/speakers",
      imgSrc: "/audiophile-ecommerce-website/shared/desktop/image-category-thumbnail-speakers.png",
      alt: "speakers"
    },
    {
      title: "earphones",
      link: "/audiophile-ecommerce-website/category/earphones",
      imgSrc: "/audiophile-ecommerce-website/shared/desktop/image-category-thumbnail-earphones.png",
      alt: "earphones"
    }
  ];

  return (
    <div className={`${className} ${handleMobileNav && "overflow-y-auto max-h-screen"}`}>
      <ul className={`uppercase px-6 py-8 bg-white rounded-b-md space-y-8 pb-30`}>
        {links.map((link, index) => (
          <li key={index}>
            <MainNavLinkCard linkObj={link} handleLinkClick={handleMobileNav} />
          </li>
        ))}
      </ul>
    </div>
  )
}

NavLinks.propTypes = {
  handleMobileNav: PropTypes.func,
  className: PropTypes.string,
}

export default NavLinks