import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Code, Wrench, Smartphone, Brain } from "lucide-react";

interface SkillsGridProps {
  variant?: "default" | "print";
}

const SkillsGrid = ({ variant = "default" }: SkillsGridProps) => {
  const skillCategories = [
    {
      title: "Systems",
      icon: <Server className="w-6 h-6" />,
      skills: [
        "Cloud ERP Migration",
        "Firewall Configuration", 
        "Server Maintenance (20+ units)",
        "Docker"
      ]
    },
    {
      title: "Development", 
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Python",
        "Generative AI",
        "MS SQL",
        "N8N",
        "Langfuse",
        "Cursor",
        "XCode",
        "DeepSeek",
        "OpenRouter AI",
        "ERP Module Customization"
      ]
    },
    {
      title: "AI/ML Development",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "Large Language Models",
        "Neural Networks",
        "Natural Language Processing",
        "TensorFlow/PyTorch",
        "Model Training",
        "AI Architecture Design"
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        "SwiftUI",
        "iOS Development",
        "Apple HIG",
        "MVVM Architecture",
        "AI Integration",
        "App Store Publishing"
      ]
    },
    {
      title: "Hardware",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "IoT Device Installation",
        "Access Control Systems",
        "Facility Modifications"
      ]
    }
  ];

  if (variant === "print") {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-cv-print-card-bg border border-cv-print-border shadow-print">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-cv-print-accent/10 rounded-lg">
                  <div className="text-cv-print-accent">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-cv-print-text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline" 
                    className="bg-white border-cv-print-border text-cv-print-text-secondary hover:bg-cv-print-accent/5 text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
      {skillCategories.map((category, index) => (
        <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex}
                  variant="secondary" 
                  className="bg-white/20 text-primary-foreground hover:bg-white/30 transition-colors text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsGrid;