"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX - 12}px`;
        cursor.style.top = `${e.clientY - 12}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="fixed w-6 h-6 bg-cyan-400 rounded-full blur-xl pointer-events-none opacity-50 z-50"
      style={{ left: "-100px", top: "-100px" }} // Posición inicial fuera de pantalla
    />
  );
}