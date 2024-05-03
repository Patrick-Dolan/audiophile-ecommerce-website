import ContentWrapper from "../shared/ContentWrapper";
import NavLinks from "../navigation/NavLinks";
import MarketingCard from "../shared/MarketingCard";
import ProductInformation from "../products/ProductInformation";
import { Link, useNavigate } from "react-router-dom";

function ProductDetailsPage() {
  const { navigate } = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <ContentWrapper>
      <div className="mt-4 mb-6">
        <Link onClick={handleGoBack} className="opacity-50 text-15">Go Back</Link>
      </div>
      <div className="space-y-30">
        <ProductInformation />
        <h3>You may also like placeholder</h3>
        <NavLinks />
        <div className="mb-30">
          <MarketingCard />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default ProductDetailsPage