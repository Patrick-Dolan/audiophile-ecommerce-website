import HomepageHero from "../homepage/HomepageHero"
import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"

function HomePage() {
  return (
    <>
      <div className="mb-10">
        <HomepageHero />
      </div>
      <ContentWrapper>
        <MarketingCard />
      </ContentWrapper>
    </>
  )
}

export default HomePage