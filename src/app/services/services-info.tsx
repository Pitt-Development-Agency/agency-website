import { SERVICE_INFO } from "../constants";

export default function ServicesInfo() {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-3 text-center">Services</h1>
      <p>
        From web development to maintenance, we offer a variety of services to
        help you bring your digital vision to life. Our team of experts is here
        to help you navigate the ever-changing digital landscape.
      </p>
      {SERVICE_INFO.map(({ label, description }) => {
        return (
          <div className="mt-5" key={label}>
            <h2 className="text-2xl font-bold">{label}</h2>
            <p className="pt-3">{description}</p>
          </div>
        );
      })}
    </div>
  );
}
