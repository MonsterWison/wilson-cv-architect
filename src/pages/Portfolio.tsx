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

// 分類作品集 - 支援多個興趣領域 (Pydantic 格式)
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
    imageUrl: "/portfolio/resin-crafts/Light-up-Quicksand-Cat-Paw-Keychain.webp",
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
    imageUrl: "/portfolio/resin-crafts/Luminous-bottle-keychain-1.webp",
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
    imageUrl: "/portfolio/resin-crafts/Luminous-bottle-keychain-2.webp",
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
    imageUrl: "/portfolio/resin-crafts/Luminous-cat-keychain-1.webp",
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
    imageUrl: "/portfolio/resin-crafts/Luminous-cat-keychain-2.webp",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Categories</h2>
          <p className="text-gray-600 mb-6">
            Explore my comprehensive collection of precision modeling, painting, and crafting works, 
            showcasing technical excellence across multiple disciplines and scales.
          </p>
          
          {/* Category Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Miniature Dioramas</h3>
                  <p className="text-sm text-gray-600">12 works • 1:100 scale</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Model Painting</h3>
                  <p className="text-sm text-gray-600">9 works • 1:35 scale</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Resin Crafts</h3>
                  <p className="text-sm text-gray-600">22 works • 1:1 scale</p>
                </div>
              </div>
            </div>
          </div>
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