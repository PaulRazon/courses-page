"use client";

import Image from "next/image";
import React, { useState, useCallback, useRef, useEffect } from "react";

interface ChatBotProps {
  defaultPosition?: "left" | "right";
}

const ChatBot: React.FC<ChatBotProps> = ({ defaultPosition = "right" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [position, setPosition] = useState({ x: -1, y: -1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [side, setSide] = useState<"left" | "right">(defaultPosition);
  const chatRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const isInitializedRef = useRef(false);

  // Inicializar posición al cargar
  useEffect(() => {
    if (isInitializedRef.current) return;

    try {
      const savedSide = localStorage.getItem("chatbotSide");
      if (savedSide === "left" || savedSide === "right") {
        setSide(savedSide);
      }

      const savedPositionStr = localStorage.getItem("chatbotPosition");
      if (savedPositionStr) {
        try {
          const savedPosition = JSON.parse(savedPositionStr);

          // Verificar si los datos guardados son porcentajes o coordenadas absolutas
          if (
            savedPosition &&
            typeof savedPosition.x === "number" &&
            typeof savedPosition.y === "number"
          ) {
            // Si los valores son menores a 1, asumimos que son porcentajes
            if (savedPosition.x <= 1 && savedPosition.y <= 1) {
              const newX = Math.min(
                savedPosition.x * window.innerWidth,
                window.innerWidth - 86
              );
              const newY = Math.min(
                savedPosition.y * window.innerHeight,
                window.innerHeight - 86
              );
              setPosition({ x: newX, y: newY });
            } else {
              // Asegurarse de que las coordenadas estén dentro de la pantalla
              const newX = Math.min(savedPosition.x, window.innerWidth - 86);
              const newY = Math.min(savedPosition.y, window.innerHeight - 86);
              setPosition({ x: newX, y: newY });
            }
          } else {
            setDefaultPosition();
          }
        } catch (e) {
          console.error("Error parsing saved position:", e);
          setDefaultPosition();
        }
      } else {
        setDefaultPosition();
      }

      isInitializedRef.current = true;
    } catch (e) {
      console.error("Error initializing chat position:", e);
      setDefaultPosition();
    }
  }, [defaultPosition]);

  // Función para establecer la posición predeterminada
  const setDefaultPosition = useCallback(() => {
    const currentSide = side || defaultPosition;
    const x = currentSide === "right" ? window.innerWidth - 86 : 20;
    setPosition({ x, y: window.innerHeight - 86 });
  }, [side, defaultPosition]);

  // Manejar cambios de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setPosition((prevPosition) => {
        if (prevPosition.x === -1 || prevPosition.y === -1) return prevPosition;

        // Calcular la posición como porcentaje de la pantalla
        const percentX = prevPosition.x / window.innerWidth;
        const percentY = prevPosition.y / window.innerHeight;

        // Aplicar el porcentaje al nuevo tamaño de pantalla
        const newX = Math.min(
          percentX * window.innerWidth,
          window.innerWidth - 86
        );
        const newY = Math.min(
          percentY * window.innerHeight,
          window.innerHeight - 86
        );

        return { x: newX, y: newY };
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Guardar posición y lado en localStorage
  useEffect(() => {
    if (position.x !== -1 && position.y !== -1) {
      try {
        // Guardar como porcentajes del tamaño de la pantalla
        const percentPosition = {
          x: position.x / window.innerWidth,
          y: position.y / window.innerHeight,
        };
        localStorage.setItem(
          "chatbotPosition",
          JSON.stringify(percentPosition)
        );
      } catch (e) {
        console.error("Error saving position to localStorage:", e);
      }
    }
  }, [position]);

  // Guardar el lado por separado para evitar conflictos
  useEffect(() => {
    try {
      localStorage.setItem("chatbotSide", side);
    } catch (e) {
      console.error("Error saving side to localStorage:", e);
    }
  }, [side]);

  const toggleChat = useCallback(() => {
    if (!isOpen && !hasLoaded) {
      setHasLoaded(true);
    }
    setIsOpen((prev) => !prev);
  }, [isOpen, hasLoaded]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isOpen) {
        return;
      }

      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsDragging(true);
      }
    },
    [isOpen]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;

        const buttonWidth = buttonRef.current?.offsetWidth || 64;
        const buttonHeight = buttonRef.current?.offsetHeight || 64;

        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;

        const constrainedX = Math.max(0, Math.min(newX, maxX));
        const constrainedY = Math.max(0, Math.min(newY, maxY));

        setPosition({
          x: constrainedX,
          y: constrainedY,
        });
      }
    },
    [isDragging, dragOffset]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const getChatWindowStyle = () => {
    if (!buttonRef.current) return {};

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const chatWidth = 320; // w-80 = 320px
    const chatHeight = 500; // h-[500px]

    const spaceLeft = buttonRect.left;
    const spaceRight = window.innerWidth - (buttonRect.left + buttonRect.width);

    const positionStyle: React.CSSProperties = {};

    if (side === "right") {
      if (spaceRight >= chatWidth) {
        positionStyle.left = `${buttonRect.right}px`;
      } else {
        positionStyle.right = `${window.innerWidth - buttonRect.left}px`;
      }
    } else {
      if (spaceLeft >= chatWidth) {
        positionStyle.right = `${window.innerWidth - buttonRect.left}px`;
      } else {
        positionStyle.left = `${buttonRect.right}px`;
      }
    }

    const idealTop = buttonRect.top + buttonRect.height / 2 - chatHeight / 2;

    if (idealTop < 0) {
      positionStyle.top = "0px";
    } else if (idealTop + chatHeight > window.innerHeight) {
      positionStyle.bottom = "0px";
    } else {
      positionStyle.top = `${idealTop}px`;
    }

    return positionStyle;
  };

  // Actualizar el lado cuando se suelta el botón después de arrastrar
  useEffect(() => {
    if (!isDragging && position.x !== -1) {
      const newSide = position.x < window.innerWidth / 2 ? "left" : "right";
      if (newSide !== side) {
        setSide(newSide);
      }
    }
  }, [isDragging, position, side]);

  const getButtonCursorStyle = () => {
    return isOpen ? "cursor-default" : "cursor-move";
  };

  // Si la posición aún no está inicializada, mostrar un div vacío
  if (position.x === -1 || position.y === -1) {
    return null;
  }

  return (
    <div ref={chatRef} className="fixed z-50">
      <button
        ref={buttonRef}
        onClick={toggleChat}
        onMouseDown={handleMouseDown}
        className={`fixed z-40 w-16 h-16 rounded-full bg-primary text-white shadow-lg flex items-center justify-center transition-all  ${getButtonCursorStyle()}`}
        aria-label="Abrir chat"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          touchAction: "none",
        }}
      >
        <span>
          📚
        </span>
        {isOpen && (
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-10 pointer-events-none" />
        )}
      </button>

      <div
        ref={chatWindowRef}
        className={`fixed w-66 sm:w-96 h-[550px] p-0 rounded-lg shadow-lg overflow-hidden bg-white border transition-all duration-300 transform ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
        style={{
          zIndex: 9999,
          ...getChatWindowStyle(),
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
