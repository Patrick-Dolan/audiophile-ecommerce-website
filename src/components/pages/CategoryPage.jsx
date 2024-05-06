import { useParams } from "react-router"
import products from "../../data"
import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"
import NavLinks from "../navigation/NavLinks"
import { Link } from "react-router-dom"
import Button from "../shared/Button"

function CategoryPage() {
  const { category } = useParams()
  const productsInCategory = products.filter(product => product.category === category).sort((a) => a.new ? -1 : 1);

  return (
      <>
        <h2 className="bg-black text-white min-h-25.5 flex justify-center items-center">{category}</h2>
        <ContentWrapper>
          <div className="space-y-30 mt-16">
            {productsInCategory.map(product => (
                <div key={product.slug}>
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
                </div>
            ))}
            <NavLinks />
            <MarketingCard />
          </div>
        </ContentWrapper>
      </>
  )
}

export default CategoryPage