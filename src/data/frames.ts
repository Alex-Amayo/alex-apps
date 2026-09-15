/** Device frames in /public/frames. Each frame's screen is a flat placeholder,
 *  so a screenshot laid over the `screen` rect replaces it. Every value is in
 *  the frame PNG's own pixels; `radius` rounds the screenshot's corners to the
 *  frame's screen. Frames are named after the screenshot folders they fit, e.g.
 *  /projects/keylens/screenshots/ios-phone/*. */
export interface Frame {
  src: string;
  width: number;
  height: number;
  screen: { x: number; y: number; width: number; height: number; radius: number };
}

export const frames = {
  "ios-phone": {
    src: "/frames/ios-phone.png",
    width: 1066,
    height: 2179,
    screen: { x: 57, y: 55, width: 951, height: 2069, radius: 145 },
  },
  "android-phone": {
    src: "/frames/android-phone.png",
    width: 1016,
    height: 2162,
    screen: { x: 35, y: 35, width: 939, height: 2092, radius: 34 },
  },
  "ios-tablet": {
    src: "/frames/ios-tablet.png",
    width: 1360,
    height: 1791,
    screen: { x: 34, y: 34, width: 1292, height: 1723, radius: 25 },
  },
  "android-tablet": {
    src: "/frames/android-tablet.png",
    width: 2670,
    height: 4110,
    screen: { x: 135, y: 135, width: 2400, height: 3840, radius: 87 },
  },
  web: {
    src: "/frames/web.png",
    width: 1440,
    height: 984,
    screen: { x: 0, y: 80, width: 1440, height: 904, radius: 0 },
  },
} satisfies Record<string, Frame>;

export type FrameName = keyof typeof frames;
