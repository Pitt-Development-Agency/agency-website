import skylinePic from "@/assets/cityscape.png";
import ryanPic from "@/assets/ryan.jpg";
import michaelPic from "@/assets/michael.jpg";

export const APP_ROUTES = {
  SERVICES: "/services",
  ABOUT: "/about",
  CONTACT: "/contact",
};

export const NAVIGATION_LABELS = {
  SERVICES: "Services",
  ABOUT: "About",
  CONTACT: "Contact",
};

export const NAVIGATION_LINKS: { label: string; url: string }[] = [
  {
    label: NAVIGATION_LABELS.SERVICES,
    url: APP_ROUTES.SERVICES,
  },
  {
    label: NAVIGATION_LABELS.ABOUT,
    url: APP_ROUTES.ABOUT,
  },
  {
    label: NAVIGATION_LABELS.CONTACT,
    url: APP_ROUTES.CONTACT,
  },
];

export const SERVICES_DETAILS = [
  {
    label: "Custom Web Development",
    details: "Harness the power of AI to automate tasks and gain insights.",
    imageUrl: skylinePic,
  },
  {
    label: "Cybersecurity",
    details: "Harness the power of AI to automate tasks and gain insights.",
    imageUrl: skylinePic,
  },
  {
    label: "Blockchain",
    details: "Harness the power of AI to automate tasks and gain insights.",
    imageUrl: skylinePic,
  },
  {
    label: "Gaming",
    details: "We'll build you a website that's as unique as you are.",
    imageUrl: skylinePic,
  },
  {
    label: "AI & Machine Learning",
    details: "Harness the power of AI to automate tasks and gain insights.",
    imageUrl: skylinePic,
  },
];

export const ENGINEER_INFO = [
  {
    name: "Ryan Walter",
    title: "Founder, Engineer",
    blurb:
      "I&apos;m baby poke trust fund typewriter same, polaroid vaporware tbh synth. Tacos sartorial tumblr YOLO retro mukbang JOMO listicle you probably haven&apos;t heard of them mlkshk neutra. YOLO subway tile fixie DSA bicycle rights taxidermy jianbing meggings. Flannel tofu selfies you probably haven&apos;t heard of them solarpunk vibecession cred grailed coloring book four dollar toast craft beer pop-up poke freegan.",
    imageUrl: ryanPic,
  },
  {
    name: "Michael DeAngelis",
    title: "Founder, Engineer",
    blurb:
      "Air plant neutral milk hotel 8-bit fingerstache listicle bodega boys. Solarpunk succulents pinterest fashion axe dreamcatcher celiac hammock polaroid hella williamsburg gentrify. Heirloom gluten-free put a bird on it keffiyeh cold-pressed. Mixtape ethical beard ascot, mlkshk DIY kale chips lo-fi tbh pitchfork edison bulb. Mumblecore seitan celiac taxidermy.",
    imageUrl: michaelPic,
  },
];

export const SERVICE_INFO = [
  {
    label: "Web Development",
    description:
      "Vape cronut cardigan pinterest VHS. Tofu forage af jawn viral vegan, Brooklyn cardigan godard pickled schlitz glossier messenger bag lumbersexual. XOXO portland distillery vice narwhal lyft enamel pin big mood pork belly Brooklyn vexillologist mukbang vape. Neutral milk hotel normcore etsy, activated charcoal green juice aesthetic artisan.",
  },
  {
    label: "Web Maintenance",
    description:
      " Truffaut yuccie Brooklyn lo-fi. Butcher master cleanse DIY, vape enamel pin etsy biodiesel food truck aesthetic freegan authentic mixtape gluten-free tattooed. Same pug microdosing, affogato kogi +1 tattooed tofu pork belly lomo kitsch marxism enamel pin chambray.",
  },
];
