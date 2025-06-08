import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Aprender</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-white transition-colors"
                >
                  Documentación
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Clases
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="hover:text-white transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/playground"
                  className="hover:text-white transition-colors"
                >
                  Playground
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Curso</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/blog/clase-1"
                  className="hover:text-white transition-colors"
                >
                  Clase 1: Encuadre
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/clase-2"
                  className="hover:text-white transition-colors"
                >
                  Clase 2: HTML5
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/clase-3"
                  className="hover:text-white transition-colors"
                >
                  Clase 3: CSS3
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/clase-4"
                  className="hover:text-white transition-colors"
                >
                  Clase 4: JavaScript
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/docs/html"
                  className="hover:text-white transition-colors"
                >
                  Comandos HTML
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/css"
                  className="hover:text-white transition-colors"
                >
                  Propiedades CSS
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/javascript"
                  className="hover:text-white transition-colors"
                >
                  Métodos JS
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/tools"
                  className="hover:text-white transition-colors"
                >
                  Herramientas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Comunidad</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>
            Copyright © 2025 WebDev Course by Paul Razón. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
