import Banner from "@/components/banner";
import DevInfo from "./dev-info";
import aboutImage from "@/assets/about.png";

export default function About() {
  return (
    <>
      <Banner src={aboutImage} alt="banner" />
      <DevInfo />
    </>
  );
}
