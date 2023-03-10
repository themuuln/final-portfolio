import { Poppins, Montserrat, Fira_Code, Kanit } from "@next/font/google";

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
