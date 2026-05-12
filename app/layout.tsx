import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santiago Zerda | Backend Developer",
  description: "Portafolio de Santiago Zerda, desarrollador backend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased snap-y snap-mandatory overflow-x-hidden bg-gradient-to-br from-[#020617] via-[#020617] to-[#0a0f1f] text-white`}
      >
        {/* EFECTOS DE FONDO */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-orange-500 opacity-20 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-orange-400 opacity-20 rounded-full blur-[140px]"></div>
          <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-400 opacity-10 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* EFECTO SCANLINES */}
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,white_3px)]"></div>

        <Navbar />

        <main>{children}</main>

        {/* COMPONENTE DEL CURSOR (CLIENT SIDE) */}
        <CustomCursor />
      </body>
    </html>
  );
}