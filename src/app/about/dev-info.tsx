import Avatar from "@/components/avatar";
import { ENGINEER_INFO } from "../constants";

export default function DevInfo() {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-3 text-center">Our Mission</h1>
      <p>
        We are a collective of engineers, designers, and creatives who believe
        in the power of technology to transform businesses. We are passionate
        about building products that are both beautiful and functional. Our goal
        is to help our clients unlock their full potential by providing them
        with the tools they need to succeed.
      </p>
      <h2 className="text-2xl mt-6 font-bold">Meet the Engineers</h2>
      {ENGINEER_INFO.map(({ name, title, blurb, imageUrl }) => {
        return (
          <div className="mt-5" key={name}>
            <Avatar name={name} title={title} imageUrl={imageUrl} />
            <p className="pt-3">{blurb}</p>
          </div>
        );
      })}
    </div>
  );
}
