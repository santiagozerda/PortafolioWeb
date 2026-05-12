export default function About() {
  return (
    <section
      id="about"
      className="section snap-start scroll-mt-24 min-h-screen flex items-center justify-center pt-5 py-24"
    >
      <div className="w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
 
        {/* TEXTO IZQUIERDA */}
        <div>
          <p className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] mb-2">
            Sobre mí
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Desarrollador enfocado en crear soluciones claras y escalables
          </h2>
          <p className="mt-6 text-gray-300">
            Soy un desarrollador backend con enfoque en APIs REST, arquitectura
            limpia y buenas prácticas. Construir sistemas escalables, mantenibles
            y bien estructurados.
          </p>
          <p className="mt-4 text-gray-300">
            Me encuentro en constante formación, explorando nuevas tecnologías
            y mejorando mis habilidades para enfrentar desafíos.
          </p>
 
          {/* UBICACIÓN */}
          <div className="mt-8 border border-orange-400/20 rounded-xl p-5 bg-[#020617]/60 backdrop-blur-md">
            <h3 className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] font-semibold mb-4">
              Ubicación
            </h3>
            <p className="text-gray-300 text-sm">
              Tucuman, Argentina
            </p>
          </div>
        </div>
 
        {/* CARDS DERECHA */}
        <div className="grid gap-6 mt-8 md:mt-16 justify-items-center">
 
          {/* STACK TECNOLÓGICO */}
          <div className="p-6 rounded-xl border border-orange-400/20 bg-[#020617]/70 backdrop-blur-md hover:shadow-[0_0_30px_rgba(251,146,60,0.2),0_0_60px_rgba(0,240,255,0.08)] transition hover:-translate-y-2 hover:scale-[1.02] max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]">
              Stack Tecnológico
            </h3>
            <div className="flex flex-wrap gap-4">
 
              {/* JAVA */}
              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="Java" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Java</span>
              </div>
 
              {/* DOCKER */}
              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="Docker" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Docker</span>
              </div>
 
              {/* POSTMAN */}
              <div className="group relative">
                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="w-10 h-10 hover:scale-110 transition" alt="Postman" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Postman</span>
              </div>
 
              {/* SPRING */}
              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="Spring Boot" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Spring Boot</span>
              </div>
 
              {/* MYSQL */}
              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="MySQL" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">MySQL</span>
              </div>

              {/*GITHUB */}
              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="GitHub" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">GitHub</span>
              </div>
 
            </div>
          </div>
 
          {/* EN FORMACIÓN */}
          <div className="p-6 rounded-xl border border-orange-400/20 bg-[#020617]/70 backdrop-blur-md hover:shadow-[0_0_30px_rgba(251,146,60,0.2),0_0_60px_rgba(0,240,255,0.08)] transition hover:-translate-y-2 hover:scale-[1.02]">
            <h3 className="text-lg font-semibold mb-4 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]">
              En formación
            </h3>
            <p className="text-gray-400 text-sm">
              Actualmente estoy ampliando mis conocimientos en 
              tecnologías y herramientas para seguir creciendo como
              desarrollador
            </p>
            <div className="flex flex-wrap gap-4">

              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="JavaScript" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">JavaScript</span>
              </div>

              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="Next.js" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Next.js</span>
              </div>

              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="React" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">React</span>
              </div>

              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="Tailwind" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Tailwind</span>
              </div>

              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="Swagger" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Swagger</span>
              </div>

              <div className="group relative">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-10 h-10 hover:scale-110 transition" alt="Spring Cloud" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Spring Cloud</span>
              </div>


            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}