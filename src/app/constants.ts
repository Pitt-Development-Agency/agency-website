import skylinePic from "../assets/cityscape.png";

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
