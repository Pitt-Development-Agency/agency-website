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
