import { NAVIGATION_LINKS } from "@/app/constants";
import Button from "@/components/button";

export default function Nav() {
  return (
    <div className="flex justify-between items-center min-h-16 px-10 border-b">
      <h1 className="font-bold text-lg">CodeCypher</h1>
      <nav className="flex gap-9 items-center">
        {NAVIGATION_LINKS.map(({ label, url }) => {
          return (
            <a className="text-sm" key={label} href={url}>
              {label}
            </a>
          );
        })}
        <Button>Get in touch</Button>
      </nav>
    </div>
  );
}
