import { Link } from "react-router-dom"
import ContentWrapper from "./ContentWrapper"

function Footer() {
  return (
    <footer className="relative">
      {/* Decorative bar */}
      <div className="h-1 bg-black absolute top-0 left-0 right-0 z-10 md:max-w-196.5 md:mx-auto lg:max-w-277.25">
        <div className="w-25 bg-primary h-full mx-auto md:mx-10 lg:mx-0"></div>
      </div>
      {/* Footer content */}
      <div className="bg-black text-white text-center pb-9.5 z-20 pt-1 md:text-left md:pb-10">
        <ContentWrapper>
          <div className="space-y-12 md:space-y-8">
            <Link to="/audiophile-ecommerce-website/">
              <img src="/audiophile-ecommerce-website/shared/desktop/logo.svg" alt="audiophile logo" className="block mx-auto mt-12 md:mx-0 md:mt-14" />
            </Link>
            <ul className="font-bold text-13px tracking-2px uppercase leading-normal space-y-4 md:flex md:space-y-0 md:gap-8">
              <li><Link to="/audiophile-ecommerce-website/">Home</Link></li>
              <li><Link to="/audiophile-ecommerce-website/category/headphones">Headphones</Link></li>
              <li><Link to="/audiophile-ecommerce-website/category/speakers">Speakers</Link></li>
              <li><Link to="/audiophile-ecommerce-website/category/earphones">Earphones</Link></li>
            </ul>
            <p className="opacity-50 font-medium">Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
          </div>
          <div className="mt-12 space-y-12 md:flex md:justify-between md:items-center md:mt-20 md:space-y-0">
            <p className="opacity-50 font-bold">Copyright 2021. All Rights Reserved</p>
            <div className="flex justify-center items-center gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src="/audiophile-ecommerce-website/shared/desktop/icon-facebook.svg" alt="Facebook icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <img src="/audiophile-ecommerce-website/shared/desktop/icon-twitter.svg" alt="Twitter icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src="/audiophile-ecommerce-website/shared/desktop/icon-instagram.svg" alt="Instagram icon" />
              </a>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </footer>
  )
}

export default Footer