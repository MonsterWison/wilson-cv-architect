import CVHeader from "@/components/CVHeader";
import CVSection from "@/components/CVSection";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceCard from "@/components/ExperienceCard";
import EducationTimeline from "@/components/EducationTimeline";
import InterestsSection from "@/components/InterestsSection";
import PriorExperience from "@/components/PriorExperience";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const currentExperience = {
    company: "Epoch-Tech Computer System Co., Ltd.",
    position: "Information System Manager",
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
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">12 Works</span>
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
                    <span className="bg-white px-2 py-1 rounded-full shadow-sm text-xs">22 Works</span>
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
