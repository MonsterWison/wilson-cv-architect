import { ArrowLeft, Calendar, Tag, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useMemo } from "react";

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

// 分類作品集 - 支援多個興趣領域 (Pydantic 格式)
const photoItems: PhotoItem[] = [
  // iOS App Development (iOS 應用程式開發)
  {
    id: "ios-1",
    title: "Attraction Finder",
    description: "AI-powered travel companion app that provides intelligent attraction search and personalized travel recommendations using advanced artificial intelligence technology",
    category: "iOS Development",
    imageUrl: "/portfolio/ios-apps/attraction-finder.svg",
    date: "2025",
    details: {
      scale: "Native iOS",
      materials: ["SwiftUI", "Apple HIG", "MVVM Architecture", "AI Integration"],
      techniques: ["Native iOS Development", "Apple Human Interface Guidelines", "AI Content Generation", "App Store Publishing"],
      dimensions: "iPhone & Mac Compatible",
      completionTime: "3 months"
    }
  },
  
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
  },
  
  // Model Painting (高細節模型繪畫) - Optimus Prime Series
  {
    id: "13",
    title: "Optimus Prime Model Painting - Initial Base",
    description: "Starting phase of Optimus Prime model painting with base coat and primer application",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/Optimus-Prime-model-painting-1.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Primer", "Fine detail brushes", "Optimus Prime model"],
      techniques: ["Base coating", "Primer application", "Surface preparation", "Color planning"],
      dimensions: "15cm × 8cm × 6cm",
      completionTime: "1 day"
    }
  },
  {
    id: "14",
    title: "Optimus Prime Model Painting - Primary Colors",
    description: "Application of primary colors and base painting on Optimus Prime model",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/Optimus-Prime-model-painting-2.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Primary colors", "Detail brushes", "Optimus Prime model"],
      techniques: ["Color blocking", "Primary color application", "Brush control", "Color mixing"],
      dimensions: "15cm × 8cm × 6cm",
      completionTime: "2 days"
    }
  },
  {
    id: "15",
    title: "Optimus Prime Model Painting - Detail Work",
    description: "Detailed painting work on Optimus Prime model with precision brush techniques",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/Optimus-Prime-model-painting-3.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Fine detail brushes", "Metallic paint", "Optimus Prime model"],
      techniques: ["Detail painting", "Fine brush work", "Metallic effects", "Precision control"],
      dimensions: "15cm × 8cm × 6cm",
      completionTime: "3 days"
    }
  },
  {
    id: "16",
    title: "Optimus Prime Model Painting - Metallic Effects",
    description: "Application of metallic effects and weathering on Optimus Prime model",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/Optimus-Prime-model-painting-4.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Metallic paint", "Weathering powder", "Detail brushes", "Optimus Prime model"],
      techniques: ["Metallic painting", "Weathering effects", "Dry brushing", "Surface texturing"],
      dimensions: "15cm × 8cm × 6cm",
      completionTime: "2 days"
    }
  },
  {
    id: "17",
    title: "Optimus Prime Model Painting - Advanced Details",
    description: "Advanced detail work including panel lines and mechanical features",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/Optimus-Prime-model-painting-5.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Panel line wash", "Fine detail brushes", "Optimus Prime model"],
      techniques: ["Panel lining", "Detail highlighting", "Wash application", "Precision work"],
      dimensions: "15cm × 8cm × 6cm",
      completionTime: "2 days"
    }
  },
  {
    id: "18",
    title: "Optimus Prime Model Painting - Weathering",
    description: "Weathering and aging effects applied to Optimus Prime model",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/Optimus-Prime-model-painting-6.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Weathering powder", "Wash", "Detail brushes", "Optimus Prime model"],
      techniques: ["Weathering", "Aging effects", "Surface texturing", "Realistic wear"],
      dimensions: "15cm × 8cm × 6cm",
      completionTime: "1 day"
    }
  },
  {
    id: "19",
    title: "Optimus Prime Model Painting - Final Details",
    description: "Final detail work and finishing touches on Optimus Prime model",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/Optimus-Prime-model-painting-7.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Final detail brushes", "Highlight paint", "Optimus Prime model"],
      techniques: ["Final detailing", "Highlight application", "Quality control", "Finishing touches"],
      dimensions: "15cm × 8cm × 6cm",
      completionTime: "1 day"
    }
  },
  {
    id: "20",
    title: "Optimus Prime Model Painting - Complete View",
    description: "Complete view of finished Optimus Prime model with all painting techniques applied",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/Optimus-Prime-model-painting-8.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Complete paint set", "All detail brushes", "Finishing materials", "Optimus Prime model"],
      techniques: ["Complete painting", "All techniques combined", "Final assembly", "Presentation ready"],
      dimensions: "15cm × 8cm × 6cm",
      completionTime: "1 week"
    }
  },
  {
    id: "21",
    title: "Optimus Prime Model Painting - Showcase",
    description: "Showcase presentation of the completed Optimus Prime model painting masterpiece",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/Optimus-Prime-model-painting-9.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Complete paint set", "All detail brushes", "Showcase materials", "Optimus Prime model"],
      techniques: ["Masterpiece creation", "Technical excellence", "Presentation quality", "Professional finish"],
      dimensions: "15cm × 8cm × 6cm",
      completionTime: "1 week"
    }
  },
  
  // Resin Crafts (樹脂工藝品) - 各種精美作品
  {
    id: "22",
    title: "Crystal Flower Hairpin",
    description: "Elegant crystal flower hairpin with delicate resin petals and shimmering effects",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Crystal-Flower-Hairpin.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Crystal powder", "Flower mold", "Hairpin base"],
      techniques: ["Resin casting", "Crystal effects", "Flower shaping", "Delicate work"],
      dimensions: "8cm × 4cm × 1cm",
      completionTime: "2 days"
    }
  },
  {
    id: "23",
    title: "Light-up Cat Claw Keychain",
    description: "Glowing cat claw keychain with LED lighting and resin encapsulation",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Light-up-cat-claw-keychain-1.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "LED lights", "Cat claw mold", "Keychain hardware"],
      techniques: ["Resin casting", "LED integration", "Light effects", "Electronics"],
      dimensions: "6cm × 3cm × 1.5cm",
      completionTime: "3 days"
    }
  },
  {
    id: "24",
    title: "Light-up Cat Claw Keychain - Variant",
    description: "Alternative design of light-up cat claw keychain with different color scheme",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Light-up-cat-claw-keychain-2.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "LED lights", "Cat claw mold", "Keychain hardware"],
      techniques: ["Resin casting", "LED integration", "Color variation", "Electronics"],
      dimensions: "6cm × 3cm × 1.5cm",
      completionTime: "3 days"
    }
  },
  {
    id: "25",
    title: "Miniature Crystal Decoration",
    description: "Miniature crystal decoration with intricate details and sparkling effects",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Miniature-crystal-decoration.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Crystal powder", "Miniature mold", "Decorative base"],
      techniques: ["Resin casting", "Miniature work", "Crystal effects", "Detail precision"],
      dimensions: "5cm × 3cm × 2cm",
      completionTime: "2 days"
    }
  },
  {
    id: "26",
    title: "Cabbage Keychain",
    description: "Whimsical cabbage-shaped keychain with realistic vegetable texture",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Cabbage-keychain.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Green pigments", "Cabbage mold", "Keychain hardware"],
      techniques: ["Resin casting", "Vegetable texture", "Realistic coloring", "Organic shape"],
      dimensions: "4cm × 3cm × 2cm",
      completionTime: "2 days"
    }
  },
  {
    id: "27",
    title: "Crystal Butterfly Hairpin",
    description: "Beautiful crystal butterfly hairpin with delicate wings and shimmering effects",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Crystal-Butterfly-Hairpin.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Crystal powder", "Butterfly mold", "Hairpin base"],
      techniques: ["Resin casting", "Butterfly shaping", "Crystal effects", "Delicate wings"],
      dimensions: "10cm × 6cm × 1cm",
      completionTime: "3 days"
    }
  },
  {
    id: "28",
    title: "Gum Gourmet Pot",
    description: "Decorative gum gourmet pot with resin coating and artistic design",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Gum-Gourmet-Pot.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Pot base", "Decorative elements", "Food-safe coating"],
      techniques: ["Resin coating", "Pot decoration", "Food-safe finish", "Artistic design"],
      dimensions: "8cm × 6cm × 4cm",
      completionTime: "2 days"
    }
  },
  {
    id: "29",
    title: "Light-up Quicksand Cat Paw Keychain",
    description: "Interactive quicksand cat paw keychain with LED lighting and flowing effects",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Quicksand-Cat-Paw-Keychain.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "LED lights", "Quicksand effect", "Cat paw mold"],
      techniques: ["Resin casting", "Quicksand effects", "LED integration", "Interactive design"],
      dimensions: "7cm × 4cm × 2cm",
      completionTime: "4 days"
    }
  },
  {
    id: "30",
    title: "Luminous Bottle Keychain",
    description: "Glowing bottle keychain with LED lighting and resin encapsulation",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Bottle-keychain-1.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "LED lights", "Bottle mold", "Keychain hardware"],
      techniques: ["Resin casting", "LED integration", "Bottle shaping", "Light effects"],
      dimensions: "5cm × 2cm × 1.5cm",
      completionTime: "3 days"
    }
  },
  {
    id: "31",
    title: "Luminous Bottle Keychain - Variant",
    description: "Alternative luminous bottle keychain with different lighting pattern",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Bottle-keychain-2.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "LED lights", "Bottle mold", "Keychain hardware"],
      techniques: ["Resin casting", "LED integration", "Light pattern", "Bottle design"],
      dimensions: "5cm × 2cm × 1.5cm",
      completionTime: "3 days"
    }
  },
  {
    id: "32",
    title: "Luminous Cat Keychain",
    description: "Glowing cat keychain with LED lighting and cute feline design",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Cat-keychain-1.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "LED lights", "Cat mold", "Keychain hardware"],
      techniques: ["Resin casting", "LED integration", "Cat design", "Light effects"],
      dimensions: "6cm × 3cm × 1.5cm",
      completionTime: "3 days"
    }
  },
  {
    id: "33",
    title: "Luminous Cat Keychain - Variant",
    description: "Alternative luminous cat keychain with different cat pose",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Cat-keychain-2.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "LED lights", "Cat mold", "Keychain hardware"],
      techniques: ["Resin casting", "LED integration", "Cat pose", "Light effects"],
      dimensions: "6cm × 3cm × 1.5cm",
      completionTime: "3 days"
    }
  },
  {
    id: "34",
    title: "Miniature Crystal Suitcase",
    description: "Charming miniature crystal suitcase with detailed luggage design",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Miniature-crystal-suitcase.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Crystal powder", "Suitcase mold", "Miniature details"],
      techniques: ["Resin casting", "Miniature work", "Crystal effects", "Luggage design"],
      dimensions: "4cm × 3cm × 2cm",
      completionTime: "2 days"
    }
  },
  {
    id: "35",
    title: "Shells for Decoration - Set 1",
    description: "Beautiful shell decorations with natural patterns and resin coating",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Shells-for-decoration-1.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Natural shells", "Epoxy resin", "Decorative base", "Natural preservation"],
      techniques: ["Shell preservation", "Resin coating", "Natural patterns", "Decorative arrangement"],
      dimensions: "Various sizes",
      completionTime: "2 days"
    }
  },
  {
    id: "36",
    title: "Shells for Decoration - Set 2",
    description: "Second set of shell decorations with different arrangements and patterns",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Shells-for-decoration-2.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Natural shells", "Epoxy resin", "Decorative base", "Natural preservation"],
      techniques: ["Shell preservation", "Resin coating", "Pattern arrangement", "Natural beauty"],
      dimensions: "Various sizes",
      completionTime: "2 days"
    }
  },
  {
    id: "37",
    title: "Shells for Decoration - Set 3",
    description: "Third set of shell decorations with unique arrangements and natural beauty",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Shells-for-decoration-3.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Natural shells", "Epoxy resin", "Decorative base", "Natural preservation"],
      techniques: ["Shell preservation", "Resin coating", "Unique arrangement", "Natural patterns"],
      dimensions: "Various sizes",
      completionTime: "2 days"
    }
  },
  {
    id: "38",
    title: "Teardrop Keychain",
    description: "Elegant teardrop-shaped keychain with crystal-like effects and smooth finish",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/Teardrop-Keychain.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Crystal powder", "Teardrop mold", "Keychain hardware"],
      techniques: ["Resin casting", "Teardrop shaping", "Crystal effects", "Smooth finish"],
      dimensions: "5cm × 2cm × 1cm",
      completionTime: "2 days"
    }
  },
  {
    id: "39",
    title: "Butterfly Hairpin - Design 1",
    description: "Beautiful butterfly hairpin with delicate wings and artistic design",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/butterfly-hairpin-1.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Butterfly mold", "Hairpin base", "Decorative elements"],
      techniques: ["Resin casting", "Butterfly design", "Delicate wings", "Artistic work"],
      dimensions: "12cm × 8cm × 1cm",
      completionTime: "3 days"
    }
  },
  {
    id: "40",
    title: "Butterfly Hairpin - Design 2",
    description: "Alternative butterfly hairpin design with different wing patterns",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/butterfly-hairpin-2.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Butterfly mold", "Hairpin base", "Decorative elements"],
      techniques: ["Resin casting", "Butterfly design", "Wing patterns", "Artistic variation"],
      dimensions: "12cm × 8cm × 1cm",
      completionTime: "3 days"
    }
  },
  {
    id: "41",
    title: "Crystal Comb",
    description: "Elegant crystal comb with resin coating and decorative elements",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/crystal-comb.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Crystal powder", "Comb base", "Decorative elements"],
      techniques: ["Resin casting", "Crystal effects", "Comb design", "Functional art"],
      dimensions: "15cm × 4cm × 1cm",
      completionTime: "2 days"
    }
  },
  {
    id: "42",
    title: "Flower Hairpin",
    description: "Delicate flower hairpin with realistic petals and natural colors",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/flower-hairpin.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Flower mold", "Natural pigments", "Hairpin base"],
      techniques: ["Resin casting", "Flower shaping", "Natural colors", "Petal detail"],
      dimensions: "10cm × 6cm × 1cm",
      completionTime: "3 days"
    }
  },
  {
    id: "43",
    title: "Labubu Charm",
    description: "Cute Labubu character charm with resin encapsulation and detailed design",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/labubu-charm.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Labubu figure", "Charm hardware", "Decorative elements"],
      techniques: ["Resin casting", "Character design", "Charm making", "Detail work"],
      dimensions: "3cm × 2cm × 1cm",
      completionTime: "2 days"
    }
  },
  
  // Additional Miniature Dioramas - Magic School Series
  {
    id: "44",
    title: "Magic School - HELEVORN SCHOOL OF MAGIC",
    description: "Magical academy building with mystical architecture and enchanting atmosphere",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-1.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Stone texture", "LED lights", "Acrylic paint"],
      techniques: ["Gothic architecture", "Stone texturing", "Magical lighting", "Weathering"],
      dimensions: "40cm × 30cm × 25cm",
      completionTime: "6 weeks"
    }
  },
  {
    id: "45",
    title: "Magic School - Tower View",
    description: "Majestic tower of the magical academy with intricate stonework and mystical elements",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-2.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Stone texture", "Metal wire", "Acrylic paint"],
      techniques: ["Tower construction", "Stone carving", "Metal working", "Detail painting"],
      dimensions: "25cm × 20cm × 35cm",
      completionTime: "4 weeks"
    }
  },
  {
    id: "46",
    title: "Magic School - Courtyard",
    description: "Peaceful courtyard with magical gardens and architectural details",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-3.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Moss", "Stone texture", "Acrylic paint"],
      techniques: ["Landscaping", "Garden design", "Stone work", "Natural effects"],
      dimensions: "35cm × 30cm × 20cm",
      completionTime: "3 weeks"
    }
  },
  {
    id: "47",
    title: "Magic School - Library Wing",
    description: "Scholarly library section with bookshelves and magical study areas",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-4.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Fabric", "Miniature books", "Acrylic paint"],
      techniques: ["Interior design", "Furniture making", "Book detailing", "Lighting effects"],
      dimensions: "30cm × 25cm × 20cm",
      completionTime: "4 weeks"
    }
  },
  {
    id: "48",
    title: "Magic School - Entrance Hall",
    description: "Grand entrance with magical portals and mystical decorations",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-5.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Crystal elements", "LED lights", "Acrylic paint"],
      techniques: ["Portal design", "Crystal work", "Magical lighting", "Architectural detail"],
      dimensions: "35cm × 30cm × 25cm",
      completionTime: "5 weeks"
    }
  },
  {
    id: "49",
    title: "Magic School - Dormitory Wing",
    description: "Student living quarters with cozy rooms and magical atmosphere",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-6.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Fabric", "Miniature furniture", "Acrylic paint"],
      techniques: ["Room design", "Furniture making", "Texturing", "Cozy atmosphere"],
      dimensions: "40cm × 25cm × 20cm",
      completionTime: "4 weeks"
    }
  },
  {
    id: "50",
    title: "Magic School - Study Room",
    description: "Intimate study space with magical books and learning materials",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-7.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Miniature books", "Fabric", "Acrylic paint"],
      techniques: ["Study design", "Book detailing", "Furniture work", "Academic atmosphere"],
      dimensions: "20cm × 15cm × 15cm",
      completionTime: "2 weeks"
    }
  },
  {
    id: "51",
    title: "Magic School - Exterior View",
    description: "Complete exterior view of the magical academy with all architectural elements",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-8.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Stone texture", "Moss", "Acrylic paint"],
      techniques: ["Exterior design", "Stone work", "Landscaping", "Weathering"],
      dimensions: "50cm × 40cm × 30cm",
      completionTime: "8 weeks"
    }
  },
  {
    id: "52",
    title: "Magic School - Aerial View",
    description: "Bird's eye view showing the complete layout and magical gardens",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-9.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Moss", "Stone texture", "Acrylic paint"],
      techniques: ["Layout design", "Garden planning", "Aerial perspective", "Landscaping"],
      dimensions: "60cm × 50cm × 25cm",
      completionTime: "6 weeks"
    }
  },
  {
    id: "53",
    title: "Magic School - Detail View",
    description: "Close-up of architectural details and magical elements",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/school-10.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Stone texture", "Metal wire", "Acrylic paint"],
      techniques: ["Detail work", "Stone carving", "Metal working", "Fine painting"],
      dimensions: "15cm × 10cm × 8cm",
      completionTime: "1 week"
    }
  },
  
  // Additional Miniature Dioramas - Magical Study Series
  {
    id: "54",
    title: "Magical Study - Main Chamber",
    description: "Enchanted study room with mystical books and magical artifacts",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/agical-study-1.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Miniature books", "Crystal elements", "Acrylic paint"],
      techniques: ["Study design", "Book detailing", "Crystal work", "Magical atmosphere"],
      dimensions: "25cm × 20cm × 15cm",
      completionTime: "3 weeks"
    }
  },
  {
    id: "55",
    title: "Magical Study - Library Corner",
    description: "Cozy library nook with ancient tomes and magical scrolls",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/agical-study-2.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Fabric", "Miniature books", "Acrylic paint"],
      techniques: ["Library design", "Book making", "Fabric work", "Cozy atmosphere"],
      dimensions: "20cm × 15cm × 12cm",
      completionTime: "2 weeks"
    }
  },
  {
    id: "56",
    title: "Magical Study - Workbench",
    description: "Magical workbench with potions, tools, and mystical equipment",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/agical-study-3.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Metal wire", "Miniature tools", "Acrylic paint"],
      techniques: ["Workbench design", "Tool making", "Metal work", "Detail painting"],
      dimensions: "15cm × 10cm × 8cm",
      completionTime: "2 weeks"
    }
  },
  {
    id: "57",
    title: "Magical Study - Potion Shelf",
    description: "Organized shelf with colorful potions and magical ingredients",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/agical-study-4.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Glass beads", "Colored resin", "Acrylic paint"],
      techniques: ["Shelf design", "Potion making", "Glass work", "Color effects"],
      dimensions: "12cm × 8cm × 6cm",
      completionTime: "1 week"
    }
  },
  {
    id: "58",
    title: "Magical Study - Artifact Display",
    description: "Collection of magical artifacts and enchanted objects",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/agical-study-5.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Metal wire", "Crystal elements", "Acrylic paint"],
      techniques: ["Artifact design", "Metal working", "Crystal work", "Detail painting"],
      dimensions: "10cm × 8cm × 5cm",
      completionTime: "1 week"
    }
  },
  
  // Additional Miniature Dioramas - Walnut Bedroom Series
  {
    id: "59",
    title: "Walnut Bedroom - Main View",
    description: "Elegant bedroom with walnut furniture and warm lighting",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/walnut-bedroom-1.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Walnut veneer", "Fabric", "Acrylic paint"],
      techniques: ["Bedroom design", "Furniture making", "Fabric work", "Warm lighting"],
      dimensions: "25cm × 20cm × 15cm",
      completionTime: "3 weeks"
    }
  },
  {
    id: "60",
    title: "Walnut Bedroom - Detail View",
    description: "Close-up of the elegant walnut furniture and bedding details",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/walnut-bedroom-2.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Walnut veneer", "Fabric", "Acrylic paint"],
      techniques: ["Furniture detail", "Wood finishing", "Fabric detail", "Fine painting"],
      dimensions: "15cm × 12cm × 10cm",
      completionTime: "2 weeks"
    }
  },
  {
    id: "61",
    title: "Walnut Bedroom - Corner View",
    description: "Intimate corner view showing the cozy atmosphere and fine craftsmanship",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/walnut-bedroom-3.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Walnut veneer", "Fabric", "Acrylic paint"],
      techniques: ["Corner design", "Wood work", "Fabric detail", "Atmosphere creation"],
      dimensions: "12cm × 10cm × 8cm",
      completionTime: "1 week"
    }
  },
  
  // Additional Waterfront Workshop Series
  {
    id: "62",
    title: "Waterfront Workshop - Workshop Detail",
    description: "Detailed view of the workshop area with tools and equipment",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/waterfront-workshop-4.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Metal wire", "Miniature tools", "Acrylic paint"],
      techniques: ["Workshop detail", "Tool making", "Metal work", "Equipment design"],
      dimensions: "20cm × 15cm × 12cm",
      completionTime: "2 weeks"
    }
  },
  {
    id: "63",
    title: "Waterfront Workshop - Water Feature",
    description: "Beautiful water feature with flowing effects and natural elements",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/waterfront-workshop-5.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Resin water", "Moss", "Acrylic paint"],
      techniques: ["Water effects", "Flow design", "Natural texturing", "Landscaping"],
      dimensions: "25cm × 20cm × 15cm",
      completionTime: "3 weeks"
    }
  },
  {
    id: "64",
    title: "Waterfront Workshop - Final View",
    description: "Complete waterfront scene with all elements harmoniously combined",
    category: "Miniature Dioramas",
    imageUrl: "/portfolio/miniature-dioramas/waterfront-workshop-6.webp",
    date: "2024",
    details: {
      scale: "1:100",
      materials: ["Basswood", "Resin water", "Moss", "Acrylic paint"],
      techniques: ["Scene composition", "Water effects", "Landscaping", "Final detailing"],
      dimensions: "35cm × 30cm × 25cm",
      completionTime: "4 weeks"
    }
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // 獲取所有分類
  const categories = useMemo(() => {
    const cats = ["All", ...Array.from(new Set(photoItems.map(item => item.category)))];
    return cats;
  }, []);
  
  // 根據選擇的分類過濾作品
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return photoItems;
    }
    return photoItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);
  
  // 獲取分類統計
  const categoryStats = useMemo(() => {
    const stats = photoItems.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return stats;
  }, []);

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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Categories</h2>
              <p className="text-gray-600">
                Explore my comprehensive collection of precision modeling, painting, and crafting works, 
                showcasing technical excellence across multiple disciplines and scales.
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by Category</span>
            </div>
          </div>
          
          {/* Category Filter Buttons - HIG Design */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = category === "All" ? photoItems.length : categoryStats[category] || 0;
              
              return (
                <Button
                  key={category}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-200 ${
                    isActive 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-white hover:bg-gray-50 border-gray-200 text-gray-700"
                  }`}
                >
                  <span className="font-medium">{category}</span>
                  <Badge 
                    variant="secondary" 
                    className={`ml-2 text-xs ${
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {count}
                  </Badge>
                </Button>
              );
            })}
          </div>
          
          {/* Category Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Miniature Dioramas</h3>
                  <p className="text-sm text-gray-600">{categoryStats["Miniature Dioramas"] || 0} works • 1:100 scale</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Model Painting</h3>
                  <p className="text-sm text-gray-600">{categoryStats["Model Painting"] || 0} works • 1:35 scale</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Resin Crafts</h3>
                  <p className="text-sm text-gray-600">{categoryStats["Resin Crafts"] || 0} works • 1:1 scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium text-gray-900">{filteredItems.length}</span> of <span className="font-medium text-gray-900">{photoItems.length}</span> works
            {selectedCategory !== "All" && (
              <span> in <span className="font-medium text-gray-900">{selectedCategory}</span></span>
            )}
          </p>
        </div>

        {/* Grid Layout - Improved Image Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              {/* Image - Smaller and Better Proportioned */}
              <div className="aspect-[3/2] bg-gray-200 relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <CardHeader className="pb-3">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-900 leading-tight line-clamp-2">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-gray-500 flex-shrink-0 ml-2">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{item.date}</span>
                    </div>
                  </div>
                  
                  <CardDescription className="text-gray-600 leading-relaxed text-sm line-clamp-2">
                    {item.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-3">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <Tag className="w-3 h-3 text-blue-600" />
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                    {item.category}
                  </Badge>
                </div>
                
                {/* Technical Details - Compact Layout */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="font-medium text-gray-700">Scale:</span>
                      <span className="ml-1 text-gray-600">{item.details.scale}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Size:</span>
                      <span className="ml-1 text-gray-600">{item.details.dimensions}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Time:</span>
                      <span className="ml-1 text-gray-600">{item.details.completionTime}</span>
                    </div>
                  </div>
                  
                  {/* Materials - Compact */}
                  <div>
                    <span className="font-medium text-gray-700 text-xs">Materials:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.details.materials.slice(0, 3).map((material, index) => (
                        <Badge key={index} variant="outline" className="text-xs px-1 py-0">
                          {material}
                        </Badge>
                      ))}
                      {item.details.materials.length > 3 && (
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          +{item.details.materials.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Techniques - Compact */}
                  <div>
                    <span className="font-medium text-gray-700 text-xs">Techniques:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.details.techniques.slice(0, 2).map((technique, index) => (
                        <Badge key={index} variant="outline" className="text-xs px-1 py-0 bg-gray-50">
                          {technique}
                        </Badge>
                      ))}
                      {item.details.techniques.length > 2 && (
                        <Badge variant="outline" className="text-xs px-1 py-0 bg-gray-50">
                          +{item.details.techniques.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Works Found</h3>
            <p className="text-gray-600 mb-4">No works found in the selected category.</p>
            <Button onClick={() => setSelectedCategory("All")}>
              View All Works
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio; 