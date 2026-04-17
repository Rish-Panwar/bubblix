import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Scene from "@/components/Scene";



const bonny = localFont({
  src: '../fonts/Bonny-Variable.woff2',
  variable: '--font-bonny',
  display: 'swap',
  weight: '100 900'
});

const pilcrow = localFont({
  src: '../fonts/PilcrowRounded-Variable.woff2',
  variable: '--font-pilcrow',
  display: 'swap',
  weight: '100 900'
})


export const metadata: Metadata = {
  title: "Bubblix",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#FFD41D] overflow-x-hidden">
      <body className={`${bonny.variable} ${bonny.className} ${pilcrow.variable} ${pilcrow.className} bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]`}>   
        {/* Main Content */}
        <main>
          {children}          
        </main>
      </body>
    </html>
  );
}
