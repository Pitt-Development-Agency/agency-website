import Image from "next/image";
import { SERVICES_DETAILS } from "./constants";

export default function Services() {
  return (
    <>
      <h2 className="font-bold text-4xl pb-10">What we offer</h2>
      <div className="grid grid-cols-5 gap-1">
        {SERVICES_DETAILS.map(({ label, details, imageUrl }) => {
          return (
            <div className="" key={label}>
              <Image src={imageUrl} alt="" />
              <h3 className="font-medium">{label}</h3>
              <p className="text-sm text-secondary">{details}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
