export interface Project {
  title: string;
  description: string;
  /** true = "My Apps"; false = "Apps I've worked on" */
  owned?: boolean;
  /** App logo/icon, shown above the title */
  logo?: string;
  /** Single screenshot, centered inside the tile */
  image?: string;
  /** CSS aspect-ratio for the screenshot's box (e.g. "1200 / 786"). Keeps card heights consistent; defaults to 1200 / 786. */
  imageAspect?: string;
  /** Tile background color */
  bg?: string;
  /** Text color (title + description). Defaults to the zinc palette. */
  textColor?: string;
  /** Invert the logo's colors (for monochrome wordmarks on dark tiles) */
  logoInvert?: boolean;
  /** Show the title text next to the logo. Defaults to true; set false when the logo already includes the name. */
  showTitle?: boolean;
  tags: string[];
  appStore?: string;
  playStore?: string;
  web?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "KeyLens",
    owned: true,
    description:
      "Build, play and learn chord progressions. Includes an in-app purchase that lets users play external DAWs, synthesizers, and MIDI hardware over Bluetooth LE or USB.",
    logo: "/projects/keylens/logo.png",
    image: "/projects/keylens/screenshot.png",
    bg: "#69C9C3",
    textColor: "#FFFFFF",
    tags: [],
    appStore: "https://apps.apple.com/us/app/keylens/id6761850903",
    playStore: "#",
    web: "https://keylensapp.com",
  },
  {
    title: "Citrine Members",
    owned: false,
    description:
      "A credit card app for Citrine members with onboarding, spend tracking, statements, rewards, and push notifications.",
    logo: "/projects/citrine/logo.jpeg",
    image: "/projects/citrine/screenshot.png",
    bg: "#BD7901",
    textColor: "#FFFFFF",
    tags: [],
    appStore: "https://apps.apple.com/us/app/citrine-members/id6550923036",
  },
  {
    title: "Vervent",
    owned: false,
    description:
      "Led mobile app development for Total Card (acquired by Vervent), bringing their web platform's credit card management features to iOS and Android.",
    logo: "/projects/vervent/logo.png",
    image: "/projects/vervent/screenshot.webp",
    imageAspect: "1200 / 680",
    bg: "#FFFFFF",
    showTitle: false,
    tags: [],
  },
];
