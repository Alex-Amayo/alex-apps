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
  /** Figma file / Community listing — renders a "Figma" pill */
  figma?: string;
}

export const projects: Project[] = [
  {
    title: "KeyLens",
    owned: true,
    description:
      "Play chords and scales. Connect to any DAW, synth, or groovebox over Bluetooth or USB.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/projects/keylens/logo.png",
    image: "/projects/keylens/screenshot.png",
    imageFullHeight: true,
    bg: "#69C9C3",
    textColor: "#FFFFFF",
    tags: [],
    appStore: "https://apps.apple.com/us/app/key-lens/id6761850903",
    playStore: "https://play.google.com/apps/testing/com.alexamayo.keylens",
    web: "https://keylensapp.com",
  },
  {
    title: "Citrine",
    owned: false,
    description:
      "A credit card app for Citrine members with onboarding, spend tracking, statements, rewards, and push notifications.",
    longDescription:
      "I joined Citrine, a startup in New York, as a mobile engineer, helping launch their iOS app and giving members access to their credit accounts on mobile.\n\nStartups move fast. Every decision had to earn its place, and the work was finding the highest-leverage opportunities to improve the product.\n\nI built the analytics layer and spent real time in it, watching where people hesitated, where they dropped, and what they did instead of what we assumed they'd do. I brought those insights to product and marketing, working together to identify opportunities, prioritize optimizations, and measure their impact.",
    logo: "/projects/citrine/logo.jpeg",
    image: "/projects/citrine/screenshot.png",
    bg: "#BD7901",
    textColor: "#FFFFFF",
    tags: [],
    // Pulled from the App Store; the listing 404s.
  },
  {
    title: "Vervent",
    owned: false,
    description:
      "Worked on the first Mobile App for Total Card (acquired by Vervent), bringing their web platform's credit card management features to iOS and Android.",
    longDescription:
      "The web app already existed. My job was to put it in people's pockets.\n\nI joined Vervent in South Dakota, then still Total Card, as the team's first React Native engineer. I built the mobile app from the ground up, owning frontend architecture, native integrations, and the release pipeline.\n\nA lot of the work happened outside the editor. The app ran through compliance, product, and executive leadership as much as it ran through engineering.\n\n",
    logo: "/projects/vervent/logo.png",
    image: "/projects/vervent/screenshot.webp",
    imageAspect: "1200 / 680",
    bg: "#FFFFFF",
    showTitle: false,
    tags: [],
    // Store links dropped: the shipped app no longer reflects this work.
  },
];
