import { Fira_Code as FontMono, Vazirmatn as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["arabic"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
