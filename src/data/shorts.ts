export interface Short {
  /** YouTube video ID — the part after /shorts/ or ?v= in the URL. */
  id: string;
  /** Used for the card label and the iframe title (accessibility). */
  title: string;
  /** Optional thumbnail override; defaults to the YouTube thumbnail for `id`. */
  poster?: string;
}

export const shorts: Short[] = [
  { id: "FvYiqjki-1E", title: "Building a feature with Expo Router" },
  { id: "FvYiqjki-1E", title: "React Native state management in 60s" },
  { id: "FvYiqjki-1E", title: "Shipping to the App Store" },
  { id: "FvYiqjki-1E", title: "Swift tips for RN developers" },
];
