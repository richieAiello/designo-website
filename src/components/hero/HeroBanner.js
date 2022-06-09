import bannerMobile from "../../assets/about/mobile/image-about-hero.jpg";
import bannerTablet from "../../assets/about/tablet/image-about-hero.jpg";
import bannerDesktop from "../../assets/about/desktop/image-about-hero.jpg";

export default function HeroBanner() {
  return (
    <picture>
      <source srcSet={bannerDesktop} media="(min-width: 1440px)" />
      <source srcSet={bannerTablet} media="(min-width: 376px)" />
      <img src={bannerMobile} alt="" className="image image--about-banner" />
    </picture>
  );
}