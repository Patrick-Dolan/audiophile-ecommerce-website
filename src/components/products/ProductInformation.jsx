import { useState } from 'react'
import products from '../../data.js'
import { useParams } from 'react-router-dom'
import Button from '../shared/Button.jsx';

function ProductInformation() {
  const { slug } = useParams();
  const [counter, setCounter] = useState(1);
  const product = products.find((product) => product.slug === slug);

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
    return formattedPrice;
  }

  function increment() {
    if (counter === 99) return;
    setCounter(prev => prev + 1);
  }

  function decrement() {
    if (counter === 1) return;
    setCounter(prev => prev - 1);
  }

  // TODO implement add to cart functionality
  function handleAddToCart() {
    alert(`Add to cart clicked with ${counter} of the ${product.name}.`);
  }

  return (
    <div className="space-y-22">
      <div>
        <img src={product.image.mobile} alt={product.name} className={`rounded-lg ${product.new ? "mb-8" : "mb-10"}`} />
        {product.new && <p className="text-sm uppercase tracking-10px leading-19 text-primary mb-6">New Product</p>}
        <h1 className="mb-6">{product.name}</h1>
        <p className="mb-6 opacity-50">{product.description}</p>
        <h6 className="mb-7.5">{formatPrice(product.price)}</h6>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex gap-4 justify-center items-center min-h-12 bg-off-grey">
            <button onClick={decrement} className="px-4 py-2 h-full opacity-25 font-bold">-</button>
            <p className="font-bold">{counter}</p>
            <button onClick={increment} className="px-4 py-2 h-full opacity-25 font-bold">+</button>
          </div>
          <Button text="Add to Cart" type="button" onClick={handleAddToCart} />
        </div>
      </div>
      <div>
        <h3 className="mb-6">Features</h3>
        <p className="opacity-50">
        {product.features.split("\n\n").map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <><br /><br /></>}
          </span>
        ))}
        </p>
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