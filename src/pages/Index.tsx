import CVHeader from "@/components/CVHeader";
import CVSection from "@/components/CVSection";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceCard from "@/components/ExperienceCard";
import EducationTimeline from "@/components/EducationTimeline";
import InterestsSection from "@/components/InterestsSection";
import PriorExperience from "@/components/PriorExperience";
import EnhancedPDFButton from "@/components/EnhancedPDFButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const currentExperience = {
    company: "Epoch-Tech Computer System Co., Ltd.",
    position: "Developer",
    duration: "2009 – Present",
    location: "Hong Kong",
    responsibilities: [
      "ERP System Development & Customization: Lead Plugin Developer for flagship inventory/accounting ERP with POS integration, labeling system, token system, and payment scheduler add-on. Developed 1500+ client-specific workflow solutions.",
      "Client Solution Lifecycle Management: Conducted unlimited requirement analysis sessions, authored technical proposals for enterprise clients, and provided professional support for complex accounting/system issues.",
      "Infrastructure & Security: Install and maintained 20+ server cluster, configured enterprise firewalls, performed monthly vulnerability assessments.",
      "Practical Facility Upgrades: Installed touch-free restroom systems with occupancy indicators, implemented facial recognition time clocks, enhanced server room cooling via weatherproofing."
    ],
    achievements: [
      "ERP Excellence Awards 2022",
      "Asia's Most Valuable Brand Awards 2023", 
      "CorpHub Outstanding Enterprise Awards 2023",
      "HKCT Business Awards 2023",
      "Capital eCommerce Awards 2022/23"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <EnhancedPDFButton />
      <CVHeader />
      
      {/* Professional Summary */}
      <CVSection title="Professional Summary">
        <Card className="shadow-soft border-l-4 border-l-primary">
          <CardContent className="p-8">
            <p className="text-lg text-cv-text-primary leading-relaxed text-center">
              ERP Solutions Architect with <span className="font-semibold text-primary">28+ years</span> in technology implementation. 
              Core expertise in custom module development and client-facing technical support for inventory/accounting systems. 
              Proven track record in end-to-end solution design and critical issue resolution.
            </p>
          </CardContent>
        </Card>
      </CVSection>

      {/* Core Skills */}
      <CVSection title="Core Skills" variant="skills">
        <SkillsGrid />
      </CVSection>

      {/* Current Professional Experience */}
      <CVSection title="Professional Experience" variant="experience">
        <ExperienceCard {...currentExperience} current={true} />
      </CVSection>

      {/* Prior Experience */}
      <CVSection title="">
        <PriorExperience />
      </CVSection>

      {/* Education & Certifications */}
      <CVSection title="Education & Certifications" variant="experience">
        <EducationTimeline />
      </CVSection>

      {/* Technical Interests & Craftsmanship */}
      <CVSection title="Technical Interests & Craftsmanship">
        <InterestsSection />
      </CVSection>

      {/* Portfolio Showcase */}
      <CVSection title="Portfolio Showcase">
        <div className="space-y-6">
          {/* iOS App Development */}
          <Card className="shadow-soft border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-amber-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    iOS App Development
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Native iOS applications built with SwiftUI, following Apple HIG design principles and MVVM architecture.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">Attraction Finder</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">SwiftUI</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">HIG Design</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">AI Integration</span>
                  </div>
                </div>
                <a href="https://apps.apple.com/hk/app/attraction-finder/id6748924079" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    View on App Store
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* AI/ML Development */}
          <Card className="shadow-soft border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    AI/ML Development
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Custom Large Language Model implementation demonstrating deep understanding of AI architecture and machine learning principles.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">Custom LLM</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">Neural Networks</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">NLP</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">Python</span>
                  </div>
                </div>
                <a href="https://www.monsterwilson.online/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                    View LLM Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Miniature Dioramas */}
          <Card className="shadow-soft border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Image className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Scale Miniature Dioramas
                  </h3>
                  <p className="text-gray-600 mb-3">
                    1:100 architectural models featuring fantasy buildings, detailed interiors, and intricate craftsmanship.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">27 Works</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">1:100 Scale</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">LED Lighting</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Model Painting */}
          <Card className="shadow-soft border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Image className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    High-Detail Model Painting
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Precision acrylic painting techniques on 1:35 scale miniatures with realistic textures and effects.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">9 Works</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">1:35 Scale</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">Acrylic Techniques</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resin Crafts */}
          <Card className="shadow-soft border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-violet-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Image className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Resin Craft Production
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Decorative items and stationery featuring geometric patterns, marble effects, and artistic forms.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">27 Works</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">1:1 Scale</span>
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">Epoxy Resin</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* View All Button */}
          <div className="text-center pt-4">
            <Link to="/portfolio">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <Image className="w-5 h-5 mr-2" />
                View Complete Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </CVSection>

      {/* Footer */}
      <footer className="bg-cv-skills-bg text-primary-foreground py-8 text-center">
        <div className="container mx-auto max-w-6xl px-8">
          <p className="text-sm opacity-80">
            © 2024 Ho Wai Shun Wilson. Professional CV showcasing 28+ years of technology expertise.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
