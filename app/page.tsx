import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import JourneySection from "./components/JourneySection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--parchment)] relative selection:bg-[#702B32]/20 selection:text-[#4B2027]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <TechStackSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Heritage Footer */}
      <Footer />
    </div>
  );
}
