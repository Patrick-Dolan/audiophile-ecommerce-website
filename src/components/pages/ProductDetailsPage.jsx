import ContentWrapper from "../shared/ContentWrapper";
import NavLinks from "../navigation/NavLinks";
import MarketingCard from "../shared/MarketingCard";
import ProductInformation from "../products/ProductInformation";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import products from '../../data.js'
import RecommendedProducts from "../products/RecommendedProducts.jsx";


function ProductDetailsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const product = products.find((product) => product.slug === slug);

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <ContentWrapper>
      <div className="mt-4 mb-6">
        <button onClick={handleGoBack} className="opacity-50 text-15px">Go Back</button>
      </div>
      <div className="mb-30">
        <ProductInformation product={product} />
      </div>
      <div className="mb-30 md:mb-10">
        <RecommendedProducts products={product.others} />
      </div>
      <div className="mb-30">
        <NavLinks />
      </div>
      <div className="mb-30">
        <MarketingCard />
      </div>
    </ContentWrapper>
  )
}

export default ProductDetailsPage