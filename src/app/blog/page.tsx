import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const classes = [
  {
    id: 1,
    title: "Encuadre del curso",
    description:
      "Presentación del tema, instructor, objetivos y metodología del curso de desarrollo web.",
    duration: "1 hora",
    date: "Enero 15, 2025",
    topics: [
      "Presentación",
      "Objetivos",
      "Metodología",
      "Evaluación diagnóstica",
    ],
    slug: "clase-1",
  },
  {
    id: 2,
    title: "Introducción al Desarrollo Web y HTML5 Semántico",
    description:
      "Fundamentos del desarrollo web, instalación de herramientas y estructura básica de HTML5.",
    duration: "7 horas",
    date: "Enero 22, 2025",
    topics: [
      "¿Qué es el desarrollo web?",
      "VS Code y extensiones",
      "Estructura HTML",
      "Etiquetas semánticas",
    ],
    slug: "clase-2",
  },
  {
    id: 3,
    title: "Estilos y Diseño Responsivo con CSS",
    description:
      "Aprende CSS desde lo básico hasta técnicas avanzadas como Flexbox y Grid Layout.",
    duration: "10 horas",
    date: "Febrero 5, 2025",
    topics: [
      "Selectores CSS",
      "Modelo de caja",
      "Flexbox",
      "Grid Layout",
      "Media queries",
    ],
    slug: "clase-3",
  },
  {
    id: 4,
    title: "Fundamentos de JavaScript",
    description:
      "Introducción a JavaScript, manipulación del DOM y creación de interactividad.",
    duration: "12 horas",
    date: "Febrero 19, 2025",
    topics: [
      "Variables y tipos",
      "Estructuras de control",
      "Funciones",
      "Eventos",
      "DOM",
    ],
    slug: "clase-4",
  },
  {
    id: 5,
    title: "Proyecto Final Integrador",
    description:
      "Aplicación práctica de todos los conocimientos en un proyecto web completo.",
    duration: "10 horas",
    date: "Marzo 5, 2025",
    topics: ["Planificación", "Desarrollo", "Revisión", "Presentación"],
    slug: "clase-5",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Clases del Curso
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Todas las clases del curso de desarrollo web, organizadas por
              módulos y con resúmenes detallados.
            </p>

            {/* Newsletter Subscription */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto">
              <Input
                placeholder="Suscríbete vía email"
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-400"
              />
              <Button className="bg-slate-700 hover:bg-slate-600 text-white px-6">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Classes List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {classes.map((classItem) => (
            <article
              key={classItem.id}
              className="border-l-4 border-cyan-400 pl-8"
            >
              <div className="flex items-center space-x-4 text-sm text-slate-400 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{classItem.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{classItem.duration}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-white">
                Clase {classItem.id}: {classItem.title}
              </h2>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {classItem.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                  Temas principales:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {classItem.topics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href={`/blog/${classItem.slug}`}>
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                >
                  Ver detalles de la clase
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
