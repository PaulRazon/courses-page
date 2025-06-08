"use client";

import { useEffect, useState } from "react";

const codeString = `<div class="hero-section bg-gradient text-center p-8">
  <h1 class="text-4xl font-bold mb-4">Mi Primera Página Web</h1>
  <p class="text-lg text-gray-600 mb-6">
    Creada con HTML, CSS y JavaScript
  </p>
  <button class="btn-primary px-6 py-3 rounded-lg">
    ¡Empezar ahora!
  </button>
</div>`;

export default function TypewriterEffect() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < codeString.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + codeString[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 50 + 30); // Random typing speed for realism

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Syntax highlighting
  const highlightHtml = (code: string) => {
    return code
      .replace(
        /(&lt;|<)(\/?[a-zA-Z0-9-]+)(\s|\/?>|>)/g,
        '<span style="color: #60a5fa;">$1$2$3</span>'
      ) // Tags
      .replace(
        /class="([^"]*)"/g,
        'class="<span style="color: #34d399;">$1</span>"'
      ) // Class attributes
      .replace(/"([^"]*)"/g, '"<span style="color: #fbbf24;">$1</span>"'); // String values
  };

  return (
    <div>
      <span dangerouslySetInnerHTML={{ __html: highlightHtml(text) }} />
      <span
        className={`${
          cursorVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        |
      </span>
    </div>
  );
}
