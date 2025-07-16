import { Mail, Phone, Globe, MapPin } from "lucide-react";

const CVHeader = () => {
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
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Phone className="w-4 h-4" />
              <span>9226 9702</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mail className="w-4 h-4" />
              <span>monsterbb100@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="w-4 h-4" />
              <span>homework7.monsterwilson.online</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" />
              <span>Hong Kong</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;