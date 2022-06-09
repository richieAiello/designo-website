import mobile from "../../../assets/about/mobile/image-world-class-talent.jpg";
import tablet from "../../../assets/about/tablet/image-world-class-talent.jpg";
import desktop from "../../../assets/about/desktop/image-world-class-talent.jpg";

export default function AboutImage() {
  return (
    <picture>
      <source srcSet={desktop} media="(min-width: 1440px)" />
      <source srcSet={tablet} media="(min-width: 768px)" />
      <img src={mobile} alt="" className="image image--about__world" />
    </picture>
  );
}