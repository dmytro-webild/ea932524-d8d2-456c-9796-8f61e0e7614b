import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Angelica\'s Veracruz Cuisine | Authentic Mexican Dining',
  description: 'Experience authentic Veracruz-style Mexican cuisine. Fresh local ingredients, traditional recipes, and warm hospitality.',
  openGraph: {
    "title": "Angelica's Veracruz Cuisine",
    "description": "Authentic Mexican flavors in the heart of Veracruz traditions.",
    "siteName": "Angelica's Veracruz Cuisine",
    "type": "website"
  },
};

const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
