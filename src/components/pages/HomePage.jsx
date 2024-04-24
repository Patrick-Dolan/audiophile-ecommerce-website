import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <ContentWrapper>
        <p>This is the home page content</p>
        <MarketingCard />
      </ContentWrapper>
    </>
  )
}

export default HomePage