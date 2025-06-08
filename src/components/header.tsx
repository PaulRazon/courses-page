"use client";
import { Code, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import MobileMenu from "./mobile-menu";
import SearchModal from "./search-modal";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <nav className="border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold">WebDev Course</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                href="/docs"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Docs
              </Link>
              <Link
                href="/blog"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
              {/* <Link
                href="/showcase"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Showcase
              </Link> */}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white w-64"
              >
                <Search className="h-4 w-4" />
                <span className="flex-1 text-left">Quick search</span>
                <div className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 text-xs bg-slate-700 rounded">
                    ⌘
                  </kbd>
                  <kbd className="px-1.5 py-0.5 text-xs bg-slate-700 rounded">
                    K
                  </kbd>
                </div>
              </button>
            </div>

            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <Search className="h-5 w-5" />
            </Button>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
