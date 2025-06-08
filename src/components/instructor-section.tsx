import { Users } from "lucide-react";
import React from "react";

export default function InstructorSection() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Conoce a tu instructor
              </h2>
              <h3 className="text-2xl text-cyan-400 mb-4">Paul Razón</h3>
              <p className="text-slate-300 mb-6">
                Desarrollador web con más de 10 años de experiencia en la
                industria. Especializado en tecnologías frontend y backend, con
                pasión por la enseñanza y el desarrollo de interfaces de usuario
                modernas.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="h-5 w-5 text-cyan-400" />
                <span className="text-slate-300">
                  +500 estudiantes formados
                </span>
              </div>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 sm:p-8 text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  PR
                </span>
              </div>
              <p className="text-slate-300 italic">
                "Mi objetivo es que cada estudiante no solo aprenda a programar,
                sino que desarrolle la confianza para crear sus propios
                proyectos web."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
