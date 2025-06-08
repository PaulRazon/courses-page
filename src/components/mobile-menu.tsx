"use client";

import { useState } from "react";
import { Menu, X, Code, FileText, BookOpen, Palette } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      href: "/docs",
      label: "Documentación",
      icon: <FileText className="h-5 w-5" />,
    },
    { href: "/blog", label: "Clases", icon: <BookOpen className="h-5 w-5" /> },
    {
      href: "/showcase",
      label: "Proyectos",
      icon: <Palette className="h-5 w-5" />,
    },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-slate-300 hover:text-white hover:bg-slate-800"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <Code className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold text-white">
                  WebDev Course
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-4 py-8">
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-slate-800 transition-colors group"
                  >
                    <div className="text-cyan-400 group-hover:text-cyan-300">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium text-white group-hover:text-cyan-300">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Clases Rápidas
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/blog/clase-1"
                    onClick={toggleMenu}
                    className="block p-3 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-white">Clase 1: Encuadre</span>
                  </Link>
                  <Link
                    href="/blog/clase-2"
                    onClick={toggleMenu}
                    className="block p-3 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-white">Clase 2: HTML5</span>
                  </Link>
                  <Link
                    href="/blog/clase-3"
                    onClick={toggleMenu}
                    className="block p-3 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-white">Clase 3: CSS3</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800">
              <Button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                onClick={toggleMenu}
              >
                Comenzar Curso
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
