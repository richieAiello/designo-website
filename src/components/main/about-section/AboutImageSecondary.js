import mobile from "../../../assets/about/mobile/image-real-deal.jpg";
import tablet from "../../../assets/about/tablet/image-real-deal.jpg";
import desktop from "../../../assets/about/desktop/image-real-deal.jpg";

export default function AboutImageSecondary() {
  return (
    <picture>
      <source srcSet={desktop} media="(min-width: 1440px)" />
      <source srcSet={tablet} media="(min-width: 376px)" />
      <img src={mobile} alt="" className="image image--about image--about-real" />
    </picture>
  );
}