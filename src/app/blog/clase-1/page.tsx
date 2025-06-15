"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Globe,
  Lightbulb,
  BookOpen,
  Zap,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

export default function HTMLCoursePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const exercises = [
    {
      title: "Ejercicio 1: Registro Básico de Pacientes",
      description:
        "Crea una página básica para que una enfermera registre pacientes con solo HTML",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Registro de Pacientes</title>
</head>
<body>
  <h1>Registro de Pacientes</h1>
  <p>Formulario simple para registrar nuevos pacientes en la clínica.</p>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" placeholder="Nombre completo"><br><br>
  <label for="edad">Edad:</label>
  <input type="number" id="edad" placeholder="Edad del paciente"><br><br>
  <label for="fecha">Fecha de ingreso:</label>
  <input type="date" id="fecha"><br><br>
  <button>Registrar</button>
</body>
</html>`,
      instructions:
        "Crea una estructura HTML que incluya un título, un párrafo y al menos 3 campos de entrada: nombre, edad y fecha. Agrega un botón que diga 'Registrar'.",
    },
    {
      title: "Ejercicio 2: Publicación de Empleo",
      description:
        "Usa strong y em para destacar información clave de una oferta laboral",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Vacante de Desarrollador</title>
</head>
<body>
  <h1>¡Estamos contratando!</h1>
  <p>Buscamos un <strong>Desarrollador Web</strong> con experiencia en <em>HTML, CSS y JavaScript</em>.</p>
  <p>Ofrecemos un <strong>ambiente laboral flexible</strong> y <em>remoto</em>.</p>
</body>
</html>`,
      instructions:
        "Crea una página que anuncie una vacante. Usa <strong> para destacar el puesto o beneficios, y <em> para resaltar tecnologías o condiciones especiales.",
    },
    {
      title: "Ejercicio 3: Catálogo de Productos",
      description: "Agrega imágenes y entradas de texto para mostrar productos",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Tienda</title>
</head>
<body>
  <h1>Catálogo de Productos</h1>
  <img src="/placeholder.svg?width=250&height=150" alt="Producto 1">
  <p>Producto: Camiseta</p>
  <input type="text" placeholder="Ingresa tu talla"><br><br>
  <hr>
  <img src="/placeholder.svg?width=250&height=150" alt="Producto 2">
  <p>Producto: Gorro</p>
  <input type="text" placeholder="Ingresa el color deseado">
</body>
</html>`,
      instructions:
        "Crea una página con dos imágenes de productos. Debajo de cada una, agrega un párrafo con el nombre del producto y un input para que el usuario escriba talla o color.",
    },
    {
      title: "Ejercicio 4: SEO para Profesionales",
      description:
        "Agrega meta etiquetas para mejorar el SEO de una página profesional",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Abogado Juan Martínez</title>
  <meta name="description" content="Servicios legales de calidad con más de 10 años de experiencia.">
  <meta property="og:title" content="Servicios Legales en México">
  <meta property="og:description" content="Abogado especializado en derecho civil y laboral.">
  <meta name="theme-color" content="#001f3f">
</head>
<body>
  <h1>Bienvenidos a mi sitio web</h1>
  <p>Consulta profesional en derecho civil, laboral y mercantil.</p>
</body>
</html>`,
      instructions:
        "Agrega meta tags para: descripción del sitio, og:title y og:description, y theme-color. Usa una situación como si fueras un abogado, diseñador o freelancer.",
    },
    {
      title: "Ejercicio 5: Blog Semántico de Cocina",
      description:
        "Usa etiquetas semánticas para crear la estructura de un blog",
      initialCode: ``,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Recetas con Amor</title>
</head>
<body>
  <header>
    <nav>
      <h1>Recetas con Amor</h1>
    </nav>
  </header>
  <main>
    <article>
      <h2>Cómo preparar enchiladas verdes</h2>
      <p>Una receta deliciosa para toda la familia...</p>
    </article>
  </main>
  <aside>
    <p>Recetas relacionadas: Tacos, Tamales, Chilaquiles</p>
  </aside>
  <footer>
    <p>&copy; 2025 Recetas con Amor</p>
  </footer>
</body>
</html>`,
      instructions:
        "Crea una estructura de blog usando etiquetas semánticas como header, nav, main, article, aside y footer. El tema puede ser cocina, viajes o cualquier interés personal.",
    },
  ];

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      console.log("Código actual:", e.data.code);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const loadExercise = (index: number) => {
    setCurrentExercise(index);
    if (iframeRef.current?.contentWindow) {
      setTimeout(() => {
        iframeRef.current?.contentWindow?.postMessage(
          {
            eventType: "populateCode",
            language: "html",
            files: [
              { name: "index.html", content: exercises[index].initialCode },
            ],
          },
          "*"
        );
      }, 500);
    }
  };

  const showSolution = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        {
          eventType: "populateCode",
          language: "html",
          files: [
            {
              name: "index.html",
              content: exercises[currentExercise].solution,
            },
          ],
        },
        "*"
      );
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0e172b" }}>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <header className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Clase 1: Fundamentos de HTML
          </h1>
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
                    <strong className="text-cyan-400">HTML</strong> sus siglas
                    en inglés son{" "}
                    <em className="text-yellow-400">
                      HyperText Markup Language
                    </em>{" "}
                    que se traduce a
                    <strong className="text-cyan-400">
                      {" "}
                      Lenguaje de marcado de hipertexto
                    </strong>
                    , que básicamente lo que quiere decir es que este lenguaje
                    se dedica solo y únicamente a "marcar" nuestro contenido.
                  </p>
                  <aside className="bg-slate-900 p-4 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-cyan-300 text-sm lg:text-base">
                      <strong className="text-cyan-400">
                        ¿Qué significa "marcar"?
                      </strong>{" "}
                      No se refiere a cómo se ve el contenido (para eso tenemos
                      CSS), ni para cómo se interactúa con el contenido (para
                      eso tenemos JavaScript), se refiere a
                      <strong className="text-cyan-400">
                        {" "}
                        cómo definimos el contenido
                      </strong>
                      : si hay una imagen, título, párrafo, etc.
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
                    HTML es el lenguaje más importante que existe en internet.
                    Todo lo que puedes visualizar en la web, alrededor del{" "}
                    <strong className="text-yellow-400">más del 90%</strong> es
                    HTML. Sin HTML no vemos absolutamente nada.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="bg-slate-900 p-4 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-green-400 mb-2">
                        Historia
                      </h4>
                      <p className="text-green-300 text-sm">
                        Creado en{" "}
                        <strong className="text-green-400">1993</strong> por Tim
                        Berners-Lee, tiene alrededor de{" "}
                        <strong className="text-green-400">32 años</strong> y se
                        ha vuelto fundamental en el desarrollo web.
                      </p>
                    </article>
                    <article className="bg-slate-900 p-4 rounded-lg border border-purple-500/30">
                      <h4 className="font-semibold text-purple-400 mb-2">
                        Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-600 text-white hover:bg-purple-700">
                          React
                        </Badge>
                        <Badge className="bg-purple-600 text-white hover:bg-purple-700">
                          Next.js
                        </Badge>
                        <Badge className="bg-purple-600 text-white hover:bg-purple-700">
                          Vue
                        </Badge>
                        <Badge className="bg-purple-600 text-white hover:bg-purple-700">
                          Angular
                        </Badge>
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
                      <span className="text-gray-300 text-sm lg:text-base">
                        Editor de texto (VS Code recomendado)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300 text-sm lg:text-base">
                          Extensiones de VS Code:
                        </span>
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
                      <h4 className="font-semibold text-blue-400 mb-2">
                        Elementos Normales
                      </h4>
                      <p className="text-blue-300 text-sm mb-3">
                        Permiten definir el contenido HTML como párrafos,
                        títulos, listas, etc.
                      </p>
                      <code className="bg-slate-800 px-2 py-1 rounded text-xs text-blue-200">
                        {"<h1>Título</h1>"}
                      </code>
                    </article>

                    <article className="bg-slate-900 p-4 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-green-400 mb-2">
                        Elementos Anidados
                      </h4>
                      <p className="text-green-300 text-sm mb-3">
                        Se colocan dentro de otra etiqueta HTML como strong, em,
                        etc.
                      </p>
                      <code className="bg-slate-800 px-2 py-1 rounded text-xs text-green-200">
                        {"<p><strong>Texto</strong></p>"}
                      </code>
                    </article>

                    <article className="bg-slate-900 p-4 rounded-lg border border-orange-500/30 md:col-span-2 lg:col-span-1">
                      <h4 className="font-semibold text-orange-400 mb-2">
                        Elementos Reemplazables
                      </h4>
                      <p className="text-orange-300 text-sm mb-3">
                        No tienen etiqueta de cierre y son reemplazados por
                        contenido multimedia.
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
                  <CardTitle className="text-white text-xl lg:text-2xl">
                    Ejemplo Práctico: Reseña de Película
                  </CardTitle>
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
                    <h4 className="font-semibold text-cyan-400 mb-2">
                      Elementos semánticos utilizados:
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>
                        • <code className="text-cyan-400">&lt;article&gt;</code>{" "}
                        - Contenido independiente
                      </li>
                      <li>
                        • <code className="text-cyan-400">&lt;section&gt;</code>{" "}
                        - Secciones temáticas
                      </li>
                      <li>
                        •{" "}
                        <code className="text-cyan-400">
                          &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;
                        </code>{" "}
                        - Jerarquía de títulos
                      </li>
                      <li>
                        • <code className="text-cyan-400">&lt;footer&gt;</code>{" "}
                        - Información adicional
                      </li>
                      <li>
                        • <code className="text-cyan-400">&lt;time&gt;</code> -
                        Fechas y horarios
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
                  <CardTitle className="text-white text-xl lg:text-2xl">
                    HTML Semántico
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Evita el uso excesivo de divs y usa etiquetas semánticas
                    apropiadas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm lg:text-base">
                    La semántica se refiere a cómo construimos y estructuramos
                    nuestro sitio web. HTML nos proporciona más de 100 etiquetas
                    que podemos usar.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <article className="bg-slate-900 p-4 rounded-lg border border-red-500/30">
                      <h4 className="font-semibold text-red-400 mb-2">
                        ❌ Mal uso (solo divs)
                      </h4>
                      <pre className="text-xs text-red-300 overflow-x-auto">
                        <code>{`<div>
  <div>Encabezado</div>
  <div>Contenido</div>
  <div>Pie de página</div>
</div>`}</code>
                      </pre>
                    </article>

                    <article className="bg-slate-900 p-4 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-green-400 mb-2">
                        ✅ Buen uso (semántico)
                      </h4>
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
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">
                      header
                    </Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">
                      nav
                    </Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">
                      main
                    </Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">
                      article
                    </Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">
                      section
                    </Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">
                      aside
                    </Badge>
                    <Badge className="bg-slate-700 text-gray-300 border-slate-600">
                      footer
                    </Badge>
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
                  <CardTitle className="text-white text-xl lg:text-2xl">
                    Ejercicios Prácticos
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Selecciona un ejercicio para practicar en el editor
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {exercises.map((exercise, index) => (
                      <Button
                        key={index}
                        variant={
                          currentExercise === index ? "default" : "outline"
                        }
                        onClick={() => loadExercise(index)}
                        className={`h-auto p-4 text-left justify-start ${
                          currentExercise === index
                            ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                            : "bg-slate-700 hover:bg-slate-600 text-gray-300 border-slate-600"
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-sm lg:text-base">
                            {exercise.title}
                          </div>
                          <div className="text-xs opacity-70 mt-1 truncate max-w-xs lg:max-w-md">
                            {exercise.description}
                          </div>
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
                  <CardTitle className="text-white text-xl lg:text-2xl">
                    {exercises[currentExercise].title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {exercises[currentExercise].description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Instrucciones */}
                  <aside className="bg-slate-900 p-4 rounded-lg mb-4 border border-slate-600">
                    <h4 className="font-semibold text-cyan-400 mb-2">
                      📝 Instrucciones:
                    </h4>
                    <p className="text-gray-300 text-sm lg:text-base">
                      {exercises[currentExercise].instructions}
                    </p>
                  </aside>

                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    {/* <Button
                      onClick={() => loadExercise(currentExercise)}
                      className="bg-slate-700 hover:bg-slate-600 text-gray-300 border-slate-600"
                    >
                      🔄 Reiniciar
                    </Button> */}
                    {/* <Button onClick={showSolution} className="bg-yellow-600 hover:bg-yellow-700 text-white">
                      💡 Ver Solución
                    </Button> */}
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
  );
}
