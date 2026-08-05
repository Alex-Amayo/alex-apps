import type { Project } from "./projects";

/** Side projects — libraries, tools, and templates rather than shipped products.
 *  These tiles link straight out to GitHub / the website (no "Learn more"). */
export const codeProjects: Project[] = [
  {
    title: "NativeCtx UI",
    subtitle: "A React Native UI library optimized for LLMs.",
    description:
      "Generate iOS, Android, and web interfaces simultaneously with platform-specific navigation patterns and native components where users expect them.",
    image: "/projects/nativectx-ui/screenshot.png",
    imageAspect: "1996 / 1588",
    imageBleed: false,
    bg: "#1D1D1F",
    textColor: "#FFFFFF",
    tags: [],
    github: "https://github.com/nativectx/ui",
    web: "https://nativectx.com",
  },
  {
    title: "App Store Asset Template",
    subtitle:
      "A Figma template for Apple App Store and Google Play Store listings.",
    description:
      "Typography, colors, and copy are shared variables — change a value once and every store asset updates with it. Works great with Claude's Figma Plugin.",
    image: "/projects/store-assets-template/template_cover.png",
    imageAspect: "1920 / 1080",
    imageBleed: false,
    bg: "#241F35",
    textColor: "#FFFFFF",
    tags: [],
  },
];
