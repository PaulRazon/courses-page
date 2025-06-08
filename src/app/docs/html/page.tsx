import Link from "next/link"
import { Code, ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const htmlCommands:any = [
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

export default function HtmlDocsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-800 min-h-screen p-6">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">DOCUMENTACIÓN</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-slate-300 hover:text-white block py-1">
                  Introducción
                </Link>
              </li>
              <li>
                <Link href="/docs/html" className="text-cyan-400 block py-1">
                  HTML
                </Link>
              </li>
              <li>
                <Link href="/docs/css" className="text-slate-300 hover:text-white block py-1">
                  CSS
                </Link>
              </li>
              <li>
                <Link href="/docs/javascript" className="text-slate-300 hover:text-white block py-1">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/docs/tools" className="text-slate-300 hover:text-white block py-1">
                  Herramientas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* Back Button */}
            <Link href="/docs">
              <Button variant="ghost" className="mb-8 text-slate-300 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a documentación
              </Button>
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-8 w-8 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">REFERENCIA HTML</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Comandos y Etiquetas HTML5</h1>
              <p className="text-xl text-slate-300">
                Referencia completa de etiquetas HTML5 semánticas, atributos y mejores prácticas para estructurar
                contenido web moderno.
              </p>
            </div>

            {/* Quick Example */}
            <div className="bg-slate-800 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-semibold mb-4">Estructura básica HTML5</h2>
              <div className="bg-slate-900 rounded p-4 overflow-x-auto">
                <pre className="text-sm">
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
            </div>

            {/* Commands Reference */}
            <div className="space-y-8">
              {htmlCommands.map((category:any) => (
                <div key={category.category} className="bg-slate-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-cyan-400">{category.category}</h2>
                  <div className="space-y-4">
                    {category.commands.map((command:any) => (
                      <div key={command.tag} className="bg-slate-900 rounded p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <code className="text-cyan-400 font-mono text-lg">{command.tag}</code>
                          {command.attributes && (
                            <span className="text-sm text-slate-400 mt-1 md:mt-0">Atributos: {command.attributes}</span>
                          )}
                        </div>
                        <p className="text-slate-300">{command.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Best Practices */}
            <div className="bg-slate-800 rounded-lg p-6 mt-12">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Mejores prácticas</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Usa HTML semántico</h3>
                    <p className="text-slate-300">
                      Utiliza etiquetas como &lt;header&gt;, &lt;nav&gt;, &lt;main&gt; para mejorar la accesibilidad.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Incluye atributos alt en imágenes</h3>
                    <p className="text-slate-300">Siempre proporciona texto alternativo para las imágenes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Valida tu HTML</h3>
                    <p className="text-slate-300">Usa herramientas como el validador W3C para verificar tu código.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="flex justify-between items-center">
                <Link href="/docs">
                  <Button variant="outline" className="border-slate-600 text-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Documentación
                  </Button>
                </Link>
                <Link href="/docs/css">
                  <Button className="bg-cyan-500 hover:bg-cyan-600">Siguiente: CSS</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
