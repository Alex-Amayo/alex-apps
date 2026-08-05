export interface Project {
  title: string;
  description: string;
  /** Optional one-line pitch, shown between the title and the description */
  subtitle?: string;
  /** Longer write-up shown in the "Learn more" modal. Blank lines split paragraphs. */
  longDescription?: string;
  /** true = "My Apps"; false = "Apps I've worked on" */
  owned?: boolean;
  /** App logo/icon, shown above the title */
  logo?: string;
  /** Single screenshot, centered inside the tile */
  image?: string;
  /** Let the screenshot bleed past the tile edge (default true) */
  imageBleed?: boolean;
  /** Fill the tile's full height with the screenshot, cropping the sides
   *  instead of fitting it inside an `imageAspect` box. Full-width tiles only. */
  imageFullHeight?: boolean;
  /** Which part of a full-height screenshot survives the side crop (CSS
   *  object-position, e.g. "left top", "30% center"). Defaults to "left top". */
  imagePosition?: string;
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
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/projects/keylens/logo.png",
    image: "/projects/keylens/screenshot.png",
    imageFullHeight: true,
    bg: "#69C9C3",
    textColor: "#FFFFFF",
    tags: [],
    appStore: "https://apps.apple.com/us/app/keylens/id6761850903",
    playStore: "#",
    web: "https://keylensapp.com",
  },
  {
    title: "Citrine",
    owned: false,
    description:
      "A credit card app for Citrine members with onboarding, spend tracking, statements, rewards, and push notifications.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.\n\nNulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim, quis pulvinar tortor faucibus at.",
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
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.\n\nAliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh, quisque a lectus donec consectetuer ligula.",
    logo: "/projects/vervent/logo.png",
    image: "/projects/vervent/screenshot.webp",
    imageAspect: "1200 / 680",
    bg: "#FFFFFF",
    showTitle: false,
    tags: [],
    appStore: "https://apps.apple.com/us/app/total-card/id1574751566",
    playStore:
      "https://play.google.com/store/apps/details?id=com.vervent.total&hl=en_US",
  },
];
