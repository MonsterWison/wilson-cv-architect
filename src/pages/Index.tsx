import { Card, CardContent } from "@/components/ui/card";
import CVHeader from "@/components/CVHeader";
import CVSection from "@/components/CVSection";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceCard from "@/components/ExperienceCard";
import PriorExperience from "@/components/PriorExperience";
import EducationTimeline from "@/components/EducationTimeline";
import InterestsSection from "@/components/InterestsSection";
import EnhancedPDFButton from "@/components/EnhancedPDFButton";
import { useState } from "react";

const Index = () => {
  const [cvVariant, setCvVariant] = useState<"default" | "print">("default");

  const currentExperience = {
    title: "ERP Solutions Architect",
    company: "Freelance Consultant",
    period: "2020 - Present",
    location: "Hong Kong",
    description: "Specialized in ERP system customization and implementation, providing technical solutions for inventory and accounting modules.",
    achievements: [
      "Developed custom ERP modules for 15+ clients across various industries",
      "Implemented cloud migration strategies reducing infrastructure costs by 40%",
      "Provided technical support and training for 50+ end users",
      "Designed and deployed AI-powered automation workflows using N8N and Langfuse"
    ]
  };

  const toggleVariant = () => {
    setCvVariant(cvVariant === "default" ? "print" : "default");
  };

  return (
    <div className={`min-h-screen ${cvVariant === "print" ? "cv-print bg-cv-print-section-bg" : "bg-gradient-subtle"}`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleVariant}
          className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
        >
          {cvVariant === "default" ? "Switch to Print View" : "Switch to Web View"}
        </button>
        <EnhancedPDFButton />
      </div>
      
      <CVHeader variant={cvVariant} />
      
      {/* Professional Summary */}
      <CVSection title="Professional Summary" variant={cvVariant}>
        <Card className={cvVariant === "print" ? "bg-white border border-cv-print-border shadow-print" : "shadow-soft border-l-4 border-l-primary"}>
          <CardContent className="p-8">
            <p className={`text-lg leading-relaxed text-center ${cvVariant === "print" ? "text-cv-print-text-primary" : "text-cv-text-primary"}`}>
              ERP Solutions Architect with <span className={`font-semibold ${cvVariant === "print" ? "text-cv-print-accent" : "text-primary"}`}>28+ years</span> in technology implementation. 
              Core expertise in custom module development and client-facing technical support for inventory/accounting systems. 
              Proven track record in end-to-end solution design and critical issue resolution.
            </p>
          </CardContent>
        </Card>
      </CVSection>

      {/* Core Skills */}
      <CVSection title="Core Skills" variant={cvVariant === "print" ? "print" : "skills"}>
        <SkillsGrid variant={cvVariant} />
      </CVSection>

      {/* Current Professional Experience */}
      <CVSection title="Professional Experience" variant={cvVariant === "print" ? "print" : "experience"}>
        <ExperienceCard {...currentExperience} current={true} variant={cvVariant} />
      </CVSection>

      {/* Prior Experience */}
      <CVSection title="" variant={cvVariant}>
        <PriorExperience variant={cvVariant} />
      </CVSection>

      {/* Education & Certifications */}
      <CVSection title="Education & Certifications" variant={cvVariant === "print" ? "print" : "experience"}>
        <EducationTimeline variant={cvVariant} />
      </CVSection>

      {/* Technical Interests & Craftsmanship */}
      <CVSection title="Technical Interests & Craftsmanship" variant={cvVariant}>
        <InterestsSection variant={cvVariant} />
      </CVSection>

      {/* Portfolio Showcase */}
      <CVSection title="Portfolio Showcase" variant={cvVariant}>
        <div className="space-y-6">
          {/* iOS App Development */}
          <Card className={cvVariant === "print" ? "bg-white border border-cv-print-border shadow-print" : "shadow-soft border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-amber-50"}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cvVariant === "print" ? "bg-cv-print-accent/10" : "bg-orange-100"}`}>
                  <svg className={`w-6 h-6 ${cvVariant === "print" ? "text-cv-print-accent" : "text-orange-600"}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-1 ${cvVariant === "print" ? "text-cv-print-text-primary" : "text-gray-900"}`}>
                    iOS App Development
                  </h3>
                  <p className={`mb-3 ${cvVariant === "print" ? "text-cv-print-text-secondary" : "text-gray-600"}`}>
                    SwiftUI-based applications with AI integration and modern iOS design patterns.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className={`px-2 py-1 rounded-full shadow-sm text-xs ${cvVariant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-white"}`}>2 Apps</span>
                    <span className={`px-2 py-1 rounded-full shadow-sm text-xs ${cvVariant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-white"}`}>SwiftUI</span>
                    <span className={`px-2 py-1 rounded-full shadow-sm text-xs ${cvVariant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-white"}`}>AI Integration</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Model Painting */}
          <Card className={cvVariant === "print" ? "bg-white border border-cv-print-border shadow-print" : "shadow-soft border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50"}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cvVariant === "print" ? "bg-cv-print-accent/10" : "bg-green-100"}`}>
                  <svg className={`w-6 h-6 ${cvVariant === "print" ? "text-cv-print-accent" : "text-green-600"}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-1 ${cvVariant === "print" ? "text-cv-print-text-primary" : "text-gray-900"}`}>
                    High-Detail Model Painting
                  </h3>
                  <p className={`mb-3 ${cvVariant === "print" ? "text-cv-print-text-secondary" : "text-gray-600"}`}>
                    Precision acrylic painting techniques on 1:35 scale miniatures with realistic textures and effects.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className={`px-2 py-1 rounded-full shadow-sm text-xs ${cvVariant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-white"}`}>9 Works</span>
                    <span className={`px-2 py-1 rounded-full shadow-sm text-xs ${cvVariant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-white"}`}>1:35 Scale</span>
                    <span className={`px-2 py-1 rounded-full shadow-sm text-xs ${cvVariant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-white"}`}>Acrylic Techniques</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resin Crafts */}
          <Card className={cvVariant === "print" ? "bg-white border border-cv-print-border shadow-print" : "shadow-soft border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-violet-50"}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cvVariant === "print" ? "bg-cv-print-accent/10" : "bg-purple-100"}`}>
                  <svg className={`w-6 h-6 ${cvVariant === "print" ? "text-cv-print-accent" : "text-purple-600"}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-1 ${cvVariant === "print" ? "text-cv-print-text-primary" : "text-gray-900"}`}>
                    Resin Craft Production
                  </h3>
                  <p className={`mb-3 ${cvVariant === "print" ? "text-cv-print-text-secondary" : "text-gray-600"}`}>
                    Decorative items and stationery featuring geometric patterns, marble effects, and artistic forms.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className={`px-2 py-1 rounded-full shadow-sm text-xs ${cvVariant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-white"}`}>27 Works</span>
                    <span className={`px-2 py-1 rounded-full shadow-sm text-xs ${cvVariant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-white"}`}>1:1 Scale</span>
                    <span className={`px-2 py-1 rounded-full shadow-sm text-xs ${cvVariant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-white"}`}>Epoxy Resin</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CVSection>
    </div>
  );
};

export default Index;
