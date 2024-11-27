import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Grande Bisseria",
  description: "Grande Bisseria Piramide d'escitto",
  icons: {
    icon: "/pizza.png", // Percorso relativo all'icona
  },
};


const navItems = [
  { text: 'Home', link: '/', current: true },
  { text: 'statistiche', link: '#' },
  { text: "Ordina nuovi ingredienti", link: '#' },
  { text: 'Recensioni', link: '#' },
  { text: 'Admin', link: '#' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar navItems={navItems}/>
        {children}
      </body>
    </html>
  );
}
