// RootLayout.tsx (or layout.tsx)

import { Metadata } from "next";
import "./globals.css"; // Import global CSS for fonts
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./Componenets/NavBar";


// Metadata for SEO
export const metadata: Metadata = {
  title: "Responsive Design Website",
  description: "A modern and responsive website built with Next.js.",
  openGraph: {
    title: "Responsive Design Website",
    description: "A modern and responsive website built with Next.js.",
    url: "https://yourwebsite.com",
    siteName: "My Responsive Site",
  },
};

// Set up viewport
export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">  {/* Apply the custom font via Tailwind CSS */}
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
