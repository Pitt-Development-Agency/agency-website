import Banner from "@/components/banner";
import Footer from "./footer";
import Services from "./services";
import bannerImage from "@/assets/banner.png";

export default function Home() {
  return (
    <>
      <Banner src={bannerImage} alt="banner" />
      <Services />
      <Footer />
    </>
  );
}
