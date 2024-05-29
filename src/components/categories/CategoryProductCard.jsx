import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Button from "../shared/Button"
import useWindowWidth from "../../hooks/useWindowWidth"

function CategoryProductCard({ product }) {
  const windowWidth = useWindowWidth();

  let imageUrl = product.categoryImage.mobile;
  if (windowWidth >= 768 && windowWidth < 1440) {
    imageUrl = product.categoryImage.tablet;
  } else if (windowWidth >= 1440) {
    imageUrl = product.categoryImage.desktop;
  }

  return (
    <>
      <img src={imageUrl} alt={product.name} className="mb-8 mx-auto md:mb-13"/>
      <div className="space-y-6 md:max-w-143 md:mx-auto">
        {product.new && <p className="text-sm text-center uppercase tracking-10px leading-19 text-primary">New Product</p>}
        <h2 className="text-center md:text-10 md:max-w-95 md:mx-auto">{product.name}</h2>
        <p className="text-center opacity-50">{product.description}</p>
        <div className="text-center">
          <Link to={`/audiophile-ecommerce-website/product/${product.slug}`} className="flex justify-center">
            <Button text="See Product" type="button" />
          </Link>
        </div>
      </div>
    </>
  )
}

CategoryProductCard.propTypes = {
  product: PropTypes.object.isRequired
}

export default CategoryProductCard