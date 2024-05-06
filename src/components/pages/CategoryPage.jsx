import { useParams } from "react-router"
import products from "../../data"
import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"
import NavLinks from "../navigation/NavLinks"
import CategoryProductCard from "../categories/CategoryProductCard"

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
                <CategoryProductCard product={product} key={product.slug} />
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