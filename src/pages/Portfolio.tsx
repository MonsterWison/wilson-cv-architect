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

// 微縮模型作品集
const photoItems: PhotoItem[] = [
  {
    id: "1",
    title: "Fantasy Hobbit House",
    description: "Multi-level miniature dwelling with moss-covered thatched roofs, featuring warm interior lighting and intricate architectural details",
    category: "Fantasy Architecture",
    imageUrl: "/portfolio/fantasy-hobbit-house.webp",
    date: "2024"
  },
  {
    id: "2",
    title: "Waterfront Workshop",
    description: "Rustic wooden platform over blue pond with detailed furniture, water wheel, and natural landscaping elements",
    category: "Rustic Architecture",
    imageUrl: "/portfolio/waterfront-workshop.webp",
    date: "2024"
  },
  {
    id: "3",
    title: "Multi-Story Bakery",
    description: "Two-story coffee shop and bakery with detailed interior, wooden staircase, and authentic food displays",
    category: "Commercial Architecture",
    imageUrl: "/portfolio/multi-story-bakery.webp",
    date: "2024"
  },
  {
    id: "4",
    title: "Magical Study Room",
    description: "Gothic-style library with floating books, crystal balls, and mystical atmosphere featuring warm lighting",
    category: "Fantasy Interior",
    imageUrl: "/portfolio/magical-study.webp",
    date: "2024"
  },
  {
    id: "5",
    title: "Walnut Shell Miniature",
    description: "Exquisite miniature room inside a walnut shell with golden hinges, featuring cozy interior with lamp and furniture",
    category: "Micro Art",
    imageUrl: "/portfolio/walnut-shell-miniature.webp",
    date: "2024"
  },
  {
    id: "6",
    title: "Magic School Exterior",
    description: "Dark-themed building with 'HELEVORN SCHOOL OF MAGIC' signage, featuring glowing windows and mystical atmosphere",
    category: "Fantasy Architecture",
    imageUrl: "/portfolio/magic-school.webp",
    date: "2024"
  },
  {
    id: "7",
    title: "Cozy Living Room",
    description: "Warm interior scene with green armchairs, decorative table, and French bread basket in rustic setting",
    category: "Interior Design",
    imageUrl: "/portfolio/cozy-living-room.webp",
    date: "2024"
  },
  {
    id: "8",
    title: "Wizard's Library",
    description: "Detailed study with bookshelves, magical artifacts, chalkboard with symbols, and floating elements",
    category: "Fantasy Interior",
    imageUrl: "/portfolio/wizards-library.webp",
    date: "2024"
  },
  {
    id: "9",
    title: "Bakery Shop Interior",
    description: "Detailed bakery interior with display cases, bread loaves, hanging fan light, and authentic shop atmosphere",
    category: "Commercial Interior",
    imageUrl: "/portfolio/bakery-interior.webp",
    date: "2024"
  },
  {
    id: "10",
    title: "Walnut Shell Bedroom",
    description: "Pink-themed miniature bedroom inside walnut shell with teddy bear, curtains, and cozy sleeping area",
    category: "Micro Art",
    imageUrl: "/portfolio/walnut-bedroom.webp",
    date: "2024"
  },
  {
    id: "11",
    title: "Coffee & Bakery Storefront",
    description: "Two-story building with 'COFFEE & BAKERY' signage, detailed windows, and authentic shop front design",
    category: "Commercial Architecture",
    imageUrl: "/portfolio/coffee-bakery-storefront.webp",
    date: "2024"
  },
  {
    id: "12",
    title: "Classic Study Room",
    description: "Elegant study with antique furniture, paintings, books, and warm lighting creating scholarly atmosphere",
    category: "Classic Interior",
    imageUrl: "/portfolio/classic-study.webp",
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