export interface Project {
  title: string;
  description: string;
  /** true = "My Apps"; false = "Apps I've worked on" */
  owned?: boolean;
  /** App logo/icon, shown above the title */
  logo?: string;
  /** Single screenshot, centered inside the tile */
  image?: string;
  /** Tile background color */
  bg?: string;
  /** Text color (title + description). Defaults to the zinc palette. */
  textColor?: string;
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
    logo: "/KeyLens_logo.png",
    image: "/KeyLens.png",
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
    logo: "/Citrine_logo.jpeg",
    image: "/Citrine.png",
    bg: "#BD7901",
    textColor: "#FFFFFF",
    tags: [],
    appStore: "https://apps.apple.com/us/app/citrine-members/id6550923036",
  },
];
