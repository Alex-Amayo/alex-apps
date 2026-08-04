import type { Project } from "./projects";

/** Code projects — libraries and tools rather than shipped products.
 *  These tiles link straight out to GitHub / the website (no "Learn more"). */
export const codeProjects: Project[] = [
  {
    title: "NativeCtx UI",
    subtitle: "A React Native UI library optimized for LLMs.",
    description:
      "Generate iOS, Android, and web interfaces simultaneously with platform-specific navigation patterns and native components where users expect them.",
    image: "/projects/nativectx-ui/placeholder.svg",
    imageBleed: false,
    bg: "#1D1D1F",
    textColor: "#FFFFFF",
    tags: [],
    github: "https://github.com/nativectx/ui",
    web: "https://nativectx.com",
  },
];
