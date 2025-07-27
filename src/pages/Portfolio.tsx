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
  
  // Model Painting (高細節模型繪畫)
  {
    id: "13",
    title: "Detailed Miniature Painting - Character Portrait",
    description: "High-detail acrylic painting showcasing intricate facial features and realistic skin tones on miniature scale",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/IMG_7798.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Primer", "Fine detail brushes", "Miniature base"],
      techniques: ["Layering", "Wet blending", "Detail highlighting", "Skin tone mixing"],
      dimensions: "3cm × 2cm × 1cm",
      completionTime: "2 days"
    }
  },
  {
    id: "14",
    title: "Miniature Figure Painting - Armor Detail",
    description: "Precision painting of miniature armor with metallic effects and weathering techniques",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/IMG_7800.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Metallic paint", "Wash", "Miniature figure"],
      techniques: ["Metallic painting", "Washing", "Dry brushing", "Weathering"],
      dimensions: "4cm × 2cm × 1cm",
      completionTime: "3 days"
    }
  },
  {
    id: "15",
    title: "Detailed Miniature - Equipment Painting",
    description: "Intricate painting of miniature equipment and accessories with realistic textures",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/IMG_7802.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Detail brushes", "Wash", "Miniature accessories"],
      techniques: ["Detail painting", "Texturing", "Washing", "Highlighting"],
      dimensions: "2cm × 1cm × 1cm",
      completionTime: "1 day"
    }
  },
  {
    id: "16",
    title: "Miniature Painting - Weapon Detail",
    description: "High-detail painting of miniature weapons with metallic effects and realistic wear",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/IMG_7804.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Metallic paint", "Wash", "Miniature weapon"],
      techniques: ["Metallic painting", "Weathering", "Detail work", "Washing"],
      dimensions: "3cm × 1cm × 0.5cm",
      completionTime: "1 day"
    }
  },
  {
    id: "17",
    title: "Detailed Miniature - Face Painting",
    description: "Precision painting of miniature faces with realistic skin tones and expressions",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/IMG_7816.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Fine detail brushes", "Skin tone paint", "Miniature head"],
      techniques: ["Skin tone painting", "Detail highlighting", "Eye painting", "Expression work"],
      dimensions: "1cm × 1cm × 1cm",
      completionTime: "2 days"
    }
  },
  {
    id: "18",
    title: "Miniature Painting - Clothing Detail",
    description: "Detailed painting of miniature clothing with realistic fabric textures and folds",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/IMG_7818.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Detail brushes", "Wash", "Miniature clothing"],
      techniques: ["Fabric painting", "Folding effects", "Washing", "Highlighting"],
      dimensions: "2cm × 1cm × 1cm",
      completionTime: "1 day"
    }
  },
  {
    id: "19",
    title: "Detailed Miniature - Accessory Painting",
    description: "Precision painting of miniature accessories with realistic materials and textures",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/IMG_7820.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Detail brushes", "Wash", "Miniature accessories"],
      techniques: ["Detail painting", "Material texturing", "Washing", "Highlighting"],
      dimensions: "1.5cm × 1cm × 0.5cm",
      completionTime: "1 day"
    }
  },
  {
    id: "20",
    title: "Miniature Painting - Complete Figure",
    description: "Fully painted miniature figure showcasing comprehensive painting techniques",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/IMG_7822.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Primer", "Detail brushes", "Complete miniature"],
      techniques: ["Full figure painting", "Color theory", "Detail work", "Finishing"],
      dimensions: "5cm × 2cm × 1cm",
      completionTime: "1 week"
    }
  },
  {
    id: "21",
    title: "Detailed Miniature - Final Detail",
    description: "Final detail work on miniature painting with precision highlighting and finishing touches",
    category: "Model Painting",
    imageUrl: "/portfolio/model-painting/IMG_7824.webp",
    date: "2024",
    details: {
      scale: "1:35",
      materials: ["Acrylic paint", "Fine detail brushes", "Highlight paint", "Miniature"],
      techniques: ["Final highlighting", "Detail refinement", "Quality control", "Finishing"],
      dimensions: "4cm × 2cm × 1cm",
      completionTime: "1 day"
    }
  },
  
  // Resin Crafts (樹脂工藝品)
  {
    id: "22",
    title: "Resin Decorative Piece - Geometric Design",
    description: "Handcrafted resin decorative item featuring intricate geometric patterns and color blending",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_7985.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Pigments", "Molds", "Catalyst"],
      techniques: ["Resin casting", "Color mixing", "Mold preparation", "Curing"],
      dimensions: "15cm × 10cm × 2cm",
      completionTime: "2 days"
    }
  },
  {
    id: "23",
    title: "Resin Stationery - Desk Organizer",
    description: "Functional resin desk organizer with embedded decorative elements and smooth finish",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8020.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Embedded objects", "Mold", "Catalyst"],
      techniques: ["Resin casting", "Embedding", "Mold making", "Finishing"],
      dimensions: "12cm × 8cm × 3cm",
      completionTime: "3 days"
    }
  },
  {
    id: "24",
    title: "Resin Art Piece - Abstract Design",
    description: "Abstract resin art piece with flowing colors and organic patterns",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8026.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Alcohol inks", "Canvas", "Catalyst"],
      techniques: ["Resin pouring", "Alcohol ink effects", "Swirling", "Curing"],
      dimensions: "20cm × 15cm × 0.5cm",
      completionTime: "2 days"
    }
  },
  {
    id: "25",
    title: "Resin Decoration - Marble Effect",
    description: "Resin decorative piece with realistic marble effect and smooth polished surface",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8027.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Marble powder", "Pigments", "Mold"],
      techniques: ["Marble effect", "Color mixing", "Casting", "Polishing"],
      dimensions: "18cm × 12cm × 2cm",
      completionTime: "3 days"
    }
  },
  {
    id: "26",
    title: "Resin Art - Ocean Wave Effect",
    description: "Resin art piece featuring realistic ocean wave effects with depth and movement",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8033.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Ocean pigments", "Wave effects", "Mold"],
      techniques: ["Wave effects", "Layering", "Color blending", "Curing"],
      dimensions: "25cm × 15cm × 3cm",
      completionTime: "4 days"
    }
  },
  {
    id: "27",
    title: "Resin Decoration - Crystal Effect",
    description: "Resin decorative piece with crystal-like effects and geometric facets",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8035.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Crystal pigments", "Faceted mold", "Catalyst"],
      techniques: ["Crystal effects", "Faceting", "Color layering", "Polishing"],
      dimensions: "10cm × 8cm × 4cm",
      completionTime: "3 days"
    }
  },
  {
    id: "28",
    title: "Resin Art - Galaxy Effect",
    description: "Resin art piece featuring deep space galaxy effects with stars and nebula",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8096.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Galaxy pigments", "Glitter", "Mold"],
      techniques: ["Galaxy effects", "Star placement", "Color blending", "Curing"],
      dimensions: "22cm × 16cm × 2cm",
      completionTime: "3 days"
    }
  },
  {
    id: "29",
    title: "Resin Decoration - Landscape Scene",
    description: "Resin decorative piece featuring miniature landscape scene with depth",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8098.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Landscape elements", "Pigments", "Mold"],
      techniques: ["Landscape creation", "Layering", "Depth effects", "Curing"],
      dimensions: "20cm × 12cm × 3cm",
      completionTime: "4 days"
    }
  },
  {
    id: "30",
    title: "Resin Art - Abstract Flow",
    description: "Abstract resin art with flowing organic patterns and vibrant colors",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8155.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Flow pigments", "Canvas", "Catalyst"],
      techniques: ["Flow effects", "Color mixing", "Organic patterns", "Curing"],
      dimensions: "18cm × 14cm × 0.5cm",
      completionTime: "2 days"
    }
  },
  {
    id: "31",
    title: "Resin Decoration - Geometric Pattern",
    description: "Resin decorative piece with precise geometric patterns and clean lines",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8157.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Geometric molds", "Pigments", "Catalyst"],
      techniques: ["Geometric casting", "Pattern creation", "Color separation", "Finishing"],
      dimensions: "12cm × 10cm × 2cm",
      completionTime: "2 days"
    }
  },
  {
    id: "32",
    title: "Resin Art - Color Gradient",
    description: "Resin art piece with smooth color gradients and modern aesthetic",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8159.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Gradient pigments", "Canvas", "Catalyst"],
      techniques: ["Gradient effects", "Color blending", "Smooth transitions", "Curing"],
      dimensions: "16cm × 12cm × 0.5cm",
      completionTime: "2 days"
    }
  },
  {
    id: "33",
    title: "Resin Decoration - Organic Form",
    description: "Resin decorative piece with organic flowing forms and natural textures",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8187.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Organic molds", "Natural pigments", "Catalyst"],
      techniques: ["Organic casting", "Texture creation", "Natural effects", "Finishing"],
      dimensions: "15cm × 10cm × 3cm",
      completionTime: "3 days"
    }
  },
  {
    id: "34",
    title: "Resin Art - Modern Abstract",
    description: "Modern abstract resin art with contemporary design elements",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8221.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Modern pigments", "Canvas", "Catalyst"],
      techniques: ["Abstract design", "Modern aesthetics", "Color composition", "Curing"],
      dimensions: "14cm × 11cm × 0.5cm",
      completionTime: "2 days"
    }
  },
  {
    id: "35",
    title: "Resin Decoration - Complex Pattern",
    description: "Resin decorative piece with complex intricate patterns and detailed work",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8237.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Complex molds", "Detail pigments", "Catalyst"],
      techniques: ["Complex casting", "Detail work", "Pattern precision", "Finishing"],
      dimensions: "18cm × 13cm × 2cm",
      completionTime: "4 days"
    }
  },
  {
    id: "36",
    title: "Resin Art - Minimalist Design",
    description: "Minimalist resin art piece with clean lines and subtle color variations",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8283.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Minimal pigments", "Canvas", "Catalyst"],
      techniques: ["Minimalist design", "Clean lines", "Subtle effects", "Curing"],
      dimensions: "20cm × 15cm × 0.5cm",
      completionTime: "2 days"
    }
  },
  {
    id: "37",
    title: "Resin Decoration - Small Detail",
    description: "Small detailed resin decoration with precision work and fine finish",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8308.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Detail molds", "Fine pigments", "Catalyst"],
      techniques: ["Detail casting", "Precision work", "Fine finishing", "Quality control"],
      dimensions: "8cm × 6cm × 1cm",
      completionTime: "1 day"
    }
  },
  {
    id: "38",
    title: "Resin Art - Contemporary Style",
    description: "Contemporary resin art piece with modern design and vibrant colors",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8529.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Contemporary pigments", "Canvas", "Catalyst"],
      techniques: ["Contemporary design", "Modern aesthetics", "Color vibrancy", "Curing"],
      dimensions: "22cm × 16cm × 0.5cm",
      completionTime: "3 days"
    }
  },
  {
    id: "39",
    title: "Resin Decoration - Artistic Form",
    description: "Artistic resin decoration with unique form and creative expression",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8535.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Artistic molds", "Creative pigments", "Catalyst"],
      techniques: ["Artistic casting", "Creative expression", "Form design", "Finishing"],
      dimensions: "16cm × 12cm × 3cm",
      completionTime: "3 days"
    }
  },
  {
    id: "40",
    title: "Resin Art - Dynamic Composition",
    description: "Dynamic resin art piece with energetic composition and bold colors",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8536.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Dynamic pigments", "Canvas", "Catalyst"],
      techniques: ["Dynamic composition", "Energetic design", "Bold colors", "Curing"],
      dimensions: "19cm × 14cm × 0.5cm",
      completionTime: "2 days"
    }
  },
  {
    id: "41",
    title: "Resin Decoration - Large Scale Piece",
    description: "Large scale resin decorative piece with impressive presence and detail",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8613.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Large molds", "Scale pigments", "Catalyst"],
      techniques: ["Large scale casting", "Presence creation", "Detail work", "Finishing"],
      dimensions: "30cm × 20cm × 4cm",
      completionTime: "5 days"
    }
  },
  {
    id: "42",
    title: "Resin Art - Masterpiece Detail",
    description: "Detailed view of resin art masterpiece showcasing technical excellence",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8630.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Master pigments", "Canvas", "Catalyst"],
      techniques: ["Masterpiece creation", "Technical excellence", "Detail perfection", "Curing"],
      dimensions: "25cm × 18cm × 0.5cm",
      completionTime: "4 days"
    }
  },
  {
    id: "43",
    title: "Resin Decoration - Final Showcase",
    description: "Final showcase piece representing the pinnacle of resin craft techniques",
    category: "Resin Crafts",
    imageUrl: "/portfolio/resin-crafts/IMG_8631.webp",
    date: "2024",
    details: {
      scale: "1:1",
      materials: ["Epoxy resin", "Premium pigments", "Showcase molds", "Catalyst"],
      techniques: ["Showcase creation", "Premium finish", "Technical mastery", "Presentation"],
      dimensions: "28cm × 22cm × 3cm",
      completionTime: "6 days"
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