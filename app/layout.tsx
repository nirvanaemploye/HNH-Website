"use client";
import { KoHo, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { ThemeProvider } from "./components/context/themeContext";

const koho = KoHo({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "700",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body
        className={`${koho.variable} ${poppins.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <div className="relative">
            <div className="w-full absolute top-0 left-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent h-[250px] -z-10"></div>
          </div>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
