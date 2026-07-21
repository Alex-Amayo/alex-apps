export interface Project {
  title: string;
  description: string;
  /** App logo/icon, shown above the title */
  logo?: string;
  /** Single screenshot, centered inside the tile */
  image?: string;
  /** Tile background color */
  bg?: string;
  tags: string[];
  appStore?: string;
  playStore?: string;
  web?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "KeyLens",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    logo: "/KeyLens_logo.png",
    image: "/KeyLens.png",
    bg: "#FFFFFF",
    tags: [],
    appStore: "https://apps.apple.com/us/app/keylens/id6761850903",
    playStore: "#",
    web: "https://keylensapp.com",
  },
  {
    title: "Citrine Members",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    logo: "/Citrine_logo.jpeg",
    image: "/Citrine.png",
    bg: "#FFFFFF",
    tags: [],
    appStore: "https://apps.apple.com/us/app/citrine-members/id6550923036",
  },
];
