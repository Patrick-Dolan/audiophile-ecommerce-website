import HomepageHero from "../homepage/HomepageHero"
import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"
import NavLinks from "../navigation/NavLinks"
import FeaturedProductCard from "../homepage/FeaturedProductCard"
import PrimaryProductCard from "../homepage/PrimaryProductCard"
import SecondaryProductCard from "../homepage/SecondaryProductCard"

function HomePage() {
  return (
    <>
      <HomepageHero />
      <ContentWrapper>
        <div className="mb-22.5">
          <NavLinks />
        </div>
        <div className="space-y-30 mb-30">
          <div className="space-y-6">
            <FeaturedProductCard />
            <PrimaryProductCard />
            <SecondaryProductCard />
          </div>
          <MarketingCard />
        </div>
      </ContentWrapper>
    </>
  )
}

export default HomePage