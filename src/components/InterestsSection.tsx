import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Car, Home, Palette } from "lucide-react";

const InterestsSection = () => {
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

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {interests.map((interest, index) => (
        <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cv-accent/10 rounded-lg group-hover:bg-cv-accent/20 transition-colors">
                {interest.icon}
              </div>
              <h3 className="text-xl font-semibold text-cv-text-primary">
                {interest.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {interest.activities.map((activity, actIndex) => (
                <li key={actIndex} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-cv-text-secondary text-sm leading-relaxed">
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