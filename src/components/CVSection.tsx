import { ReactNode } from "react";

interface CVSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "skills" | "experience" | "print";
}

const CVSection = ({ title, children, className = "", variant = "default" }: CVSectionProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "skills":
        return "bg-cv-skills-bg text-primary-foreground";
      case "experience":
        return "bg-cv-section-bg";
      case "print":
        return "bg-cv-print-section-bg";
      default:
        return "bg-background";
    }
  };

  const getTitleStyles = () => {
    if (variant === "print") {
      return "text-2xl md:text-3xl font-bold mb-6 text-center text-cv-print-text-primary border-b-2 border-cv-print-accent pb-2";
    }
    return "text-3xl md:text-4xl font-bold mb-8 text-center";
  };

  const getContainerStyles = () => {
    if (variant === "print") {
      return "py-8 px-6";
    }
    return "py-16 px-8";
  };

  return (
    <section className={`${getContainerStyles()} ${getVariantStyles()} ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className={getTitleStyles()}>
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