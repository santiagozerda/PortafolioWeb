"use client";
 
import { useState } from "react";
 
export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState(null); // null | "loading" | "ok" | "error"
 
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
 
  const handleSubmit = async () => {
    // Validación básica
    if (!form.nombre || !form.email || !form.asunto || !form.mensaje) {
      alert("Por favor completá todos los campos.");
      return;
    }
 
    setStatus("loading");
 
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
 
      if (res.ok) {
        setStatus("ok");
        setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
 
  return (
    <section
      id="contact"
      className="section snap-start scroll-mt-24 min-h-screen flex items-center justify-center pt-5 pb-10"
    >
      <div className="w-full max-w-5xl mx-auto px-6">
 
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] mb-2">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10">
            Hablemos
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Me encuentro disponible para trabajar en nuevos proyectos o colaboracion en equipo.
            Enviame un mail y te respondere a la brevedad.
          </p>
        </div>
 
        {/* FORMULARIO */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-8 rounded-2xl border border-orange-400/30 bg-[#020617]/70 backdrop-blur-md shadow-[0_0_25px_rgba(251,146,60,0.08)] hover:border-orange-400/60 hover:shadow-[0_0_40px_rgba(251,146,60,0.25)] transition duration-300 hover:-translate-y-2 hover:scale-[1.01]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
              {/* NOMBRE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300 font-medium">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="bg-[#0a0f1f] border border-orange-400/20 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-400/30 focus:shadow-[0_0_10px_rgba(251,146,60,0.2)] transition duration-200"
                />
              </div>
 
              {/* EMAIL */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-[#0a0f1f] border border-orange-400/20 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-400/30 focus:shadow-[0_0_10px_rgba(251,146,60,0.2)] transition duration-200"
                />
              </div>
 
              {/* ASUNTO */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm text-gray-300 font-medium">Asunto</label>
                <input
                  type="text"
                  name="asunto"
                  value={form.asunto}
                  onChange={handleChange}
                  placeholder="¿De qué se trata?"
                  className="bg-[#0a0f1f] border border-orange-400/20 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-400/30 focus:shadow-[0_0_10px_rgba(251,146,60,0.2)] transition duration-200"
                />
              </div>
 
              {/* MENSAJE */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm text-gray-300 font-medium">Mensaje</label>
                <textarea
                  rows="4"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Contame tu idea o consulta..."
                  className="bg-[#0a0f1f] border border-orange-400/20 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 resize-none focus:outline-none focus:ring-1 focus:ring-orange-400/30 focus:shadow-[0_0_10px_rgba(251,146,60,0.2)] transition duration-200"
                />
              </div>
 
              {/* BOTÓN */}
              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-orange-400 text-black font-semibold text-sm hover:bg-orange-300 hover:scale-[1.02] transition duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </>
                  )}
                </button>
 
                {/* FEEDBACK */}
                {status === "ok" && (
                  <p className="mt-4 text-center text-green-400 text-sm font-medium">
                    ✅ ¡Mensaje enviado! Te respondere a la brevedad.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-center text-red-400 text-sm font-medium">
                    ❌ Algo salió mal. Intentá de nuevo o escribime directo a santiagozerda766@gmail.com
                  </p>
                )}
              </div>
 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}