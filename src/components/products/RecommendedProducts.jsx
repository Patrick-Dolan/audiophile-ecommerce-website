import PropTypes from 'prop-types'
import Button from '../shared/Button'
import { Link } from 'react-router-dom'

function RecommendedProducts({ products }) {
  return (
    <div className="text-center">
      <h3 className="mb-10">You may also like</h3>
      {products.map((product, i) => (
        <div key={i} className="mb-14">
          <img src={product.image.mobile} alt={product.name} className="rounded-lg mb-8" />
          <h5 className="mb-8">{product.name}</h5>
          <Link to={`/audiophile-ecommerce-website/product/${product.slug}`}>
            <Button text="See Product" type="button" />
          </Link>
        </div>
      ))}
    </div>
  )
}

RecommendedProducts.propTypes = {
  products: PropTypes.array.isRequired
}

export default RecommendedProducts