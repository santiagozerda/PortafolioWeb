import { projects, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
 
// Genera las rutas estáticas para cada proyecto
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
 
// Metadata dinámica por proyecto
export async function generateMetadata({ params }) {
  const {slug} = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} | Portfolio` };
}


function DescriptionBlock({ block }) {
  if (block.type === "heading") {
    return (
      <h3 className="text-lg font-semibold text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] mt-8 mb-2">
        {block.text}
      </h3>
    );
  }
 
  if (block.type === "list") {
    return (
      <ul className="space-y-2 mt-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300">
            {/* Viñeta naranja */}
            <span className="mt-[7px] w-2 h-2 rounded-full bg-orange-400 shrink-0 drop-shadow-[0_0_4px_rgba(251,146,60,0.8)]"></span>
            {item}
          </li>
        ))}
      </ul>
    );
  }
 
  // type: "paragraph" — por defecto
  return (
    <p className="text-gray-300 leading-relaxed">
      {block.text}
    </p>
  );
}
 
export default async function ProjectPage({ params }) {
  const {slug} = await params;
  const project = getProjectBySlug(slug);
 
  // Si el slug no existe → página 404
  if (!project) notFound();
 
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
 
        {/* VOLVER */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition mb-10 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 group-hover:-translate-x-1 transition"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Volver al portfolio
        </Link>
 
        {/* TÍTULO Y TAGS */}
        <p className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] mb-2 text-sm">
          Proyecto
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          {project.title}
        </h1>
 
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-md border border-orange-400/30 text-orange-300 bg-orange-400/5"
            >
              {tag}
            </span>
          ))}
        </div>
 
        {/* GALERÍA DE IMÁGENES */}
        <ImageGallery images={project.images} />
 
        {/* DESCRIPCIÓN DETALLADA */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] mb-6">
            Descripción del proyecto
          </h2>
 
          {/* Renderiza cada bloque en orden */}
          <div className="space-y-4">
            {project.description.map((block, i) => (
              <DescriptionBlock key={i} block={block} />
            ))}
          </div>
        </div>
 
        {/* BOTÓN REPOSITORIO */}
        <div className="mt-12">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-orange-400 text-black font-semibold hover:bg-orange-300 hover:scale-105 transition duration-300 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.9 10.96.58.1.8-.25.8-.57v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.33-1.3-1.68-1.3-1.68-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.2 1.8 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.55-.3-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.52.12-3.18 0 0 .98-.32 3.2 1.18a11.2 11.2 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.66.24 2.88.12 3.18.75.8 1.2 1.82 1.2 3.07 0 4.4-2.68 5.34-5.24 5.64.42.36.8 1.1.8 2.22v3.3c0 .32.22.68.8.57A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            Ir al Repositorio
          </a>
        </div>
 
      </div>
    </main>
  );
}