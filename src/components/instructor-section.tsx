import { Users } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function InstructorSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 mx-auto ">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <article>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Conoce a tu instructor
          </h2>
          <h3 className="text-2xl text-cyan-400 mb-4">Paul Razon</h3>
          <p className="text-slate-300 mb-6">
            Desarrollador web con más de 5 años en el desarrollo en programación
            Web. Especializado en tecnologías frontend y backend, con pasión por
            la enseñanza y el desarrollo de interfaces de usuario modernas.
          </p>
          <p className="text-slate-300 mb-6">
            He trabajado en proyectos para startups y empresas consolidadas,
            siempre buscando la mejor experiencia de usuario y el código más
            limpio.
          </p>
        </article>
        <article className="bg-slate-700 rounded-lg p-6 sm:p-8 text-center">
          <header className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Image
              src="/paul-razon.jpg"
              alt="Paul Razón"
              width={128}
              height={128}
              className="rounded-full object-cover"
              priority
            />
          </header>
          <p className="text-slate-300 italic">
            "Mi objetivo es que cada estudiante no solo aprenda a programar,
            sino que desarrolle la confianza para crear sus propios proyectos
            web."
          </p>
        </article>
      </article>
    </section>
  );
}
