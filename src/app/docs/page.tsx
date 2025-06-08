import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Palette, Zap, Settings } from "lucide-react";

const docSections = [
  {
    title: "Comandos HTML",
    description:
      "Referencia completa de etiquetas y atributos HTML5 semánticos.",
    icon: FileText,
    href: "/docs/html",
    items: [
      "Estructura básica",
      "Etiquetas semánticas",
      "Formularios",
      "Multimedia",
    ],
  },
  {
    title: "Propiedades CSS",
    description:
      "Guía de propiedades CSS, selectores y técnicas de diseño responsivo.",
    icon: Palette,
    href: "/docs/css",
    items: ["Selectores", "Flexbox", "Grid Layout", "Animaciones"],
  },
  {
    title: "Métodos JavaScript",
    description:
      "Documentación de funciones, métodos y APIs de JavaScript moderno.",
    icon: Zap,
    href: "/docs/javascript",
    items: ["DOM", "Eventos", "Funciones", "Arrays y Objetos"],
  },
  {
    title: "Herramientas",
    description: "Configuración y uso de herramientas de desarrollo web.",
    icon: Settings,
    href: "/docs/tools",
    items: ["VS Code", "Live Server", "DevTools", "Git básico"],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-800 min-h-screen p-6">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">DOCUMENTACIÓN</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-cyan-400 block py-1">
                  Introducción
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/html"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  HTML
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/css"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  CSS
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/javascript"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  JavaScript
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/tools"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  Herramientas
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">PRIMEROS PASOS</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs/installation"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  Instalación
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/setup"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  Configuración
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/first-project"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  Primer proyecto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">CONCEPTOS BÁSICOS</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs/semantic-html"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  HTML semántico
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/responsive-design"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  Diseño responsivo
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/accessibility"
                  className="text-slate-300 hover:text-white block py-1"
                >
                  Accesibilidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="text-sm text-cyan-400 font-medium">
                DOCUMENTACIÓN
              </span>
              <h1 className="text-4xl font-bold mt-2 mb-4">
                Comienza con el Curso de Desarrollo Web
              </h1>
              <p className="text-xl text-slate-300">
                El curso de desarrollo web te enseña a crear sitios web modernos
                usando HTML, CSS y JavaScript. Aprende los fundamentos y mejores
                prácticas para el desarrollo frontend.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-slate-300 mb-6">
                Es rápido, flexible y confiable — con cero configuración
                inicial.
              </p>
            </div>

            {/* Installation Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Instalación</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-600 hover:text-gray-900"
                >
                  VS Code
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-600 hover:text-gray-900"
                >
                  Live Server
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-600 hover:text-gray-900"
                >
                  Git
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-600 hover:text-gray-900"
                >
                  Node.js
                </Button>
              </div>

              <p className="text-slate-300 mb-6">
                Instalar las herramientas necesarias es el primer paso para
                comenzar con el desarrollo web. Te recomendamos usar VS Code
                como editor principal.
              </p>

              <div className="bg-slate-800 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">01 Instalar VS Code</h3>
                  <span className="text-sm text-slate-400">Editor</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Descarga e instala Visual Studio Code desde el sitio oficial.
                </p>
                <div className="bg-slate-900 rounded p-4">
                  <code className="text-cyan-400">
                    # Descargar desde: https://code.visualstudio.com/
                  </code>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">
                    02 Instalar Live Server
                  </h3>
                  <span className="text-sm text-slate-400">Extensión</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Instala la extensión Live Server para ver tus cambios en
                  tiempo real.
                </p>
                <div className="bg-slate-900 rounded p-4">
                  <code className="text-cyan-400">
                    # En VS Code: Ctrl+Shift+X → Buscar "Live Server" → Instalar
                  </code>
                </div>
              </div>
            </div>

            {/* Documentation Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {docSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Link key={section.title} href={section.href}>
                    <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 mb-4">
                        {section.description}
                      </p>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
                          <li key={item} className="text-sm text-slate-400">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
