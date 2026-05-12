"use client";
 
import Link from "next/link";
import { usePathname } from "next/navigation";
 
export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
 
  // Si estamos en home usamos anclas directas (#home),
  // si estamos en otra página agregamos la raíz (/#home)
  const href = (anchor) => (isHome ? anchor : `/${anchor}`);
 
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-center py-4 h-20">
 
      {/* LOGO — siempre lleva al inicio */}
      <Link href="/" className="absolute left-6 top-1/2 -translate-y-[30%] flex items-center">
        <img
          src="/images/logo.png"
          className="w-18 md:w-22 lg:w-24 opacity-90 hover:scale-110 transition"
          alt="Logo"
        />
      </Link>
 
      {/* NAV LINKS */}
      <nav className="mt-4 flex items-center gap-8 px-8 py-3 rounded-full bg-[#020617]/80 backdrop-blur-xl border border-orange-400/20 shadow-[0_0_25px_rgba(251,146,60,0.25),0_0_60px_rgba(0,240,255,0.1)]">
 
        <a href={href("#home")} className="text-gray-300 hover:text-orange-300 hover:scale-110 transition">
          Inicio
        </a>
        <a href={href("#about")} className="text-gray-300 hover:text-orange-300 hover:scale-110 transition">
          Sobre Mí
        </a>
        <a href={href("#projects")} className="text-gray-300 hover:text-orange-300 hover:scale-110 transition">
          Proyectos
        </a>
        <a href={href("#contact")} className="text-gray-300 hover:text-orange-300 hover:scale-110 transition">
          Contacto
        </a>
 
        <div className="w-px h-6 bg-gray-600"></div>
 
        {/* GitHub */}
        <a
          href="https://github.com/santiagozerda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-orange-300 hover:scale-110 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.9 10.96.58.1.8-.25.8-.57v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.33-1.3-1.68-1.3-1.68-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.2 1.8 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.55-.3-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.52.12-3.18 0 0 .98-.32 3.2 1.18a11.2 11.2 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.66.24 2.88.12 3.18.75.8 1.2 1.82 1.2 3.07 0 4.4-2.68 5.34-5.24 5.64.42.36.8 1.1.8 2.22v3.3c0 .32.22.68.8.57A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </a>
 
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/santiagozerda/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-orange-300 hover:scale-110 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4v12h-4V8zm7.5 0h3.8v1.64h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V20h-4v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V20h-4V8z" />
          </svg>
        </a>
      </nav>
    </header>
  );
}