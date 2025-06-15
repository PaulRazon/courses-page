"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Globe, Lightbulb, BookOpen, Zap, CheckCircle, Menu, X } from "lucide-react"

export default function HTMLCoursePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const exercises = [
    {
      title: "Ejercicio 1: Estructura Básica",
      description: "Crea una página HTML básica con título y párrafo",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página</title>
</head>
<body>
    <h1>Juan Pérez</h1>
    <p>HTML es el lenguaje de marcado de hipertexto que se usa para estructurar el contenido web.</p>
</body>
</html>`,
      instructions:
        "Crea la estructura básica de HTML con DOCTYPE, html, head y body. Agrega un h1 con tu nombre y un párrafo describiendo qué es HTML.",
    },
    {
      title: "Ejercicio 2: Elementos Anidados",
      description: "Practica con elementos anidados usando strong y em",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Elementos Anidados</title>
</head>
<body>
    <h1>Aprendiendo HTML</h1>
    <p>HTML es <strong>muy importante</strong> para el desarrollo web.</p>
    <p>Este es un <em>texto en cursiva</em> para practicar.</p>
</body>
</html>`,
      instructions: "Crea un párrafo donde uses <strong> para resaltar texto importante y <em> para texto en cursiva.",
    },
    {
      title: "Ejercicio 3: Elementos Reemplazables",
      description: "Agrega imágenes y otros elementos sin etiqueta de cierre",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Elementos Reemplazables</title>
</head>
<body>
    <h1>Mi Galería</h1>
    <img src="/placeholder.svg?height=200&width=300" alt="Imagen de ejemplo">
    <hr>
    <input type="text" placeholder="Escribe algo aquí">
</body>
</html>`,
      instructions:
        "Agrega una imagen, una línea horizontal (hr) y un campo de texto (input). Recuerda que estos elementos no tienen etiqueta de cierre.",
    },
    {
      title: "Ejercicio 4: SEO y Meta Tags",
      description: "Implementa meta tags para SEO",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de HTML</title>
    <meta name="description" content="Curso completo de HTML para principiantes">
    <meta property="og:title" content="Curso de Desarrollo Web">
    <meta property="og:description" content="Aprende HTML desde cero">
    <meta name="theme-color" content="#0e172b">
</head>
<body>
    <h1>Curso de Desarrollo Web</h1>
    <p>Aprende HTML desde cero</p>
</body>
</html>`,
      instructions:
        "Agrega meta tags para descripción, Open Graph (og:title, og:description) y theme-color en el head de tu documento.",
    },
    {
      title: "Ejercicio 5: HTML Semántico",
      description: "Usa etiquetas semánticas en lugar de divs",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>HTML Semántico</title>
</head>
<body>
    <header>
        <nav>
            <h1>Mi Blog</h1>
        </nav>
    </header>
    <main>
        <article>
            <h2>Artículo sobre HTML</h2>
            <p>Contenido del artículo...</p>
        </article>
    </main>
    <aside>
        <p>Enlaces relacionados</p>
    </aside>
    <footer>
        <p>&copy; 2024 Mi Blog</p>
    </footer>
</body>
</html>`,
      instructions:
        "Crea una estructura semántica usando header, nav, main, article, aside y footer en lugar de divs genéricos.",
    },
  ]

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      console.log("Código actual:", e.data.code)
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  const loadExercise = (index: number) => {
    setCurrentExercise(index)
    if (iframeRef.current?.contentWindow) {
      setTimeout(() => {
        iframeRef.current?.contentWindow?.postMessage(
          {
            eventType: "populateCode",
            language: "html",
            files: [{ name: "index.html", content: exercises[index].initialCode }],
          },
          "*",
        )
      }, 500)
    }
  }

  const showSolution = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        {
          eventType: "populateCode",
          language: "html",
          files: [{ name: "index.html", content: exercises[currentExercise].solution }],
        },
        "*",
      )
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0e172b" }}>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <header className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Clase 1: Fundamentos de HTML</h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Aprende los conceptos básicos del lenguaje que construye la web
          </p>
        </header>

        <Tabs defaultValue="teoria" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-700 mb-6">
            <TabsTrigger
              value="teoria"
              className="text-gray-300 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
            >
              📚 Teoría
            </TabsTrigger>
            <TabsTrigger
              value="practica"
              className="text-gray-300 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
            >
              💻 Práctica
            </TabsTrigger>
          </TabsList>

          <TabsContent value="teoria" className="space-y-6 lg:space-y-8">
            {/* ¿Qué es HTML? */}
            <section>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white text-xl lg:text-2xl">
                    <Globe className="h-6 w-6 text-cyan-400" />
                    ¿Qué es HTML?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    <strong className="text-cyan-400">HTML</strong> sus siglas en inglés son{" "}
                    <em className="text-yellow-400">HyperText Markup Language</em> que se traduce a
                    <strong className="text-cyan-400"> Lenguaje de marcado de hipertexto</strong>, que básicamente lo
                    que quiere decir es que este lenguaje se dedica solo y únicamente a "marcar" nuestro contenido.
                  </p>
                  <aside className="bg-slate-900 p-4 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-cyan-300 text-sm lg:text-base">
                      <strong className="text-cyan-400">¿Qué significa "marcar"?</strong> No se refiere a cómo se ve el
                      contenido (para eso tenemos CSS), ni para cómo se interactúa con el contenido (para eso tenemos
                      JavaScript), se refiere a<strong className="text-cyan-400"> cómo definimos el contenido</strong>:
                      si hay una imagen, título, párrafo, etc.
                    </p>
                  </aside>
                </CardContent>
              </Card>
            </section>

            {/* ¿Por qué es importante? */}
            <section>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white text-xl lg:text-2xl">
                    <Lightbulb className="h-6 w-6 text-yellow-400" />
                    ¿Por qué es importante?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    HTML es el lenguaje más importante que existe en internet. Todo lo que puedes visualizar en la web,
                    alrededor del <strong className="text-yellow-400">más del 90%</strong> es HTML. Sin HTML no vemos
                    absolutamente nada.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="bg-slate-900 p-4 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-green-400 mb-2">Historia</h4>
                      <p className="text-green-300 text-sm">
                        Creado en <strong className="text-green-400">1993</strong> por Tim Berners-Lee, tiene alrededor
                        de <strong className="text-green-400">32 años</strong> y se ha vuelto fundamental en el
                        desarrollo web.
                      </p>
                    </article>
                    <article className="bg-slate-900 p-4 rounded-lg border border-purple-500/30">
                      <h4 className="font-semibold text-purple-400 mb-2">Frameworks</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-600 text-white hover:bg-purple-700">React</Badge>
                        <Badge className="bg-purple-600 text-white hover:bg-purple-700">Next.js</Badge>
                        <Badge className="bg-purple-600 text-white hover:bg-purple-700">Vue</Badge>
                        <Badge className="bg-purple-600 text-white hover:bg-purple-700">Angular</Badge>
                      </div>
                    </article>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Requerimientos */}
            <section>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white text-xl lg:text-2xl">
                    <Code className="h-6 w-6 text-green-400" />
                    Requerimientos Mínimos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm lg:text-base">Editor de texto (VS Code recomendado)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300 text-sm lg:text-base">Extensiones de VS Code:</span>
                        <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-400">
                          <li>• Live Preview</li>
                          <li>• HTML Snippets</li>
                          <li>• Live Server</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Tipos de Elementos */}
            <section>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white text-xl lg:text-2xl">
                    <BookOpen className="h-6 w-6 text-indigo-400" />
                    Tipos de Elementos HTML
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <article className="bg-slate-900 p-4 rounded-lg border border-blue-500/30">
                      <h4 className="font-semibold text-blue-400 mb-2">Elementos Normales</h4>
                      <p className="text-blue-300 text-sm mb-3">
                        Permiten definir el contenido HTML como párrafos, títulos, listas, etc.
                      </p>
                      <code className="bg-slate-800 px-2 py-1 rounded text-xs text-blue-200">{"<h1>Título</h1>"}</code>
                    </article>

                    <article className="bg-slate-900 p-4 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-green-400 mb-2">Elementos Anidados</h4>
                      <p className="text-green-300 text-sm mb-3">
                        Se colocan dentro de otra etiqueta HTML como strong, em, etc.
                      </p>
                      <code className="bg-slate-800 px-2 py-1 rounded text-xs text-green-200">
                        {"<p><strong>Texto</strong></p>"}
                      </code>
                    </article>

                    <article className="bg-slate-900 p-4 rounded-lg border border-orange-500/30 md:col-span-2 lg:col-span-1">
                      <h4 className="font-semibold text-orange-400 mb-2">Elementos Reemplazables</h4>
                      <p className="text-orange-300 text-sm mb-3">
                        No tienen etiqueta de cierre y son reemplazados por contenido multimedia.
                      </p>
                      <code className="bg-slate-800 px-2 py-1 rounded text-xs text-orange-200">
                        {'<img src="imagen.jpg" />'}
                      </code>
                    </article>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Ejemplo Práctico MDN Style */}
            <section>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl lg:text-2xl">Ejemplo Práctico: Reseña de Película</CardTitle>
                  <CardDescription className="text-gray-400">
                    Ejemplo inspirado en MDN mostrando HTML semántico en acción
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <pre className="text-sm overflow-x-auto text-gray-300">
                      <code>{`<article class="film_review">
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
    <article class="user_review">
      <h4>¡Amo a los dinos!</h4>
      <p>Estoy de acuerdo, los dinosaurios son mis favoritos.</p>
      <footer>
        <p>
          Publicado el
          <time datetime="2015-05-17 19:00">17 de mayo</time>
          por Tom.
        </p>
      </footer>
    </article>
  </section>
</article>`}</code>
                    </pre>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-2">Elementos semánticos utilizados:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>
                        • <code className="text-cyan-400">&lt;article&gt;</code> - Contenido independiente
                      </li>
                      <li>
                        • <code className="text-cyan-400">&lt;section&gt;</code> - Secciones temáticas
                      </li>
                      <li>
                        • <code className="text-cyan-400">&lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;</code> - Jerarquía de
                        títulos
                      </li>
                      <li>
                        • <code className="text-cyan-400">&lt;footer&gt;</code> - Información adicional
                      </li>
                      <li>
                        • <code className="text-cyan-400">&lt;time&gt;</code> - Fechas y horarios
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* SEO */}
            <section>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white text-xl lg:text-2xl">
                    <Zap className="h-6 w-6 text-red-400" />
                    Etiquetas para SEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{`<meta name="description" content="este es un curso de desarrollo web">
<meta property="og:title" content="Fundamentos de desarrollo web">
<meta property="og:description" content="curso de desarrollo web">
<meta name="theme-color" content="#0e172b">
<link rel="icon" type="image/jpg" href="/image">`}</code>
                    </pre>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    💡 Tip: Visita{" "}
                    <a
                      href="https://opengraph.xyz"
                      className="text-cyan-400 hover:text-cyan-300 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      opengraph.xyz
                    </a>{" "}
                    para generar meta tags
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Semántica */}
            <section>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl lg:text-2xl">HTML Semántico</CardTitle>
                  <CardDescription className="text-gray-400">
                    Evita el uso excesivo de divs y usa etiquetas semánticas apropiadas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm lg:text-base">
                    La semántica se refiere a cómo construimos y estructuramos nuestro sitio web. HTML nos proporciona
                    más de 100 etiquetas que podemos usar.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <article className="bg-slate-900 p-4 rounded-lg border border-red-500/30">
                      <h4 className="font-semibold text-red-400 mb-2">❌ Mal uso (solo divs)</h4>
                      <pre className="text-xs text-red-300 overflow-x-auto">
                        <code>{`<div>
  <div>Encabezado</div>
  <div>Contenido</div>
  <div>Pie de página</div>
</div>`}</code>
                      </pre>
                    </article>

                    <article className="bg-slate-900 p-4 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-green-400 mb-2">✅ Buen uso (semántico)</h4>
                      <pre className="text-xs text-green-300 overflow-x-auto">
                        <code>{`<header>Encabezado</header>
<main>
  <article>Contenido</article>
</main>
<footer>Pie de página</footer>`}</code>
                      </pre>
                    </article>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">header</Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">nav</Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">main</Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">article</Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">section</Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">aside</Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">footer</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="practica" className="space-y-6">
            {/* Selector de Ejercicios */}
            <section>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl lg:text-2xl">Ejercicios Prácticos</CardTitle>
                  <CardDescription className="text-gray-400">
                    Selecciona un ejercicio para practicar en el editor
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {exercises.map((exercise, index) => (
                      <Button
                        key={index}
                        variant={currentExercise === index ? "default" : "outline"}
                        onClick={() => loadExercise(index)}
                        className={`h-auto p-4 text-left justify-start ${
                          currentExercise === index
                            ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                            : "bg-slate-700 hover:bg-slate-600 text-gray-300 border-slate-600"
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-sm lg:text-base">{exercise.title}</div>
                          <div className="text-xs opacity-70 mt-1">{exercise.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Ejercicio Actual */}
            <section>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl lg:text-2xl">{exercises[currentExercise].title}</CardTitle>
                  <CardDescription className="text-gray-400">{exercises[currentExercise].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Instrucciones */}
                  <aside className="bg-slate-900 p-4 rounded-lg mb-4 border border-slate-600">
                    <h4 className="font-semibold text-cyan-400 mb-2">📝 Instrucciones:</h4>
                    <p className="text-gray-300 text-sm lg:text-base">{exercises[currentExercise].instructions}</p>
                  </aside>

                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <Button
                      onClick={() => loadExercise(currentExercise)}
                      className="bg-slate-700 hover:bg-slate-600 text-gray-300 border-slate-600"
                    >
                      🔄 Reiniciar
                    </Button>
                    <Button onClick={showSolution} className="bg-yellow-600 hover:bg-yellow-700 text-white">
                      💡 Ver Solución
                    </Button>
                  </div>

                  {/* Editor */}
                  <div className="border border-slate-600 rounded-lg overflow-hidden">
                    <iframe
                      ref={iframeRef}
                      frameBorder="0"
                      height="500px"
                      src="https://onecompiler.com/embed/html?codeChangeEvent=true&theme=dark"
                      width="100%"
                      className="w-full"
                      title={`Editor para ${exercises[currentExercise].title}`}
                    />
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
