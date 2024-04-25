import HomepageHero from "../homepage/HomepageHero"
import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"
import NavLinks from "../navigation/NavLinks"

function HomePage() {
  return (
    <>
      <div className="mb-2">
        <HomepageHero />
      </div>
      <ContentWrapper>
        <div className="space-y-30 mb-30">
          <NavLinks />
          <MarketingCard />
        </div>
      </ContentWrapper>
    </>
  )
}

export default HomePage