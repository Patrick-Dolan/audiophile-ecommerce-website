import useWindowWidth from "../../hooks/useWindowWidth"

function MarketingCard() {
  const windowWidth = useWindowWidth();

  let imageUrl = "/audiophile-ecommerce-website/shared/mobile/image-best-gear.jpg";
  if (windowWidth >= 768 && windowWidth < 1440) {
    imageUrl = "/audiophile-ecommerce-website/shared/tablet/image-best-gear.jpg";
  } else if (windowWidth >= 1440) {
    imageUrl = "/audiophile-ecommerce-website/shared/desktop/image-best-gear.jpg";
  }

  return (
    <article className="text-center mb-30 flex flex-col">
      <img src={imageUrl} alt="A man wearing headphones" className="rounded-lg mb-10 md:mb-16" />
      <div className="md:max-w-143 md:mx-auto">
        <h2 className="mb-8 md:text-10">Bringing you the <span className="text-primary">best</span> audio gear</h2>
        <p className="opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
    </article>
  )
}

export default MarketingCard