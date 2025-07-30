import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const EducationTimeline = () => {
  const education = [
    {
      title: "Generative AI",
      institution: "Venturenix LAB",
      year: "29/7/2025",
      type: "Certificate"
    },
    {
      title: "Certificate in Python Programming (Part-time)",
      institution: "Hong Kong College of Technology (HKCT)",
      year: "30/7/2025",
      type: "Certificate"
    },
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

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold text-cv-text-primary mb-6 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary" />
          Education
        </h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index} className="border-l-4 border-l-cv-accent">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-cv-text-primary">{edu.title}</h4>
                  {edu.year && (
                    <span className="text-sm text-cv-text-secondary bg-muted px-2 py-1 rounded">
                      {edu.year}
                    </span>
                  )}
                </div>
                <p className="text-primary font-medium">{edu.institution}</p>
                {edu.subjects && (
                  <p className="text-sm text-cv-text-secondary mt-1">{edu.subjects}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-cv-text-primary mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          Certifications
        </h3>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-4">
                <p className="text-cv-text-primary">{cert}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;