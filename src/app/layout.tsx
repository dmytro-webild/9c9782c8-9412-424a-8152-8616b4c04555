import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Etris Heating & Air | Trusted HVAC Services in Gainesville, GA',
  description: 'Professional HVAC repair, installation, and maintenance in Gainesville, GA. Fast, honest, and reliable service for your home or business.',
  openGraph: {
    "title": "Etris Heating & Air",
    "description": "Fast, Reliable HVAC Service in Gainesville, GA",
    "type": "website",
    "siteName": "Etris Heating & Air"
  },
};

const mulish = Mulish({ variable: "--font-mulish", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          
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
