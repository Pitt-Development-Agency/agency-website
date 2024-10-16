import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  name: string;
  title: string;
  imageUrl: StaticImageData;
}

export default function Avatar({ name, title, imageUrl }: AvatarProps) {
  return (
    <div className="flex items-center">
      <Image
        style={{ borderRadius: "50%" }}
        src={imageUrl}
        alt={`picture of ${name}`}
        height={56}
        width={56}
      />
      <div className="flex flex-col pl-4">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-secondary">{title}</span>
      </div>
    </div>
  );
}
