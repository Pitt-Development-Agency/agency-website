import Button from "@/components/button";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-4xl pb-3">
        Ready to bring your digital vision to life?
      </h2>
      <p className="pb-8">
        We&apos;d love to hear about your project and hear about we can help.
      </p>
      <Button>Get in touch</Button>
    </div>
  );
}
