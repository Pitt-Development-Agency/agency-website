import Image, { StaticImageData } from "next/image";

interface BannerProps {
  src: StaticImageData;
  alt?: string;
}

export default function Banner({ src, alt = "" }: BannerProps) {
  return (
    <div className="flex justify-center mb-14">
      {/* TODO: Make image width match content width */}
      <Image src={src} alt={alt} />
    </div>
  );
}
