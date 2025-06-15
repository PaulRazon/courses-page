import FeaturesSection from "@/components/features-section";
import Hero from "@/components/hero";
import InstructorSection from "@/components/instructor-section";



export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <FeaturesSection />
      <InstructorSection />
    </main>
  );
}
