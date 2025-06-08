"use client";

import Image from "next/image";
import React, { useState, useCallback, useRef, useEffect } from "react";

interface ChatBotProps {
  defaultPosition?: "left" | "right";
}

const ChatBot: React.FC<ChatBotProps> = ({ defaultPosition = "right" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const toggleChat = useCallback(() => {
    if (!isOpen && !hasLoaded) {
      setHasLoaded(true);
    }
    setIsOpen((prev) => !prev);
  }, [isOpen, hasLoaded]);

  return (
    <div ref={chatRef} className="fixed z-50">
      <button
        ref={buttonRef}
        onClick={toggleChat}
        className={`fixed z-40 w-16 h-16 rounded-full bg-primary text-white shadow-lg flex items-center justify-center transition-all bottom-5 right-5`}
        aria-label="Abrir chat"
      >
        <span>📚</span>
        {isOpen && (
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-10 pointer-events-none" />
        )}
      </button>

      <div
        ref={chatWindowRef}
        className={`fixed w-76 sm:w-96 h-[550px] p-0 rounded-lg shadow-lg overflow-hidden bg-white border transition-all duration-300 transform ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
        style={{
          zIndex: 9999,
          bottom: "90px", // Justo arriba del botón
          right: "20px",
        }}
      >
        {!hasLoaded ? (
          <div className="w-full h-full flex justify-center items-center bg-gray-100">
            <div className="border-4 border-t-4 border-gray-500 rounded-full w-16 h-16 animate-spin"></div>
          </div>
        ) : (
          <iframe
            src={`https://rag.wallavi.com/rag-iframe/f75063d7-2517-4f9e-a838-a551f46cd3cc`}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: "none" }}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(ChatBot);
