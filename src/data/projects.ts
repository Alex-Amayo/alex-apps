export interface Project {
  title: string;
  description: string;
  image?: string;
  screenshots?: string[];
  tags: string[];
  appStore?: string;
  playStore?: string;
  web?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "QuickCart",
    description:
      "Cross-platform e-commerce app with real-time cart sync, Stripe payments, and push notifications — runs natively on iOS and Android from a single codebase.",
    screenshots: [
      "/screenshots/quickcart/1.png",
      "/screenshots/quickcart/2.png",
      "/screenshots/quickcart/3.png",
      "/screenshots/quickcart/4.png",
    ],
    tags: ["React Native", "TypeScript", "Expo", "Zustand", "Stripe"],
    appStore: "#",
    playStore: "#",
  },
  {
    title: "PocketCoach",
    description:
      "Personalized fitness coaching app with adaptive workouts, progress analytics, and a web dashboard for coaches to manage their clients.",
    screenshots: [
      "/screenshots/pocketcoach/1.png",
      "/screenshots/pocketcoach/2.png",
      "/screenshots/pocketcoach/3.png",
    ],
    tags: ["React Native", "TypeScript", "TanStack Query", "Firebase"],
    appStore: "#",
    playStore: "#",
    web: "#",
  },
];
