import HomepageHero from "../homepage/HomepageHero"
import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"
import NavLinks from "../navigation/NavLinks"

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
            <h1 className="text-center">Card 1 placeholder</h1>
            <h1 className="text-center">Card 2 placeholder</h1>
            <h1 className="text-center">Card 3 placeholder</h1>
          </div>
          <MarketingCard />
        </div>
      </ContentWrapper>
    </>
  )
}

export default HomePage