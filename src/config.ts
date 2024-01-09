import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://midusources.dev/", // replace this with your deployed domain
  author: "Pablo Fernández",
  desc: "Un blog sobre todos los recursos mencionados en los streams de Midudev",
  title: "MiduSources",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/midudev",
    linkTitle: `Midudev on Github`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/pfernandez98",
    linkTitle: `Pablo Fernández on Github`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/midudev/",
    linkTitle: `Midu on Twitch`,
    active: true,
  },
];
