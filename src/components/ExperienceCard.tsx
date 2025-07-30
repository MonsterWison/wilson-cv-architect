import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  achievements?: string[];
  current?: boolean;
  variant?: "default" | "print";
}

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  location, 
  description = "", 
  achievements = [],
  current = false,
  variant = "default"
}: ExperienceCardProps) => {
  const getCardStyles = () => {
    if (variant === "print") {
      return "bg-white border border-cv-print-border shadow-print";
    }
    return "shadow-soft hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary";
  };

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

  return (
    <Card className={getCardStyles()}>
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className={`text-2xl font-bold ${getTextStyles()}`}>{title}</h3>
              {current && (
                <Badge variant="default" className={variant === "print" ? "bg-cv-print-accent/10 text-cv-print-accent border border-cv-print-accent/20" : "bg-green-100 text-green-800"}>
                  Current
                </Badge>
              )}
            </div>
            <p className={`text-xl font-semibold mb-1 ${getAccentStyles()}`}>{company}</p>
            <div className={`flex items-center gap-4 ${getSecondaryTextStyles()}`}>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>

        {description && (
          <div className="mb-6">
            <p className={`${getTextStyles()} leading-relaxed`}>{description}</p>
          </div>
        )}

        {achievements.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className={`w-5 h-5 ${getAccentStyles()}`} />
              <h4 className={`text-lg font-semibold ${getTextStyles()}`}>
                Key Achievements:
              </h4>
            </div>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${variant === "print" ? "bg-cv-print-accent" : "bg-primary"}`}></div>
                  <span className={`${getTextStyles()} leading-relaxed`}>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;