import React from "react";
import TypewriterEffect from "./type-writter-effect";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Space-themed background */}
      <article className="absolute inset-0 bg-slate-900">
        {/* Animated stars background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(2px 2px at 20px 30px, #eee, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, #fff, transparent),
              radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
              radial-gradient(2px 2px at 160px 30px, #fff, transparent)
            `,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 100px",
            animation: "twinkle 4s ease-in-out infinite alternate",
          }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/50 to-purple-900/30"></div>

        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </article>

      <article className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 w-full">
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            Aprende desarrollo web
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              desde los fundamentos
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Un curso completo de programación web que te enseñará{" "}
            <code className="text-cyan-400 bg-slate-800 px-2 py-1 rounded text-sm sm:text-base">
              HTML5
            </code>
            ,{" "}
            <code className="text-cyan-400 bg-slate-800 px-2 py-1 rounded text-sm sm:text-base">
              CSS3
            </code>
            , y{" "}
            <code className="text-cyan-400 bg-slate-800 px-2 py-1 rounded text-sm sm:text-base">
              JavaScript
            </code>{" "}
            para crear sitios web modernos y responsivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-3 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 w-full sm:w-auto"
            >
              Comenzar curso
            </Button>
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Buscar en el curso"
                className="pl-10 bg-slate-800/80 backdrop-blur border-slate-700 text-white placeholder-slate-400 w-full hover:bg-slate-800 transition-colors"
              />
            </div>
          </div>

          {/* Code Preview with Typing Animation */}
          <div className="bg-slate-800/90 backdrop-blur rounded-lg p-4 sm:p-6 text-left max-w-4xl mx-auto shadow-lg shadow-cyan-500/10 border border-slate-700/50">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-400 text-xs sm:text-sm ml-4">
                index.html
              </span>
            </div>
            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code className="text-slate-300">
                <TypewriterEffect />
              </code>
            </pre>
          </div>
        </section>
      </article>
    </section>
  );
}
