import { ReactNode } from "react";

interface CVSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "skills" | "experience";
}

const CVSection = ({ title, children, className = "", variant = "default" }: CVSectionProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "skills":
        return "bg-cv-skills-bg text-primary-foreground";
      case "experience":
        return "bg-cv-section-bg";
      default:
        return "bg-background";
    }
  };

  return (
    <section className={`py-16 px-8 ${getVariantStyles()} ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CVSection;