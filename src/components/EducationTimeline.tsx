import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

interface EducationTimelineProps {
  variant?: "default" | "print";
}

const EducationTimeline = ({ variant = "default" }: EducationTimelineProps) => {
  const education = [
    {
      title: "Vocational English Certificate",
      institution: "HK PolyU",
      year: "1996",
      type: "Certificate"
    },
    {
      title: "Business Studies Diploma",
      institution: "Caritas Institute", 
      year: "1995",
      type: "Diploma"
    },
    {
      title: "HKCEE",
      institution: "Hong Kong Certificate of Education Examination",
      subjects: "Chinese • English • Geography • Mathematics",
      type: "Secondary Education"
    }
  ];

  const certifications = [
    "Pitman: Software Applications • Word Processing",
    "HK PolyU: Vocational English Certificate", 
    "Microsoft Office Specialist (MOS)"
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
    return "border-l-4 border-l-cv-accent";
  };

  const getPrimaryCardStyles = () => {
    if (variant === "print") {
      return "bg-white border border-cv-print-border shadow-print";
    }
    return "border-l-4 border-l-primary";
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className={`text-2xl font-semibold mb-6 flex items-center gap-2 ${getTextStyles()}`}>
          <GraduationCap className={`w-6 h-6 ${getAccentStyles()}`} />
          Education
        </h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index} className={getCardStyles()}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-semibold ${getTextStyles()}`}>{edu.title}</h4>
                  {edu.year && (
                    <span className={`text-sm px-2 py-1 rounded ${variant === "print" ? "bg-cv-print-card-bg border border-cv-print-border" : "bg-muted"} ${getSecondaryTextStyles()}`}>
                      {edu.year}
                    </span>
                  )}
                </div>
                <p className={`font-medium ${getAccentStyles()}`}>{edu.institution}</p>
                {edu.subjects && (
                  <p className={`text-sm mt-1 ${getSecondaryTextStyles()}`}>{edu.subjects}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className={`text-2xl font-semibold mb-6 flex items-center gap-2 ${getTextStyles()}`}>
          <Award className={`w-6 h-6 ${getAccentStyles()}`} />
          Certifications
        </h3>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <Card key={index} className={getPrimaryCardStyles()}>
              <CardContent className="p-4">
                <p className={getTextStyles()}>{cert}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;