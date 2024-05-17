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

  const componentInMobileNav = handleMobileNav !== undefined;

  return (
    <div className={`${className} ${componentInMobileNav && "overflow-y-auto max-h-[80vh]"}`}>
      <ul className={`uppercase py-8 bg-white space-y-4 ${componentInMobileNav && "px-6 rounded-b-md"}`}>
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