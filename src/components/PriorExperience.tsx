import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const PriorExperience = () => {
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

  return (
    <div>
      <h3 className="text-2xl font-semibold text-cv-text-primary mb-6 flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-primary" />
        Prior Technical Roles (1993-2008)
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {priorRoles.map((role, index) => (
          <Card key={index} className="border-l-4 border-l-cv-accent hover:shadow-soft transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-semibold text-cv-text-primary text-lg">{role.role}</h4>
              <p className="text-primary font-medium">{role.company}</p>
              <p className="text-cv-text-secondary text-sm mt-1">{role.duration}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PriorExperience;