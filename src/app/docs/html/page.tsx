"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, FileText, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const htmlCommands = [
  {
    category: "Estructura básica",
    commands: [
      { tag: "<!DOCTYPE html>", description: "Declara el tipo de documento HTML5" },
      { tag: "<html>", description: "Elemento raíz del documento HTML" },
      { tag: "<head>", description: "Contiene metadatos del documento" },
      { tag: "<body>", description: "Contiene el contenido visible de la página" },
      { tag: "<title>", description: "Define el título de la página" },
      { tag: "<meta>", description: "Define metadatos como charset, viewport, etc." },
    ],
  },
  {
    category: "Etiquetas semánticas",
    commands: [
      { tag: "<header>", description: "Encabezado de la página o sección" },
      { tag: "<nav>", description: "Sección de navegación" },
      { tag: "<main>", description: "Contenido principal de la página" },
      { tag: "<section>", description: "Sección temática del contenido" },
      { tag: "<article>", description: "Contenido independiente y reutilizable" },
      { tag: "<aside>", description: "Contenido relacionado o complementario" },
      { tag: "<footer>", description: "Pie de página o sección" },
    ],
  },
  {
    category: "Texto y contenido",
    commands: [
      { tag: "<h1> - <h6>", description: "Títulos jerárquicos del 1 al 6" },
      { tag: "<p>", description: "Párrafo de texto" },
      { tag: "<span>", description: "Contenedor en línea genérico" },
      { tag: "<div>", description: "Contenedor de bloque genérico" },
      { tag: "<strong>", description: "Texto con importancia fuerte" },
      { tag: "<em>", description: "Texto con énfasis" },
      { tag: "<br>", description: "Salto de línea" },
    ],
  },
  {
    category: "Listas",
    commands: [
      { tag: "<ul>", description: "Lista no ordenada" },
      { tag: "<ol>", description: "Lista ordenada" },
      { tag: "<li>", description: "Elemento de lista" },
      { tag: "<dl>", description: "Lista de definiciones" },
      { tag: "<dt>", description: "Término de definición" },
      { tag: "<dd>", description: "Descripción de definición" },
    ],
  },
  {
    category: "Enlaces y multimedia",
    commands: [
      { tag: "<a>", description: "Enlace o ancla", attributes: "href, target, title" },
      { tag: "<img>", description: "Imagen", attributes: "src, alt, width, height" },
      { tag: "<video>", description: "Video", attributes: "src, controls, autoplay" },
      { tag: "<audio>", description: "Audio", attributes: "src, controls, autoplay" },
      { tag: "<iframe>", description: "Marco en línea", attributes: "src, width, height" },
    ],
  },
  {
    category: "Formularios",
    commands: [
      { tag: "<form>", description: "Formulario", attributes: "action, method" },
      { tag: "<input>", description: "Campo de entrada", attributes: "type, name, value, placeholder" },
      { tag: "<textarea>", description: "Área de texto", attributes: "rows, cols, placeholder" },
      { tag: "<select>", description: "Lista desplegable", attributes: "name, multiple" },
      { tag: "<option>", description: "Opción de select", attributes: "value, selected" },
      { tag: "<button>", description: "Botón", attributes: "type, onclick" },
      { tag: "<label>", description: "Etiqueta para campos", attributes: "for" },
    ],
  },
]

const mdnExamples = [
  {
    title: "Reseña de Película",
    description: "Ejemplo de estructura semántica para reseñas",
    code: `<article class="film_review">
  <h2>Jurassic Park</h2>
  <section class="main_review">
    <h3>Reseña</h3>
    <p>¡Los dinosaurios estuvieron genial!</p>
  </section>
  <section class="user_reviews">
    <h3>Reseñas de usuarios</h3>
    <article class="user_review">
      <h4>¡Demasiado aterrador!</h4>
      <p>Demasiado aterradores para mí</p>
      <footer>
        <p>
          Publicado el
          <time datetime="2015-05-16 19:00">16 de mayo</time>
          por Lisa.
        </p>
      </footer>
    </article>
  </section>
</article>`,
  },
  {
    title: "Artículo de Blog",
    description: "Estructura semántica para artículos de blog",
    code: `<article>
  <header>
    <h1>Introducción a HTML5</h1>
    <p>Por <strong>María García</strong></p>
    <time datetime="2024-01-15">15 de enero, 2024</time>
  </header>
  
  <section>
    <h2>¿Qué es HTML5?</h2>
    <p>HTML5 es la quinta versión del lenguaje de marcado...</p>
  </section>
  
  <section>
    <h2>Nuevas características</h2>
    <ul>
      <li>Elementos semánticos</li>
      <li>APIs mejoradas</li>
      <li>Mejor soporte multimedia</li>
    </ul>
  </section>
  
  <footer>
    <p>Etiquetas: 
      <a href="#html">HTML</a>, 
      <a href="#web">Desarrollo Web</a>
    </p>
  </footer>
</article>`,
  },
  {
    title: "Página de Producto",
    description: "Estructura para páginas de comercio electrónico",
    code: `<main>
  <article class="product">
    <header>
      <h1>Smartphone XYZ</h1>
      <p class="price">$599.99</p>
    </header>
    
    <section class="description">
      <h2>Descripción</h2>
      <p>Un smartphone revolucionario con...</p>
    </section>
    
    <section class="specifications">
      <h2>Especificaciones</h2>
      <dl>
        <dt>Pantalla</dt>
        <dd>6.1 pulgadas OLED</dd>
        <dt>Memoria</dt>
        <dd>128GB</dd>
      </dl>
    </section>
    
    <section class="reviews">
      <h2>Reseñas</h2>
      <article class="review">
        <h3>Excelente producto</h3>
        <p>Muy satisfecho con la compra...</p>
        <footer>
          <p>Por Juan - <time datetime="2024-01-10">10 de enero</time></p>
        </footer>
      </article>
    </section>
  </article>
</main>`,
  },
]

export default function HtmlDocsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0e172b" }}>
      {/* Mobile Menu Button */}
      {/* <button
        className={`${isMobileMenuOpen?"hidden":""} lg:hidden fixed top-20 left-4 z-50 p-2 bg-slate-800 text-white rounded-md border border-slate-700`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
       <Menu className="h-4 w-4" />
      </button> */}

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
                  <Link
                    href="/docs"
                    className="text-slate-300 hover:text-white block py-2 px-2 rounded hover:bg-slate-700"
                  >
                    Introducción
                  </Link>
                </li>
                <li>
                  <Link href="/docs/html" className="text-cyan-400 block py-2 px-2 rounded bg-slate-700">
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
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/docs">
              <Button variant="ghost" className="mb-6 lg:mb-8 text-slate-300 hover:text-white hover:bg-slate-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a documentación
              </Button>
            </Link>

            {/* Header */}
            <header className="mb-8 lg:mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
                <FileText className="h-6 w-6 lg:h-8 lg:w-8 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">REFERENCIA HTML</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Comandos y Etiquetas HTML5</h1>
              <p className="text-lg lg:text-xl text-slate-300">
                Referencia completa de etiquetas HTML5 semánticas, atributos y mejores prácticas para estructurar
                contenido web moderno.
              </p>
            </header>

            {/* Quick Example */}
            <section className="mb-8 lg:mb-12">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl text-white">Estructura básica HTML5</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 rounded p-3 lg:p-4 overflow-x-auto">
                    <pre className="text-xs lg:text-sm">
                      <code className="text-slate-300">
                        {`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página Web</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#acerca">Acerca</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h1>Bienvenido a mi sitio web</h1>
            <p>Este es mi primer párrafo en HTML5.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Mi Sitio Web</p>
    </footer>
</body>
</html>`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* MDN Style Examples */}
            <section className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Ejemplos Prácticos</h2>
              <div className="space-y-6">
                {mdnExamples.map((example, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-xl text-cyan-400">{example.title}</CardTitle>
                      <CardDescription className="text-slate-300">{example.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-slate-900 rounded p-3 lg:p-4 overflow-x-auto">
                        <pre className="text-xs lg:text-sm">
                          <code className="text-slate-300">{example.code}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Commands Reference */}
            <section className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Referencia de Comandos</h2>
              <div className="space-y-6 lg:space-y-8">
                {htmlCommands.map((category) => (
                  <Card key={category.category} className="bg-slate-800 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-xl lg:text-2xl text-cyan-400">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 lg:space-y-4">
                        {category.commands.map((command:any) => (
                          <div key={command.tag} className="bg-slate-900 rounded p-3 lg:p-4">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2 gap-2">
                              <code className="text-cyan-400 font-mono text-sm lg:text-lg">{command.tag}</code>
                              {command.attributes && (
                                <div className="flex flex-wrap gap-1">
                                  {command.attributes.split(", ").map((attr:any) => (
                                    <Badge
                                      key={attr}
                                      variant="outline"
                                      className="text-xs border-slate-600 text-slate-400"
                                    >
                                      {attr}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                            <p className="text-slate-300 text-sm lg:text-base">{command.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-8 lg:mb-12">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl lg:text-3xl text-cyan-400">Mejores prácticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 lg:space-y-6">
                    <article className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-white">Usa HTML semántico</h3>
                        <p className="text-slate-300 text-sm lg:text-base">
                          Utiliza etiquetas como &lt;header&gt;, &lt;nav&gt;, &lt;main&gt; para mejorar la
                          accesibilidad.
                        </p>
                      </div>
                    </article>
                    <article className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-white">Incluye atributos alt en imágenes</h3>
                        <p className="text-slate-300 text-sm lg:text-base">
                          Siempre proporciona texto alternativo para las imágenes.
                        </p>
                      </div>
                    </article>
                    <article className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-white">Valida tu HTML</h3>
                        <p className="text-slate-300 text-sm lg:text-base">
                          Usa herramientas como el validador W3C para verificar tu código.
                        </p>
                      </div>
                    </article>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Navigation */}
            <nav className="pt-6 lg:pt-8 border-t border-slate-700">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Link href="/docs">
                  <Button
                    variant="outline"
                    className="border-slate-600 text-black hover:text-white hover:bg-slate-700"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Documentación
                  </Button>
                </Link>
                <Link href="/docs/css">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    Siguiente: CSS
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </main>
      </div>
    </div>
  )
}
