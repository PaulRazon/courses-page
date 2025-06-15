"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Palette, Zap, Settings, Menu, X, BookOpen, Code, Globe } from "lucide-react"

const docSections = [
  {
    title: "Comandos HTML",
    description: "Referencia completa de etiquetas y atributos HTML5 semánticos.",
    icon: FileText,
    href: "/docs/html",
    items: ["Estructura básica", "Etiquetas semánticas", "Formularios", "Multimedia"],
  },
  {
    title: "Propiedades CSS",
    description: "Guía de propiedades CSS, selectores y técnicas de diseño responsivo.",
    icon: Palette,
    href: "/docs/css",
    items: ["Selectores", "Flexbox", "Grid Layout", "Animaciones"],
  },
  {
    title: "Métodos JavaScript",
    description: "Documentación de funciones, métodos y APIs de JavaScript moderno.",
    icon: Zap,
    href: "/docs/javascript",
    items: ["DOM", "Eventos", "Funciones", "Arrays y Objetos"],
  },
  {
    title: "Herramientas",
    description: "Configuración y uso de herramientas de desarrollo web.",
    icon: Settings,
    href: "/docs/tools",
    items: ["VS Code", "Extensiones", "DevTools"],
  },
]

export default function DocsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0e172b" }}>
      {/* Mobile Menu Button */}
      <button
        className={`${isMobileMenuOpen?"hidden":""} lg:hidden fixed top-20 left-4 z-50 p-2 bg-slate-800 text-white rounded-md border border-slate-700`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
       <Menu className="h-4 w-4" />
      </button>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside
          className={`${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static top-0 left-0 w-64 bg-slate-800 min-h-screen p-4 lg:p-6 transition-transform duration-300 ease-in-out z-40 border-r border-slate-700`}
        >
          {/* Mobile close button */}
          <button
            className="lg:hidden absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>

          <nav className="mt-8 lg:mt-0">
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-white">DOCUMENTACIÓN</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-cyan-400 block py-2 px-2 rounded hover:bg-slate-700">
                    Introducción
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/html"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    HTML
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/css"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    CSS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/javascript"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    JavaScript
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/tools"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    Herramientas
                  </Link>
                </li>
              </ul>
            </section>
{/* 
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-white">PRIMEROS PASOS</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs/installation"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    Instalación
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/setup"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    Configuración
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/first-project"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    Primer proyecto
                  </Link>
                </li>
              </ul>
            </section> */}

            {/* <section>
              <h2 className="text-lg font-semibold mb-4 text-white">CONCEPTOS BÁSICOS</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs/semantic-html"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    HTML semántico
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/responsive-design"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    Diseño responsivo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/accessibility"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    Accesibilidad
                  </Link>
                </li>
              </ul>
            </section> */}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 lg:ml-0">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8 lg:mb-12">
              <span className="text-sm text-cyan-400 font-medium">DOCUMENTACIÓN</span>
              <h1 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-white">
                Comienza con el Curso de Desarrollo Web
              </h1>
              <p className="text-lg lg:text-xl text-slate-300">
                El curso de desarrollo web te enseña a crear sitios web modernos usando HTML, CSS y JavaScript. Aprende
                los fundamentos y mejores prácticas para el desarrollo frontend.
              </p>
            </header>

            <section className="mb-8 lg:mb-12">
              <p className="text-slate-300 mb-6">Es rápido, flexible y confiable — con cero configuración inicial.</p>
            </section>

            {/* Installation Section */}
            <section className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Instalación</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 mb-8">
                <Button
                  variant="outline"
                  className="border-slate-600 text-black hover:text-white hover:bg-slate-700 h-auto py-3"
                >
                  <div className="flex flex-col items-center gap-1">
                    <Code className="h-5 w-5" />
                    <span className="text-xs lg:text-sm">VS Code</span>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-black hover:text-white hover:bg-slate-700 h-auto py-3"
                >
                  <div className="flex flex-col items-center gap-1">
                    <Globe className="h-5 w-5" />
                    <span className="text-xs lg:text-sm">Live Server</span>
                  </div>
                </Button>
                {/* <Button
                  variant="outline"
                  className="border-slate-600 text-black hover:text-white hover:bg-slate-700 h-auto py-3"
                >
                  <div className="flex flex-col items-center gap-1">
                    <BookOpen className="h-5 w-5" />
                    <span className="text-xs lg:text-sm">Git</span>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-black hover:text-white hover:bg-slate-700 h-auto py-3"
                >
                  <div className="flex flex-col items-center gap-1">
                    <Settings className="h-5 w-5" />
                    <span className="text-xs lg:text-sm">Node.js</span>
                  </div>
                </Button> */}
              </div>

              <p className="text-slate-300 mb-6 text-sm lg:text-base">
                Instalar las herramientas necesarias es el primer paso para comenzar con el desarrollo web. Te
                recomendamos usar VS Code como editor principal.
              </p>

              <div className="space-y-4 lg:space-y-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-lg text-white">01 Instalar VS Code</CardTitle>
                      <span className="text-sm text-slate-400">Editor</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 text-sm lg:text-base">
                      Descarga e instala Visual Studio Code desde el sitio oficial.
                    </p>
                    <div className="bg-slate-900 rounded p-3 lg:p-4 overflow-x-auto">
                      <code className="text-cyan-400 text-xs lg:text-sm">
                        # Descargar desde: https://code.visualstudio.com/
                      </code>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-lg text-white">02 Instalar Live Server</CardTitle>
                      <span className="text-sm text-slate-400">Extensión</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 text-sm lg:text-base">
                      Instala la extensión Live Server para ver tus cambios en tiempo real.
                    </p>
                    <div className="bg-slate-900 rounded p-3 lg:p-4 overflow-x-auto">
                      <code className="text-cyan-400 text-xs lg:text-sm">
                        # En VS Code: Ctrl+Shift+X → Buscar "Live Server" → Instalar
                      </code>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Documentation Sections */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Secciones de Documentación</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {docSections.map((section) => {
                  const IconComponent = section.icon
                  return (
                    <Link key={section.title} href={section.href}>
                      <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors h-full">
                        <CardHeader>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <CardTitle className="text-lg lg:text-xl text-white">{section.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-slate-300 mb-4 text-sm lg:text-base">
                            {section.description}
                          </CardDescription>
                          <ul className="space-y-1">
                            {section.items.map((item) => (
                              <li key={item} className="text-sm text-slate-400">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
