import Image from "next/image";
import bannerImage from "@/assets/banner.png";

export default function Banner() {
  return (
    <div className="flex justify-center mb-14">
      {/* TODO: Make image width match content width */}
      <Image src={bannerImage} alt="" />
    </div>
  );
}
