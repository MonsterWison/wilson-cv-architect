import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Car, Home, Palette } from "lucide-react";

interface InterestsSectionProps {
  variant?: "default" | "print";
}

const InterestsSection = ({ variant = "default" }: InterestsSectionProps) => {
  const interests = [
    {
      title: "Precision Modeling",
      icon: <Palette className="w-6 h-6" />,
      activities: [
        "Scale miniature diorama construction (1:100 architectural models)",
        "High-detail model painting (acrylic/oil techniques)", 
        "Resin craft production: Decorative items & stationery"
      ]
    },
    {
      title: "Automotive Engineering",
      icon: <Car className="w-6 h-6" />,
      activities: [
        "Functional upgrades: ODB tuning and full video monitoring of blind spots",
        "Aesthetic enhancements: Paint correction & detailing",
        "DIY maintenance: Lighting systems overhaul"
      ]
    },
    {
      title: "Home Engineering", 
      icon: <Home className="w-6 h-6" />,
      activities: [
        "Furniture assembly & structural reinforcement",
        "Appliance repair/retrofitting (e.g. circuit board replacement)",
        "Space optimization: Custom storage solutions"
      ]
    },
    {
      title: "Material Crafting",
      icon: <Wrench className="w-6 h-6" />,
      activities: [
        "Plaster decoration production",
        "Custom tooling and hardware modifications",
        "Precision measurement and assembly work"
      ]
    }
  ];

  const getTextStyles = () => {
    if (variant === "print") {
      return "text-cv-print-text-primary";
    }
    return "text-cv-text-primary";
  };

  const getSecondaryTextStyles = () => {
    if (variant === "print") {
      return "text-cv-print-text-secondary";
    }
    return "text-cv-text-secondary";
  };

  const getAccentStyles = () => {
    if (variant === "print") {
      return "text-cv-print-accent";
    }
    return "text-primary";
  };

  const getCardStyles = () => {
    if (variant === "print") {
      return "bg-white border border-cv-print-border shadow-print";
    }
    return "shadow-soft hover:shadow-elegant transition-all duration-300 group";
  };

  const getIconStyles = () => {
    if (variant === "print") {
      return "p-3 bg-cv-print-accent/10 rounded-lg";
    }
    return "p-3 bg-cv-accent/10 rounded-lg group-hover:bg-cv-accent/20 transition-colors";
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {interests.map((interest, index) => (
        <Card key={index} className={getCardStyles()}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={getIconStyles()}>
                <div className={getAccentStyles()}>
                  {interest.icon}
                </div>
              </div>
              <h3 className={`text-xl font-semibold ${getTextStyles()}`}>
                {interest.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {interest.activities.map((activity, actIndex) => (
                <li key={actIndex} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${variant === "print" ? "bg-cv-print-accent" : "bg-primary"}`}></div>
                  <span className={`text-sm leading-relaxed ${getSecondaryTextStyles()}`}>
                    {activity}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InterestsSection;