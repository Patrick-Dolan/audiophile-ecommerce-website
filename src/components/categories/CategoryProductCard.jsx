import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Button from "../shared/Button"

function CategoryProductCard({ product }) {
  return (
    <>
      <img src={product.image.mobile} alt={product.name} className="mb-8 mx-auto"/>
      <div className="space-y-6">
        {product.new && <p className="text-sm text-center uppercase tracking-10px leading-19 text-primary">New Product</p>}
        <h2 className="text-center">{product.name}</h2>
        <p className="text-center opacity-50">{product.description}</p>
        <div className="text-center">
          <Link to={`/audiophile-ecommerce-website/product/${product.slug}`}>
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