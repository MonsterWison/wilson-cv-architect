import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PhotoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  date: string;
}

// 微縮模型作品集 - 4個主要作品系列
const photoItems: PhotoItem[] = [
  {
    id: "1",
    title: "Fantasy Hobbit House",
    description: "Multi-level miniature dwelling with moss-covered thatched roofs, featuring warm interior lighting and intricate architectural details",
    category: "Fantasy Architecture",
    imageUrl: "/portfolio/fantasy-hobbit-house-1.webp",
    date: "2024"
  },
  {
    id: "2",
    title: "Fantasy Hobbit House - Interior View",
    description: "Detailed interior scenes showing cozy living spaces, bookshelves, and magical atmosphere within the hobbit house",
    category: "Fantasy Architecture",
    imageUrl: "/portfolio/fantasy-hobbit-house-2.webp",
    date: "2024"
  },
  {
    id: "3",
    title: "Fantasy Hobbit House - Architectural Detail",
    description: "Close-up view showcasing the intricate craftsmanship and architectural elements of the miniature dwelling",
    category: "Fantasy Architecture",
    imageUrl: "/portfolio/fantasy-hobbit-house-3.webp",
    date: "2024"
  },
  {
    id: "4",
    title: "Waterfront Workshop",
    description: "Rustic wooden platform over blue pond with detailed furniture, water wheel, and natural landscaping elements",
    category: "Rustic Architecture",
    imageUrl: "/portfolio/waterfront-workshop-1.webp",
    date: "2024"
  },
  {
    id: "5",
    title: "Waterfront Workshop - Detail View",
    description: "Close-up of the workshop area showing fine craftsmanship and authentic rustic details",
    category: "Rustic Architecture",
    imageUrl: "/portfolio/waterfront-workshop-2.webp",
    date: "2024"
  },
  {
    id: "6",
    title: "Waterfront Workshop - Landscape",
    description: "Natural landscape elements and water features surrounding the workshop structure",
    category: "Rustic Architecture",
    imageUrl: "/portfolio/waterfront-workshop-3.webp",
    date: "2024"
  },
  {
    id: "7",
    title: "Magic School - HELEVORN SCHOOL OF MAGIC",
    description: "Dark-themed building with mystical signage, featuring glowing windows and magical atmosphere",
    category: "Fantasy Architecture",
    imageUrl: "/portfolio/school-1.webp",
    date: "2024"
  },
  {
    id: "8",
    title: "Magic School - Exterior Detail",
    description: "Detailed exterior view showing the architectural elements and mystical design of the magic school",
    category: "Fantasy Architecture",
    imageUrl: "/portfolio/school-2.webp",
    date: "2024"
  },
  {
    id: "9",
    title: "Magic School - Interior Scene",
    description: "Interior view of the magic school showing mystical elements and magical atmosphere",
    category: "Fantasy Architecture",
    imageUrl: "/portfolio/school-3.webp",
    date: "2024"
  },
  {
    id: "10",
    title: "Walnut Shell Miniature - Cozy Room",
    description: "Exquisite miniature room inside a walnut shell with golden hinges, featuring cozy interior with lamp and furniture",
    category: "Micro Art",
    imageUrl: "/portfolio/walnut-bedroom-1.webp",
    date: "2024"
  },
  {
    id: "11",
    title: "Walnut Shell Miniature - Bedroom Detail",
    description: "Detailed view of the miniature bedroom showing the intricate details and cozy atmosphere",
    category: "Micro Art",
    imageUrl: "/portfolio/walnut-bedroom-2.webp",
    date: "2024"
  },
  {
    id: "12",
    title: "Walnut Shell Miniature - Close-up",
    description: "Close-up view showcasing the incredible detail and craftsmanship of the walnut shell miniature",
    category: "Micro Art",
    imageUrl: "/portfolio/walnut-bedroom-3.webp",
    date: "2024"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="default" size="sm" className="gap-2 bg-primary hover:bg-primary/90 shadow-md">
                  <ArrowLeft className="w-4 h-4" />
                  ← Back to CV
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
                <p className="text-sm text-gray-600 mt-1">Ho Wai Shun Wilson - Scale Miniature Diorama Construction (1:100 Architectural Models)</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900">
                      <Download className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="mt-1">{item.description}</CardDescription>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {item.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {item.category}
                  </span>
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