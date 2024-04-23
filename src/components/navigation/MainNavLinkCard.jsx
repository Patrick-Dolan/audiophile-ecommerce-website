import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function MainNavLinkCard({ linkObj, handleClose }) {
  const { imgSrc, alt, title, link } = linkObj;

  return (
    <Link to={link} onClick={handleClose}>
      <div className="min-h-16"></div>
      <div className="bg-off-grey rounded-lg relative">
        <div className="min-h-20"></div>
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
          <img src={imgSrc} alt={alt} className="mx-auto max-h-40" />
        </div>
        <h6 className="text-center text-15 lg:text-lg">{title}</h6>
        <div className="mx-auto text-center flex justify-center items-center gap-3 pb-5">
          <p className="text-13 font-bold opacity-50">Shop</p>
          <img src="/audiophile-ecommerce-website/shared/desktop/icon-arrow-right.svg" alt="Right arrow icon." />
        </div>
      </div>
    </Link>
  )
}

MainNavLinkCard.propTypes = {
  linkObj: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default MainNavLinkCard