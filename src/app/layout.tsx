import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";
import { Lato } from "next/font/google";



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


const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          
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
