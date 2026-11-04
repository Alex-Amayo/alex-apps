import type { FrameName } from "./frames";

export interface Screenshot {
  src: string;
  label: string;
}

/** One strip of screenshots, all in the same device frame. */
export interface ScreenshotSet {
  /** Shown on the switch when a project has more than one set. */
  name: string;
  frame: FrameName;
  shots: Screenshot[];
}

export interface Project {
  title: string;
  description: string;
  /** Optional one-line pitch, shown between the title and the description */
  subtitle?: string;
  /** Longer write-up shown in the "Learn more" modal. Blank lines split paragraphs. */
  longDescription?: string;
  /** Framed screenshots, shown as a scrolling strip on a full-width tile. With
   *  more than one set, a switch above the strip flips between them. */
  screenshotSets?: ScreenshotSet[];
  /** true = "My Apps"; false = "Apps I've worked on" */
  owned?: boolean;
  /** App logo/icon, shown above the title */
  logo?: string;
  /** Single screenshot, centered inside the tile */
  image?: string;
  /** Let the screenshot bleed past the tile edge (default true) */
  imageBleed?: boolean;
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
    title: "Key Lens",
    owned: true,
    subtitle: "Music theory made easy!",
    description:
      "Play scales and chords effortlessly. Sequence chords, melody and bass MIDI tracks. Connect to hardware synths and instruments in your DAW over USB or Bluetooth.\n\nA C++ module owns musical timing while JavaScript sends edits and reads published state. Native Swift and Kotlin modules send MIDI to external devices on iOS and Android.",
    longDescription:
      "Compose your next song. Record or sequence chords, melody and bass sections. Find your starting point with common chord progressions from multiple genres, then use arpeggios and strum to shape how your chords play.\n\nConnect to the rest of your setup. Use Key Lens as a MIDI controller over USB or Bluetooth on iOS and Android to play hardware synths or instruments in your DAW. The web version runs in your browser with piano sound.\n\nLearn to play your chords on piano with easy-to-read charts.",
    logo: "/projects/keylens/logo.png",
    screenshotSets: [
      {
        name: "Mobile",
        frame: "keylens-phone",
        shots: [
          { src: "/projects/keylens/marketing/compose-chords.png", label: "Compose" },
          { src: "/projects/keylens/marketing/progressions.png", label: "Chord progressions" },
          { src: "/projects/keylens/marketing/strum.png", label: "Strum" },
          { src: "/projects/keylens/marketing/midi-connection.png", label: "MIDI connections" },
          { src: "/projects/keylens/marketing/midi-remote.png", label: "MIDI remote" },
          { src: "/projects/keylens/marketing/chart.png", label: "Piano chord charts" },
        ],
      },
    ],
    bg: "#FFFFFF",
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
    screenshotSets: [
      {
        name: "Mobile",
        frame: "ios-phone",
        shots: [
          { src: "/projects/citrine/screenshots/01-welcome.webp", label: "Welcome" },
          { src: "/projects/citrine/screenshots/02-home.webp", label: "Home" },
          { src: "/projects/citrine/screenshots/03-card-page.webp", label: "Card Page" },
          { src: "/projects/citrine/screenshots/04-community-and-messages.webp", label: "Community and Messages" },
          { src: "/projects/citrine/screenshots/05-benefits.webp", label: "Benefits" },
          { src: "/projects/citrine/screenshots/06-hotel-and-restaurant-benefits.webp", label: "Hotel and Restaurant Benefits" },
          { src: "/projects/citrine/screenshots/07-browse-hotels-and-restaurants.webp", label: "Browse Hotels and Restaurants" },
          { src: "/projects/citrine/screenshots/08-hotel-booking.webp", label: "Hotel Booking" },
        ],
      },
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
      "A lot of the work happened outside the editor. The app ran through compliance, product, and executive leadership as much as it ran through engineering. I learnt a lot about developing apps in a regulated financial services environment.",
    logo: "/projects/vervent/logo.png",
    image: "/projects/vervent/screenshot.webp",
    imageAspect: "1200 / 680",
    bg: "#FFFFFF",
    showTitle: false,
    tags: [],
    // Store links dropped: the shipped app no longer reflects this work.
  },
];
