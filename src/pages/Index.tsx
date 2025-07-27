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
        <Card className="shadow-soft border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Image className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Scale Miniature Diorama Construction
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Explore my collection of 1:100 architectural models, featuring fantasy buildings, 
                  detailed interiors, and intricate craftsmanship that showcases precision modeling skills.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                  <span className="bg-white px-3 py-1 rounded-full shadow-sm">Fantasy Architecture</span>
                  <span className="bg-white px-3 py-1 rounded-full shadow-sm">Interior Design</span>
                  <span className="bg-white px-3 py-1 rounded-full shadow-sm">Micro Art</span>
                  <span className="bg-white px-3 py-1 rounded-full shadow-sm">Commercial Buildings</span>
                </div>
              </div>
              <Link to="/portfolio">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  <Image className="w-5 h-5 mr-2" />
                  View Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
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
