export interface Project {
  title: string;
  description: string;
  tags: string[];
  appStore?: string;
  playStore?: string;
  web?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "QuickCart",
    description:
      "Cross-platform e-commerce app with real-time cart sync, Stripe payments, and push notifications — runs natively on iOS and Android from a single codebase.",
    tags: ["React Native", "TypeScript", "Expo", "Zustand", "Stripe"],
    appStore: "#",
    playStore: "#",
    featured: true,
  },
  {
    title: "TrailMate",
    description:
      "Offline-first hiking companion with turn-by-turn navigation, GPX route recording, and trail condition reports that work without cell service.",
    tags: ["React Native", "TypeScript", "Expo", "MapLibre", "Supabase"],
    appStore: "#",
    playStore: "#",
    featured: true,
  },
  {
    title: "PocketCoach",
    description:
      "Personalized fitness coaching app with adaptive workouts, progress analytics, and a web dashboard for coaches to manage their clients.",
    tags: ["React Native", "TypeScript", "TanStack Query", "Firebase"],
    appStore: "#",
    playStore: "#",
    web: "#",
    featured: true,
  },
  {
    title: "NativeVault",
    description:
      "Secure credential storage app for iOS using a custom Swift native module to interface directly with the Keychain API beyond what React Native exposes.",
    tags: ["React Native", "TypeScript", "Swift (Native Module)", "Keychain"],
    appStore: "#",
  },
  {
    title: "DriveLog",
    description:
      "Mileage and expense tracker with Android Auto integration powered by a Kotlin native module — handles IPC and CarAppService bindings that RN can't reach.",
    tags: [
      "React Native",
      "TypeScript",
      "Kotlin (Native Module)",
      "Android Auto",
    ],
    playStore: "#",
  },
  {
    title: "Folio",
    description:
      "Portfolio builder with fluid gesture navigation, physics-based spring animations via Reanimated, and a custom Skia canvas for drawing and signature capture.",
    tags: ["React Native", "TypeScript", "Expo", "Reanimated", "Skia"],
    appStore: "#",
    playStore: "#",
    github: "#",
  },
];
