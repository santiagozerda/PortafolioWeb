export default function Hero() {
  return (
    <section
      id="home"
      className="section snap-start scroll-mt-24 min-h-screen flex items-center justify-center py-24"
    >
      <div className="w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
 
        {/* EFECTO SUTIL */}
        <div className="absolute inset-0 bg-orange-500 opacity-5 blur-3xl -z-10"></div>
 
        {/* TEXTO */}
        <div className="md:text-left flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hola, soy{" "}
            <span className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]">
              Santiago
            </span>{" "}
          </h1>
          <p className="mt-6 text-gray-300 text-lg">
            Bienvenidos a mi Portafolio Web, soy un desarrollador backend.
            Con un objetivo crear softwares estructurados en resolver problemas,
            priorizando siempre la integridad de los datos y la escalabilidad del sistema.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/SantiagoZerda-CV-2026.pdf"
              download="Santiago-Zerda-CV-2026.pdf"
              className="relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-orange-400 text-black rounded-lg font-semibold hover:bg-orange-300 hover:scale-105 transition duration-300 shadow-lg"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 3h6l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"
                />
              </svg>
              Ver CV
            </a>
          </div>
        </div>
 
        {/* IMAGEN */}
        <div className="flex justify-center md:justify-end items-center">
          <img
            src="/images/logo.png"
            alt="Logo developer"
            className="w-80 md:w-[400px] lg:w-[440px] drop-shadow-[0_0_50px_rgba(251,146,60,0.8)] transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}