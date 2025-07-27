import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PhotoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  date: string;
  details: {
    scale: string;
    materials: string[];
    techniques: string[];
    dimensions: string;
    completionTime: string;
  };
}

// 分類作品集 - 支援多個興趣領域
const photoItems: PhotoItem[] = [
  // Miniature Dioramas (微縮模型)
  {
    id: "1",
    title: "Fantasy Hobbit House",
    description: "Multi-level miniature dwelling with moss-covered thatched roofs, featuring warm interior lighting and intricate architectural details",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/fantasy-hobbit-house-1.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Moss", "LED lights", "Acrylic paint"],
      techniques: ["Laser cutting", "Hand painting", "Weathering", "Lighting installation"],
      dimensions: "30cm × 25cm × 20cm",
      completionTime: "3 weeks"
    }
  },
  {
    id: "2",
    title: "Fantasy Hobbit House - Interior View",
    description: "Detailed interior scenes showing cozy living spaces, bookshelves, and magical atmosphere within the hobbit house",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/fantasy-hobbit-house-2.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Fabric", "Miniature furniture", "Acrylic paint"],
      techniques: ["Interior design", "Furniture making", "Texturing", "Lighting effects"],
      dimensions: "25cm × 20cm × 15cm",
      completionTime: "2 weeks"
    }
  },
  {
    id: "3",
    title: "Fantasy Hobbit House - Architectural Detail",
    description: "Close-up view showcasing the intricate craftsmanship and architectural elements of the miniature dwelling",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/fantasy-hobbit-house-3.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Stone texture", "Moss", "Acrylic paint"],
      techniques: ["Stone texturing", "Moss application", "Weathering", "Detail painting"],
      dimensions: "20cm × 15cm × 10cm",
      completionTime: "1 week"
    }
  },
  {
    id: "4",
    title: "Waterfront Workshop",
    description: "Rustic wooden platform over blue pond with detailed furniture, water wheel, and natural landscaping elements",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/waterfront-workshop-1.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Resin water", "Moss", "Acrylic paint"],
      techniques: ["Water effects", "Wood texturing", "Landscaping", "Weathering"],
      dimensions: "35cm × 30cm × 25cm",
      completionTime: "4 weeks"
    }
  },
  {
    id: "5",
    title: "Waterfront Workshop - Detail View",
    description: "Close-up of the workshop area showing fine craftsmanship and authentic rustic details",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/waterfront-workshop-2.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Metal wire", "Fabric", "Acrylic paint"],
      techniques: ["Metal working", "Wood carving", "Texturing", "Detail painting"],
      dimensions: "20cm × 15cm × 12cm",
      completionTime: "2 weeks"
    }
  },
  {
    id: "6",
    title: "Waterfront Workshop - Landscape",
    description: "Natural landscape elements and water features surrounding the workshop structure",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/waterfront-workshop-3.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Resin", "Moss", "Rocks", "Acrylic paint"],
      techniques: ["Landscaping", "Water effects", "Rock placement", "Natural texturing"],
      dimensions: "30cm × 25cm × 20cm",
      completionTime: "2 weeks"
    }
  },
  {
    id: "7",
    title: "Magic School - HELEVORN SCHOOL OF MAGIC",
    description: "Dark-themed building with mystical signage, featuring glowing windows and magical atmosphere",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-1.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "LED lights", "Acrylic paint", "Decals"],
      techniques: ["Gothic architecture", "Lighting design", "Weathering", "Signage making"],
      dimensions: "40cm × 30cm × 35cm",
      completionTime: "5 weeks"
    }
  },
  {
    id: "8",
    title: "Magic School - Exterior Detail",
    description: "Detailed exterior view showing the architectural elements and mystical design of the magic school",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-2.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Stone texture", "Acrylic paint", "Weathering powder"],
      techniques: ["Stone texturing", "Gothic detailing", "Weathering", "Architectural modeling"],
      dimensions: "25cm × 20cm × 15cm",
      completionTime: "2 weeks"
    }
  },
  {
    id: "9",
    title: "Magic School - Interior Scene",
    description: "Interior view of the magic school showing mystical elements and magical atmosphere",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-3.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "LED lights", "Fabric", "Acrylic paint"],
      techniques: ["Interior design", "Lighting effects", "Furniture making", "Atmospheric effects"],
      dimensions: "20cm × 15cm × 12cm",
      completionTime: "3 weeks"
    }
  },
  {
    id: "10",
    title: "Walnut Shell Miniature - Cozy Room",
    description: "Exquisite miniature room inside a walnut shell with golden hinges, featuring cozy interior with lamp and furniture",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/walnut-bedroom-1.webp",
    date: "2024",
    details: {
      scale: "1:200",
      materials: ["Walnut shell", "Basswood", "Metal hinges", "LED lights"],
      techniques: ["Shell preparation", "Micro furniture", "Lighting installation", "Detail painting"],
      dimensions: "8cm × 6cm × 4cm",
      completionTime: "1 week"
    }
  },
  {
    id: "11",
    title: "Walnut Shell Miniature - Bedroom Detail",
    description: "Detailed view of the miniature bedroom showing the intricate details and cozy atmosphere",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/walnut-bedroom-2.webp",
    date: "2024",
    details: {
      scale: "1:200",
      materials: ["Walnut shell", "Fabric", "Basswood", "Acrylic paint"],
      techniques: ["Micro furniture", "Fabric work", "Detail painting", "Interior design"],
      dimensions: "6cm × 4cm × 3cm",
      completionTime: "1 week"
    }
  },
  {
    id: "12",
    title: "Walnut Shell Miniature - Close-up",
    description: "Close-up view showcasing the incredible detail and craftsmanship of the walnut shell miniature",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/walnut-bedroom-3.webp",
    date: "2024",
    details: {
      scale: "1:200",
      materials: ["Walnut shell", "Basswood", "Acrylic paint", "Decorative elements"],
      techniques: ["Micro detailing", "Precision painting", "Assembly", "Finishing"],
      dimensions: "5cm × 3cm × 2cm",
      completionTime: "1 week"
    }
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="gap-2 bg-primary hover:bg-primary/90 shadow-md transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  ← Back to CV
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
                <p className="text-sm text-gray-600 mt-1">
                  Ho Wai Shun Wilson - Scale Miniature Diorama Construction (1:100 Architectural Models)
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Miniature Dioramas</h2>
          <p className="text-gray-600 mb-6">
            Explore my collection of 1:100 scale architectural models, featuring fantasy buildings, 
            detailed interiors, and intricate craftsmanship that showcases precision modeling skills.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              {/* Image */}
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <CardHeader className="pb-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{item.date}</span>
                    </div>
                  </div>
                  
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-blue-600" />
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    {item.category}
                  </Badge>
                </div>
                
                {/* Technical Details */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Scale:</span>
                      <span className="ml-1 text-gray-600">{item.details.scale}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Size:</span>
                      <span className="ml-1 text-gray-600">{item.details.dimensions}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Duration:</span>
                      <span className="ml-1 text-gray-600">{item.details.completionTime}</span>
                    </div>
                  </div>
                  
                  {/* Materials */}
                  <div>
                    <span className="font-medium text-gray-700 text-sm">Materials:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.details.materials.map((material, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Techniques */}
                  <div>
                    <span className="font-medium text-gray-700 text-sm">Techniques:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.details.techniques.map((technique, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-gray-50">
                          {technique}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {photoItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Photos Yet</h3>
            <p className="text-gray-600 mb-4">Photos will be added here soon.</p>
            <Link to="/">
              <Button>Back to CV</Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio; 