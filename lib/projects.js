import { Coming_Soon } from "next/font/google";
import { type } from "os";
import { text } from "stream/consumers";

export const projects = [
  {
    slug: "gestion-supermercado",
    title: "Sistema de Gestión Retail & Ventas",
    shortDescription:
      "Sistema integral para la gestion comercial. Incluye pagos, eventos y generación de Ticket.",
    tags: ["JAVA", "MySQL", "Spring Boot"],
    repoUrl: "https://github.com/santiagozerda/SistemaRetail",
 
    description: [
      // --- Párrafo introductorio (conservás el texto que ya tenías) ---
      {
        type: "paragraph",
        text: "Este sistema fue diseñado para resolver la complejidad operativa de un supermercado, permitiendo la gestión integral de inventarios, clientes y múltiples sucursales."
      },
      {
        type: "paragraph",
        text: "La solución no solo administra datos (CRUD), sino que automatiza la lógica financiera de ventas mediante un motor de promociones y genera inteligencia de negocio a través de reportes de tendencias.",
      },
      {
        type:"paragraph",
        text:"Para garantizar la escalabilidad y el mantenimiento a largo plazo, el proyecto se construyó bajo los siguientes estándares: Patron MVC, Patron DTO y Programacion Funcional."
      },
 
      // --- Subtítulo + viñetas de módulos ---
      {
        type: "heading",
        text: "Módulos principales",
      },
      {
        type: "list",
        items: [
          "Gestion completa (CRUD) de sucursales, productos, ventas y pagos.",
          "Sistema de promociones (3x2 y 50%OFF en la segunda unidad) aplicado automaticamente.",
          "Proceso de venta integrado: seleccion de productos, calculo de totales y registro de operacion.",
          "Medios de pagos: Credito/Debito, Transferencia y Efectivo.",
          "Reporte de negocio: producto mas vendido.",
          "Generacion de Tickets con los detalles de la compra, descuetos y total final."
        ],
      },
 
      // --- Subtítulo + viñetas técnicas ---
      {
        type: "heading",
        text: "Desafio Tecnico",
      },
      {
        type: "paragraph",
        text: "Este proyecto implicó diseñar e implementar una lógica de negocio realista que contempla promociones dinámicas y cálculos automáticos de totales en distintos escenarios de compra. Además, requirió coordinar múltiples entidades relacionadas asegurando consistencia transaccional a lo largo de todo el flujo, desde la venta hasta el pago y la generación del ticket. También se abordó la construcción de una arquitectura preparada para escalar y soportar futuras funcionalidades analíticas y métricas de negocio."
      },
      {
        type:"heading",
        text:"Proximas Funciones a Incorporar"
      },
      {
        type: "paragraph",
        text:"Las proximas funciones a incorporar, son la mejora en el funcion de metodo de pago al incorporar una Pasarela de Pagos con diferente metodos de pago para CREDITO/DEBITO y TRANSFERENCIAS."
      },
      {
        type:"paragraph",
        text:"Implementar funcionalidad de autenticacion JWT a futuro, permitiendo el manejo de multisedes."
      }
    ],
 
    images: [
      {
        src: "/images/proyectos/sistema-supermercado/ProductoCreate.png",
        alt: "Creacion de Productos"
      },
      {
        src: "/images/proyectos/sistema-supermercado/VentaRequest.png",
        alt: "Creacion de Venta"
      },
      {
        src: "/images/proyectos/sistema-supermercado/VentaResponse.png",
        alt: "Venta Creada"
      },
      {
        src: "/images/proyectos/sistema-supermercado/Pago.png",
        alt: "Proceso de Pago y Respuesta del Sistema"
      },
      {
        src: "/images/proyectos/sistema-supermercado/VentaPagada.png",
        alt: "Venta Pagada"
      },
      {
        src: "/images/proyectos/sistema-supermercado/TicketCreate.png",
        alt: "Generacion Automatica del Ticket de la Venta"
      }
    ],
  },
 
  {
    slug: "clinica-odontologica",
    title: "Sistema de Gestion Clinica Odontologica",
    shortDescription:
      "Aplicación para la gestión de clinicas odontologicas, centrada en la optimizacion de agendas y disponibilidad de especialistas.",
    tags: ["JAVA", "Spring Boot", "MySQL"],
    repoUrl: "https://github.com/santiagozerda/SistemaDeGestionOdontologico",
 
    description: [
      {
        type: "paragraph",
        text: "Aplicación para la gestión integral de clínicas odontológicas. Centraliza la administración de turnos, especialistas y pacientes en una sola plataforma. El núcleo del proyecto es un Motor de Programación de Turnos que garantiza la integridad de la agenda médica, gestionando la disponibilidad de los profesionales y optimizando el flujo de atención al paciente."
      },
 
      {
        type: "heading",
        text: "Modulos Principales",
      },
      {
        type: "list",
        items: [
          "Gestion completa(CRUD): Paciente, Odontologo, Turno, Horario",
          "Asignacion de Turnos a los Pacientes",
          "Asignacion de Horarios a los Odontologos",
        ],
      },
 
      {
        type: "heading",
        text: "Desafio Tecnico",
      },
      {
        type:"paragraph",
        text:"Uno de los principales desafíos técnicos fue diseñar una lógica de gestión de turnos capaz de validar disponibilidad real de los odontólogos, evitando solapamientos de horarios y controlando distintos estados del turno según el flujo de negocio. También se implementaron validaciones avanzadas de horarios, reglas de atención y control de agenda para garantizar consistencia en la información.",
      },
      {
        type:"heading",
        text:"Proximas Funciones a Incorporar"
      },
      {
        type:"list",
        items:[
          "Implementacion de autenticacion y autorizacion con Spring Security",
          "Historial clinico odontologico de los pacientes",
          "Gestion de roles y permisos respetando los roles tanto para Secretarias y Odontologos"
        ]
      }
    ],
 
    images: [
      {
        src: "/images/proyectos/clinica-odontologica/Paciente.png",
        alt: "Detalles del Paciente y Turno Solicitado",
      },
      {
        src: "/images/proyectos/clinica-odontologica/Odontologo.png",
        alt: "Detalles del Odontologo con Turno y Horario Asignados",
      }
    ],
  },
 
  {
    slug: "portafolio-web",
    title: "Portafolio Web Propio",
    shortDescription:
      "Portafolio Web Propio diseñado para la demostracion de proyectos y el aprendisaje del diseño Web",
    tags: ["React", "Next", "Tailwind", "JavaScript"],
    repoUrl: "https://github.com/santiagozerda/PortafolioWeb",
    directRepo: true,  // ← va directo al repo, no tiene página de detalle
 
    description: [],   // no se usa porque directRepo: true
  },
];
 
// Helper para buscar un proyecto por slug
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}