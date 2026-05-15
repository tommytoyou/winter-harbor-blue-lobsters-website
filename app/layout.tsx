import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/lib/cart";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Winter Harbor Blue Lobsters | Premium Maine Lobster",
    template: "%s | Winter Harbor Blue Lobsters",
  },
  description:
    "Hand-Selected. Cold-Water Perfection. Ultra-premium Maine lobster from Winter Harbor to the world's finest tables.",
  keywords: [
    "premium lobster",
    "Maine lobster",
    "luxury seafood",
    "chef lobster",
    "Winter Harbor",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Winter Harbor Blue Lobsters",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${dmSans.variable} min-h-screen antialiased`}
      >
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
