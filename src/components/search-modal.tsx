"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, FileText, Code, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: "page" | "doc" | "class";
  icon: React.ReactNode;
}

const searchResults: SearchResult[] = [
  {
    title: "Clase 1: Encuadre del curso",
    description: "Presentación del tema, instructor y metodología",
    href: "/blog/clase-1",
    type: "class",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Comandos HTML",
    description: "Referencia completa de etiquetas HTML5",
    href: "/docs/html",
    type: "doc",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Propiedades CSS",
    description: "Guía de selectores y propiedades CSS",
    href: "/docs/css",
    type: "doc",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "JavaScript Básico",
    description: "Fundamentos de JavaScript moderno",
    href: "/docs/javascript",
    type: "doc",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "Clase 2: HTML5 Semántico",
    description: "Introducción al desarrollo web y HTML5",
    href: "/blog/clase-2",
    type: "class",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Clase 3: CSS y Diseño Responsivo",
    description: "Estilos y diseño responsivo con CSS",
    href: "/blog/clase-3",
    type: "class",
    icon: <BookOpen className="h-4 w-4" />,
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredResults(searchResults.slice(0, 6));
    } else {
      const filtered = searchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!isOpen) {
          // Open modal logic will be handled by parent component
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "class":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "doc":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
        <DialogTitle>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Buscar</h2>
          </div>
        </DialogTitle>
        <DialogHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Buscar clases, documentación..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400 text-lg py-3"
              autoFocus
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs bg-slate-700 rounded border border-slate-600">
                ESC
              </kbd>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-4 max-h-96 overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="space-y-2">
              {filteredResults.map((result, index) => (
                <Link
                  key={index}
                  href={result.href}
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-slate-400">{result.icon}</div>
                      <div>
                        <h3 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {result.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs rounded border ${getTypeColor(
                          result.type
                        )}`}
                      >
                        {result.type === "class" ? "Clase" : "Docs"}
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Search className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-400">
                No se encontraron resultados para "{query}"
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-slate-700 pt-4 mt-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            
            <div className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 bg-slate-700 rounded">⌘</kbd>
              <kbd className="px-1.5 py-0.5 bg-slate-700 rounded">K</kbd>
              <span>para buscar</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
