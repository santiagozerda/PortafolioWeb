"use client";

import { useState, useEffect } from "react";

const MIN_ZOOM = 0.75;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5; // cuánto aumenta/disminuye cada click

export default function ImageGallery({ images }) {
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(MIN_ZOOM);

  // ── Bloquear scroll de la página cuando el lightbox está abierto ──
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Limpieza por si el componente se desmonta con el lightbox abierto
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  if (!images || images.length === 0) return null;

  const handleSelect = (img) => {
    setSelected(img);
    setZoom(MIN_ZOOM);
  };

  const handleClose = () => {
    setSelected(null);
    setZoom(MIN_ZOOM);
  };

  const zoomIn = (e) => {
    e.stopPropagation();
    setZoom((z) => Math.min(z + ZOOM_STEP, MAX_ZOOM));
  };

  const zoomOut = (e) => {
    e.stopPropagation();
    setZoom((z) => Math.max(z - ZOOM_STEP, MIN_ZOOM));
  };

  const resetZoom = (e) => {
    e.stopPropagation();
    setZoom(MIN_ZOOM);
  };

  const isMinZoom = zoom <= MIN_ZOOM;
  const isMaxZoom = zoom >= MAX_ZOOM;

  return (
    <>
      {/* GRILLA DE MINIATURAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => handleSelect(img)}
            className="relative overflow-hidden rounded-xl border border-orange-400/20 bg-[#020617]/70 hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.2)] transition duration-300 hover:scale-[1.02] group aspect-video"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-orange-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.804 7.5 7.5 0 0015.803 15.803zM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-5xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── BARRA DE CONTROLES DE ZOOM ── */}
            <div className="flex items-center justify-center gap-3">
              {/* Zoom out */}
              <button
                onClick={zoomOut}
                disabled={isMinZoom}
                className="w-9 h-9 rounded-full border border-orange-400/40 text-orange-400 flex items-center justify-center hover:bg-orange-400 hover:text-black transition disabled:opacity-30 disabled:cursor-not-allowed"
                title="Alejar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>

              {/* Indicador de zoom — click para resetear */}
              <button
                onClick={resetZoom}
                className="min-w-[56px] h-8 px-3 rounded-full bg-black/60 border border-white/10 text-gray-300 text-xs font-mono hover:border-orange-400/40 hover:text-orange-400 transition"
                title="Resetear zoom"
              >
                {Math.round(zoom * 100)}%
              </button>

              {/* Zoom in */}
              <button
                onClick={zoomIn}
                disabled={isMaxZoom}
                className="w-9 h-9 rounded-full border border-orange-400/40 text-orange-400 flex items-center justify-center hover:bg-orange-400 hover:text-black transition disabled:opacity-30 disabled:cursor-not-allowed"
                title="Acercar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>

            {/* ── IMAGEN CON SCROLL INTERNO ── */}
            {/* overflow-auto acá crea un scroll propio sin afectar la página */}
            <div className="overflow-auto rounded-xl border border-orange-400/30 shadow-[0_0_60px_rgba(251,146,60,0.2)] max-h-[75vh]">
              <div className="flex justify-center items-start min-h-full">
                <img
                  src={selected.src}
                  alt={selected.alt}
                  style={{
                    width: `${zoom * 100}%`,
                    transition: "width 0.2s ease",
                    cursor: isMaxZoom ? "default" : "zoom-in",
                  }}
                  onClick={!isMaxZoom ? zoomIn : undefined}
                  className="h-auto block"
                />
              </div>
            </div>

            {/* CAPTION */}
            <p className="text-center text-gray-400 text-sm">{selected.alt}</p>

            {/* NAVEGACIÓN ENTRE IMÁGENES */}
            <div className="flex justify-center gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(img)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    selected.src === img.src
                      ? "bg-orange-400 scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* BOTÓN CERRAR */}
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-orange-400 text-black flex items-center justify-center hover:bg-orange-300 transition shadow-lg"
              title="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
