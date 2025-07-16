import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities?: string[];
  achievements?: string[];
  current?: boolean;
}

const ExperienceCard = ({ 
  company, 
  position, 
  duration, 
  location, 
  responsibilities = [], 
  achievements = [],
  current = false 
}: ExperienceCardProps) => {
  return (
    <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold text-cv-text-primary">{position}</h3>
              {current && (
                <Badge variant="default" className="bg-green-100 text-green-800">
                  Current
                </Badge>
              )}
            </div>
            <p className="text-xl text-primary font-semibold mb-1">{company}</p>
            <div className="flex items-center gap-4 text-cv-text-secondary">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>

        {responsibilities.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-cv-text-primary mb-3">
              Core Responsibilities & Deliverables:
            </h4>
            <ul className="space-y-3">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-cv-text-primary leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {achievements.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-cv-text-primary">
                Company Recognition:
              </h4>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              {achievements.map((achievement, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="justify-start p-3 text-cv-text-secondary border-primary/20"
                >
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;