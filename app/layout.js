import { Baloo_2, Nunito_Sans } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Nerd's Guide To — A Compendium for Curious Geeks",
  description:
    "A growing compendium of deep-dive guides for the things worth geeking out about. First up: Coffee 101.",
  icons: {
    icon: "/images/logo-mark.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
