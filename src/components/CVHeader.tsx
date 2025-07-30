import { Mail, Phone, Globe, MapPin, Image } from "lucide-react";
import { Link } from "react-router-dom";

interface CVHeaderProps {
  variant?: "default" | "print";
}

const CVHeader = ({ variant = "default" }: CVHeaderProps) => {
  // 處理電話點擊
  const handlePhoneClick = () => {
    window.open('tel:+85292269702', '_self');
  };

  // 處理郵箱點擊
  const handleEmailClick = () => {
    window.open('mailto:monsterbb100@gmail.com?subject=CV Inquiry', '_self');
  };

  // 處理網站點擊
  const handleWebsiteClick = () => {
    window.open('https://wilson-cv-architect.vercel.app', '_blank');
  };

  if (variant === "print") {
    return (
      <header className="bg-cv-print-header-bg border-b-2 border-cv-print-header-border py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-cv-print-text-primary tracking-tight">
                Ho Wai Shun Wilson
              </h1>
              <p className="text-xl md:text-2xl text-cv-print-accent font-semibold">
                ERP Solutions Architect
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-cv-print-text-secondary">
                <Phone className="w-4 h-4 text-cv-print-accent" />
                <span>+852 9226 9702</span>
              </div>
              
              <div className="flex items-center gap-2 text-cv-print-text-secondary">
                <Mail className="w-4 h-4 text-cv-print-accent" />
                <span>monsterbb100@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-cv-print-text-secondary">
                <Globe className="w-4 h-4 text-cv-print-accent" />
                <span>wilson-cv-architect.vercel.app</span>
              </div>
              
              <div className="flex items-center gap-2 text-cv-print-text-secondary">
                <MapPin className="w-4 h-4 text-cv-print-accent" />
                <span>Hong Kong</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-gradient-primary text-primary-foreground py-16 px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
              Ho Wai Shun Wilson
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-light">
              ERP Solutions Architect
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-200 cursor-pointer border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
              title="Click to call"
            >
              <Phone className="w-4 h-4" />
              <span>9226 9702</span>
            </button>
            
            <button 
              onClick={handleEmailClick}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-200 cursor-pointer border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
              title="Click to send email"
            >
              <Mail className="w-4 h-4" />
              <span>monsterbb100@gmail.com</span>
            </button>
            
            <button 
              onClick={handleWebsiteClick}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-200 cursor-pointer border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
              title="Click to visit website"
            >
              <Globe className="w-4 h-4" />
              <span>wilson-cv-architect.vercel.app</span>
            </button>
            
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" />
              <span>Hong Kong</span>
            </div>
            
            <Link to="/portfolio">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-200 cursor-pointer border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl">
                <Image className="w-4 h-4" />
                <span className="font-medium">Portfolio</span>
                <span className="text-xs opacity-80">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;