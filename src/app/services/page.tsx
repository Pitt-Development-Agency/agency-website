import aboutImage from "@/assets/about.png";
import Banner from "@/components/banner";
import ServicesInfo from "./services-info";

export default function Services() {
  return (
    <>
      <Banner src={aboutImage} alt="banner" />
      <ServicesInfo />
    </>
  );
}
