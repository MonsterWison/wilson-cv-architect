import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface PriorExperienceProps {
  variant?: "default" | "print";
}

const PriorExperience = ({ variant = "default" }: PriorExperienceProps) => {
  const priorRoles = [
    {
      company: "United Technologies",
      role: "System Engineer", 
      duration: "2008-2009"
    },
    {
      company: "I-Nem/NationMark/Skynet",
      role: "IT Engineer",
      duration: "2005-2007"
    },
    {
      company: "Melbourne Garment",
      role: "IT Support Supervisor",
      duration: "2001-2005"
    },
    {
      company: "Banking & Logistics Firms", 
      role: "Operations Specialist",
      duration: "1993-2000"
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
    return "border-l-4 border-l-cv-accent hover:shadow-soft transition-shadow";
  };

  return (
    <div>
      <h3 className={`text-2xl font-semibold mb-6 flex items-center gap-2 ${getTextStyles()}`}>
        <Briefcase className={`w-6 h-6 ${getAccentStyles()}`} />
        Prior Technical Roles (1993-2008)
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {priorRoles.map((role, index) => (
          <Card key={index} className={getCardStyles()}>
            <CardContent className="p-6">
              <h4 className={`font-semibold text-lg ${getTextStyles()}`}>{role.role}</h4>
              <p className={`font-medium ${getAccentStyles()}`}>{role.company}</p>
              <p className={`text-sm mt-1 ${getSecondaryTextStyles()}`}>{role.duration}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PriorExperience;