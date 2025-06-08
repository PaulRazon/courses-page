import { Code, Palette, Zap } from "lucide-react";
import React from "react";

export default function FeaturesSection() {
  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Construido para el aprendizaje moderno
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Nuestro curso está diseñado para llevarte desde cero hasta crear
            sitios web profesionales, con un enfoque práctico y proyectos
            reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-slate-900 p-6 sm:p-8 rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">HTML5 Semántico</h3>
            <p className="text-slate-300">
              Aprende a estructurar contenido web con las mejores prácticas de
              HTML5 semántico, accesibilidad y SEO desde el primer día.
            </p>
          </div>

          <div className="bg-slate-900 p-6 sm:p-8 rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">CSS3 y Diseño Responsivo</h3>
            <p className="text-slate-300">
              Domina Flexbox, Grid Layout, animaciones y media queries para
              crear interfaces modernas que funcionen en cualquier dispositivo.
            </p>
          </div>

          <div className="bg-slate-900 p-6 sm:p-8 rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">JavaScript Interactivo</h3>
            <p className="text-slate-300">
              Añade interactividad a tus sitios web con JavaScript moderno,
              manipulación del DOM y validación de formularios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
