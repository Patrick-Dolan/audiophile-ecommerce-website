import products from '../../data.js'
import { useParams } from 'react-router-dom'
import Button from '../shared/Button.jsx';

function ProductInformation() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
    return formattedPrice;
  }

  return (
    <div className="space-y-22">
      <div>
        <img src={product.image.mobile} alt={product.name} className={product.new ? "mb-8" : "mb-10"} />
        {product.new && <p className="text-sm uppercase tracking-10px leading-19 text-primary mb-6">New Product</p>}
        <h1 className="mb-6">{product.name}</h1>
        <p className="mb-6 opacity-50">{product.description}</p>
        <h6 className="mb-7.5">{formatPrice(product.price)}</h6>
        <div className="flex gap-4">
          {/* TODO create quantity counter */}
          <Button text="Qty" type="button" />
          <Button text="Add to Cart" type="button" />
        </div>
      </div>
      <div>
        <h3 className="mb-6">Features</h3>
        <p className="opacity-50">{product.features}</p>
      </div>
      <div>
        <h3 className="mb-6">In the box</h3>
        <ul className="space-y-2">
          {product.includes.map((item, index) => (
            <li key={index} className="flex gap-6">
              <p className="text-primary font-bold">{item.quantity}x</p>
              <p className="opacity-50">{item.item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-5">
        <img src={product.gallery.first.mobile} alt="Gallery image 1" className="rounded-lg" />
        <img src={product.gallery.second.mobile} alt="Gallery image 2" className="rounded-lg" />
        <img src={product.gallery.third.mobile} alt="Gallery image 3" className="rounded-lg" />
      </div>
    </div>
  )
}

export default ProductInformation