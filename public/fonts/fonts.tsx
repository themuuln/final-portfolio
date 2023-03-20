import {
  Poppins,
  Montserrat,
  Fira_Code,
  Kanit,
  Lora,
  Noto_Serif,
  Roboto_Mono,
} from "@next/font/google";
import localFont from "@next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-poppins",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const firacode = Fira_Code({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-firacode",
});

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-kanit",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const noto_serif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});

export const telegraf_regular = localFont({ src: "./PPTelegraf-Regular.otf" });
export const telegraf_ultrabold = localFont({
  src: "./PPTelegraf-UltraBold.otf",
});
export const telegraf_ultralight = localFont({
  src: "./PPTelegraf-UltraLight.otf",
});
