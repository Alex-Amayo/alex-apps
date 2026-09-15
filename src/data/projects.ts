import type { FrameName } from "./frames";

export interface Project {
  title: string;
  description: string;
  /** Optional one-line pitch, shown between the title and the description */
  subtitle?: string;
  /** Longer write-up shown in the "Learn more" modal. Blank lines split paragraphs. */
  longDescription?: string;
  /** Phone screenshots. On a full-width tile they replace `image` with a
   *  scrolling strip under the text. */
  screenshots?: { src: string; label: string }[];
  /** true = "My Apps"; false = "Apps I've worked on" */
  owned?: boolean;
  /** App logo/icon, shown above the title */
  logo?: string;
  /** Single screenshot, centered inside the tile */
  image?: string;
  /** Let the screenshot bleed past the tile edge (default true) */
  imageBleed?: boolean;
  /** Two screenshots in device frames, shown instead of `image`: the first is
   *  the large device at the back, the second sits in front of it. */
  devices?: [
    { frame: FrameName; src: string; label: string },
    { frame: FrameName; src: string; label: string },
  ];
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
    devices: [
      { frame: "web", src: "/projects/keylens/screenshots/web/03-remote.png", label: "Remote on the web" },
      { frame: "ios-phone", src: "/projects/keylens/screenshots/ios-phone/07-remote.png", label: "Remote on iPhone" },
    ],
    bg: "#000000",
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
    screenshots: [
      { src: "/projects/citrine/screenshots/01-welcome.webp", label: "Welcome" },
      { src: "/projects/citrine/screenshots/02-home.webp", label: "Home" },
      { src: "/projects/citrine/screenshots/03-card-page.webp", label: "Card Page" },
      { src: "/projects/citrine/screenshots/04-community-and-messages.webp", label: "Community and Messages" },
      { src: "/projects/citrine/screenshots/05-benefits.webp", label: "Benefits" },
      { src: "/projects/citrine/screenshots/06-hotel-and-restaurant-benefits.webp", label: "Hotel and Restaurant Benefits" },
      { src: "/projects/citrine/screenshots/07-browse-hotels-and-restaurants.webp", label: "Browse Hotels and Restaurants" },
      { src: "/projects/citrine/screenshots/08-hotel-booking.webp", label: "Hotel Booking" },
    ],
    logo: "/projects/citrine/logo.jpeg",
    bg: "#FFFFFF",
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
