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

// 示例照片數據 - 你可以之後替換為真實的照片
const photoItems: PhotoItem[] = [
  {
    id: "1",
    title: "Precision Modeling",
    description: "Scale miniature diorama construction (1:100 architectural models)",
    category: "Architecture",
    imageUrl: "/placeholder.svg", // 之後會替換為真實照片
    date: "2024"
  },
  {
    id: "2", 
    title: "ERP System Design",
    description: "Custom module development for inventory management",
    category: "Technology",
    imageUrl: "/placeholder.svg",
    date: "2023"
  },
  {
    id: "3",
    title: "Cloud Migration Project",
    description: "Enterprise resource planning system migration",
    category: "Technology", 
    imageUrl: "/placeholder.svg",
    date: "2023"
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
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to CV
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
                <p className="text-sm text-gray-600">Ho Wai Shun Wilson - Professional Work</p>
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