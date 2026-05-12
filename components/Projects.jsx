import Link from "next/link";
import { projects } from "@/lib/projects";
 
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5" />
    </svg>
  );
}
 
function ProjectCard({ title, shortDescription, tags, slug, repoUrl, directRepo }) {
  return (
    <div className="group flex flex-col rounded-xl border border-orange-400/20 bg-[#020617]/70 backdrop-blur-md hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.2),0_0_60px_rgba(0,240,255,0.08)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] p-5 gap-4">
      <div className="flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{shortDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md border border-orange-400/30 text-orange-300 bg-orange-400/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
 
      {directRepo ? (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-400 text-black text-sm font-semibold hover:bg-orange-300 hover:scale-105 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.9 10.96.58.1.8-.25.8-.57v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.33-1.3-1.68-1.3-1.68-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.2 1.8 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.55-.3-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.52.12-3.18 0 0 .98-.32 3.2 1.18a11.2 11.2 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.66.24 2.88.12 3.18.75.8 1.2 1.82 1.2 3.07 0 4.4-2.68 5.34-5.24 5.64.42.36.8 1.1.8 2.22v3.3c0 .32.22.68.8.57A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          Ir al Repositorio
        </a>
      ) : (
        <Link
          href={`/proyectos/${slug}`}
          className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-orange-400/40 text-orange-400 text-sm font-semibold hover:bg-orange-400 hover:text-black transition duration-300"
        >
          Ver detalle
          <ArrowIcon />
        </Link>
      )}
    </div>
  );
}
 
export default function Projects() {
  return (
    <section
      id="projects"
      className="section snap-start scroll-mt-24 min-h-screen flex items-center justify-center pt-10 py-24"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] mb-2">
            Mis trabajos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10">
            Proyectos destacados
          </h2>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}