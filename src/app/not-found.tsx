"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Code } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Animated Hammer */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="hammer-animation">
              <div className="hammer">🔨</div>
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-cyan-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Esta página se está trabajando</h2>
          <p className="text-xl text-slate-300 mb-8">
            Nuestro equipo está construyendo algo increíble aquí. Mientras tanto, puedes explorar otras secciones del
            curso.
          </p>
        </div>

        {/* Construction Elements */}
        <div className="mb-8 flex justify-center space-x-4 text-4xl">
          <span className="animate-bounce" style={{ animationDelay: "0s" }}>
            🚧
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            ⚠️
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
            🚧
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 transition-all duration-200 hover:scale-105"
            >
              <Home className="mr-2 h-5 w-5" />
              Ir al inicio
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8"
            >
              <Code className="mr-2 h-5 w-5" />
              Ver clases
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h3 className="text-lg font-semibold mb-4 text-slate-400">Enlaces rápidos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/docs" className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <h4 className="font-semibold text-cyan-400 mb-2">Documentación</h4>
              <p className="text-sm text-slate-300">Comandos y referencias</p>
            </Link>
            <Link href="/blog" className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <h4 className="font-semibold text-cyan-400 mb-2">Clases</h4>
              <p className="text-sm text-slate-300">Contenido del curso</p>
            </Link>
            <Link href="/showcase" className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <h4 className="font-semibold text-cyan-400 mb-2">Proyectos</h4>
              <p className="text-sm text-slate-300">Ejemplos y demos</p>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hammer-animation {
          display: inline-block;
          animation: hammerBounce 1.5s ease-in-out infinite;
        }

        .hammer {
          font-size: 4rem;
          display: inline-block;
          transform-origin: bottom center;
          animation: hammerRotate 1.5s ease-in-out infinite;
        }

        @keyframes hammerBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes hammerRotate {
          0%, 100% {
            transform: rotate(-15deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }
      `}</style>
    </div>
  )
}
