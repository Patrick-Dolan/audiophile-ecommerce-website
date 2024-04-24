import { Link } from "react-router-dom"
import ContentWrapper from "./ContentWrapper"

function Footer() {
  return (
    <footer>
      {/* Decorative bar */}
      <div className="h-1 bg-black"><div className="w-25 bg-primary h-1 mx-auto"></div></div>
      {/* Footer content */}
      <div className="bg-black text-white text-center pb-9.5">
        <ContentWrapper>
          <div className="space-y-12">
            <img src="/audiophile-ecommerce-website/shared/desktop/logo.svg" alt="audiophile logo" className="block mx-auto pt-12" />
            <ul className="font-bold text-13 tracking-2px uppercase leading-normal space-y-4">
              <li><Link to="/audiophile-ecommerce-website/">Home</Link></li>
              <li><Link to="/audiophile-ecommerce-website/category/headphones">Headphones</Link></li>
              <li><Link to="/audiophile-ecommerce-website/category/speakers">Speakers</Link></li>
              <li><Link to="/audiophile-ecommerce-website/category/earphones">Earphones</Link></li>
            </ul>
            <p className="opacity-50 font-medium">Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
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