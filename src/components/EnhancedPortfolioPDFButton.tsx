import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import html2pdf from "html2pdf.js";

const EnhancedPortfolioPDFButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateEnhancedPortfolioPDF = async () => {
    setIsGenerating(true);
    
    try {
      // 創建專業的 Portfolio PDF 容器
      const pdfContainer = document.createElement('div');
      pdfContainer.className = 'enhanced-portfolio-pdf';
      pdfContainer.style.cssText = `
        background: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #1f2937;
        max-width: 210mm;
        margin: 0 auto;
        padding: 0;
        page-break-inside: avoid;
      `;

      // 獲取 Portfolio 內容
      const portfolioContent = document.querySelector('.min-h-screen.bg-gradient-to-br');
      if (!portfolioContent) {
        throw new Error('Portfolio content not found');
      }

      // 創建專業的 Portfolio PDF 結構
      const enhancedContent = createEnhancedPortfolioStructure(portfolioContent.cloneNode(true) as HTMLElement);
      pdfContainer.appendChild(enhancedContent);
      document.body.appendChild(pdfContainer);

      // 高品質 PDF 配置
      const pdfOptions = {
        margin: [15, 15, 15, 15],
        filename: 'Wilson_Ho_Professional_Portfolio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 3, // 更高解析度
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after',
          avoid: '.page-break-avoid'
        }
      };

      // 生成 PDF
      await html2pdf().from(pdfContainer).set(pdfOptions).save();
      
      // 清理
      document.body.removeChild(pdfContainer);
      
      toast({
        title: "專業 Portfolio PDF 生成成功！",
        description: "你的精美作品集已成功下載為 PDF 檔案。",
        variant: "default",
      });
      
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: "PDF 生成失敗",
        description: "生成 Portfolio PDF 時發生錯誤，請稍後再試。",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const createEnhancedPortfolioStructure = (originalContent: HTMLElement) => {
    const enhancedDiv = document.createElement('div');

    // 創建專業的 Portfolio 標題頁
    const titlePage = document.createElement('div');
    titlePage.style.cssText = `
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 60px 40px;
      margin-bottom: 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
      page-break-after: always;
    `;

    // 添加背景裝飾
    const bgDecoration = document.createElement('div');
    bgDecoration.style.cssText = `
      position: absolute;
      top: -50px;
      right: -50px;
      width: 300px;
      height: 300px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
    `;
    titlePage.appendChild(bgDecoration);

    const title = document.createElement('h1');
    title.textContent = 'Professional Portfolio';
    title.style.cssText = `
      font-size: 48px;
      font-weight: 700;
      margin: 0 0 20px 0;
      letter-spacing: -2px;
      text-shadow: 0 4px 8px rgba(0,0,0,0.2);
      position: relative;
      z-index: 1;
    `;

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'Ho Wai Shun Wilson';
    subtitle.style.cssText = `
      font-size: 28px;
      font-weight: 300;
      margin: 0 0 10px 0;
      opacity: 0.9;
      position: relative;
      z-index: 1;
    `;

    const description = document.createElement('p');
    description.textContent = 'Scale Miniature Diorama Construction & Technical Craftsmanship';
    description.style.cssText = `
      font-size: 18px;
      font-weight: 400;
      margin: 0 0 40px 0;
      opacity: 0.8;
      position: relative;
      z-index: 1;
    `;

    // 創建作品統計
    const statsGrid = document.createElement('div');
    statsGrid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-top: 40px;
      position: relative;
      z-index: 1;
    `;

    const stats = [
      { category: 'Miniature Dioramas', count: '27', scale: '1:100' },
      { category: 'Model Painting', count: '9', scale: '1:35' },
      { category: 'Resin Crafts', count: '22', scale: '1:1' }
    ];

    stats.forEach(stat => {
      const statCard = document.createElement('div');
      statCard.style.cssText = `
        background: rgba(255,255,255,0.15);
        padding: 25px;
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
      `;

      const count = document.createElement('div');
      count.textContent = stat.count;
      count.style.cssText = `
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 5px;
      `;

      const category = document.createElement('div');
      category.textContent = stat.category;
      category.style.cssText = `
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        opacity: 0.9;
        margin-bottom: 5px;
      `;

      const scale = document.createElement('div');
      scale.textContent = stat.scale;
      scale.style.cssText = `
        font-size: 12px;
        opacity: 0.7;
      `;

      statCard.appendChild(count);
      statCard.appendChild(category);
      statCard.appendChild(scale);
      statsGrid.appendChild(statCard);
    });

    titlePage.appendChild(title);
    titlePage.appendChild(subtitle);
    titlePage.appendChild(description);
    titlePage.appendChild(statsGrid);
    enhancedDiv.appendChild(titlePage);

    // 處理作品內容 - 包含所有作品數據
    const portfolioItems = [
      // iOS App Development
      {
        id: "ios-1",
        title: "Attraction Finder",
        description: "AI-powered travel companion app that provides intelligent attraction search and personalized travel recommendations using advanced artificial intelligence technology",
        category: "iOS Development",
        imageUrl: "/portfolio/ios-apps/attraction-finder.svg",
        date: "2025",
        icon: "📱",
        details: {
          scale: "Native iOS",
          materials: ["SwiftUI", "Apple HIG", "MVVM Architecture", "AI Integration"],
          techniques: ["Native iOS Development", "Apple Human Interface Guidelines", "AI Content Generation", "App Store Publishing"],
          dimensions: "iPhone & Mac Compatible",
          completionTime: "3 months"
        }
      },
      // AI/ML Development
      {
        id: "ai-1",
        title: "Custom LLM Project",
        description: "Self-built Large Language Model implementation demonstrating deep understanding of AI architecture, natural language processing, and machine learning principles",
        category: "AI/ML Development",
        imageUrl: "/portfolio/ai-ml/custom-llm.svg",
        date: "2024",
        icon: "🤖",
        details: {
          scale: "Full Stack AI",
          materials: ["Python", "TensorFlow/PyTorch", "NLP Libraries", "Cloud Infrastructure"],
          techniques: ["Neural Network Architecture", "Transformer Models", "Natural Language Processing", "Model Training & Optimization"],
          dimensions: "Web Application",
          completionTime: "4 months"
        }
      },
      // Miniature Dioramas - 添加代表性作品
      {
        id: "diorama-1",
        title: "Fantasy Hobbit House",
        description: "Multi-level miniature dwelling with moss-covered thatched roofs, featuring warm interior lighting and intricate architectural details",
        category: "Miniature Dioramas",
        imageUrl: "/portfolio/miniature-dioramas/fantasy-hobbit-house-1.webp",
        date: "2024",
        icon: "🏠",
        details: {
          scale: "1:100",
          materials: ["Basswood", "Moss", "LED lights", "Acrylic paint"],
          techniques: ["Laser cutting", "Hand painting", "Weathering", "Lighting installation"],
          dimensions: "30cm × 25cm × 20cm",
          completionTime: "3 weeks"
        }
      },
      {
        id: "diorama-2",
        title: "Waterfront Workshop",
        description: "Detailed waterfront scene with flowing water effects, featuring a traditional workshop building and natural landscaping",
        category: "Miniature Dioramas",
        imageUrl: "/portfolio/miniature-dioramas/waterfront-workshop-1.webp",
        date: "2024",
        icon: "🌊",
        details: {
          scale: "1:100",
          materials: ["Basswood", "Resin water", "Moss", "Acrylic paint"],
          techniques: ["Water effects", "Flow design", "Natural texturing", "Landscaping"],
          dimensions: "25cm × 20cm × 15cm",
          completionTime: "3 weeks"
        }
      },
      // Model Painting - 添加代表性作品
      {
        id: "painting-1",
        title: "WWII Tank Model",
        description: "Highly detailed 1:35 scale military vehicle with realistic weathering, camouflage patterns, and battle damage effects",
        category: "Model Painting",
        imageUrl: "/portfolio/model-painting/wwii-tank-1.webp",
        date: "2024",
        icon: "🎨",
        details: {
          scale: "1:35",
          materials: ["Plastic model kit", "Acrylic paints", "Weathering powders", "Decals"],
          techniques: ["Airbrushing", "Weathering", "Camouflage", "Battle damage"],
          dimensions: "15cm × 8cm × 6cm",
          completionTime: "2 weeks"
        }
      },
      // Resin Crafts - 添加代表性作品
      {
        id: "resin-1",
        title: "Geometric Resin Art",
        description: "Modern decorative pieces featuring geometric patterns, marble effects, and artistic color combinations",
        category: "Resin Crafts",
        imageUrl: "/portfolio/resin-crafts/geometric-resin-1.webp",
        date: "2024",
        icon: "💎",
        details: {
          scale: "1:1",
          materials: ["Epoxy resin", "Pigments", "Molds", "UV light"],
          techniques: ["Layering", "Color mixing", "Curing", "Polishing"],
          dimensions: "20cm × 15cm × 3cm",
          completionTime: "1 week"
        }
      }
    ];

    // 創建作品展示區域
    const portfolioSection = document.createElement('div');
    portfolioSection.style.cssText = `
      padding: 0 40px;
      margin-bottom: 40px;
    `;

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'Featured Works';
    sectionTitle.style.cssText = `
      font-size: 32px;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 30px 0;
      padding-bottom: 15px;
      border-bottom: 4px solid #667eea;
    `;
    portfolioSection.appendChild(sectionTitle);

    // 創建作品網格
    const portfolioGrid = document.createElement('div');
    portfolioGrid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    `;

    portfolioItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.style.cssText = `
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        page-break-inside: avoid;
        margin-bottom: 30px;
        ${index % 4 === 0 ? 'page-break-before: always;' : ''}
      `;

      // 創建圖片區域
      const imageContainer = document.createElement('div');
      imageContainer.style.cssText = `
        width: 100%;
        height: 180px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 12px 12px 0 0;
      `;

      const imagePlaceholder = document.createElement('div');
      imagePlaceholder.style.cssText = `
        width: 70px;
        height: 70px;
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: white;
        font-weight: bold;
      `;
      imagePlaceholder.textContent = item.icon;
      imageContainer.appendChild(imagePlaceholder);

      // 創建內容區域
      const contentContainer = document.createElement('div');
      contentContainer.style.cssText = `
        padding: 25px;
      `;

      const title = document.createElement('h3');
      title.textContent = item.title;
      title.style.cssText = `
        font-size: 20px;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 10px;
        line-height: 1.3;
      `;

      const description = document.createElement('p');
      description.textContent = item.description;
      description.style.cssText = `
        font-size: 14px;
        color: #6b7280;
        line-height: 1.5;
        margin-bottom: 15px;
      `;

      const category = document.createElement('div');
      category.textContent = item.category;
      category.style.cssText = `
        font-size: 12px;
        font-weight: 600;
        color: #667eea;
        text-transform: uppercase;
        margin-bottom: 10px;
      `;

      const details = document.createElement('div');
      details.style.cssText = `
        padding-top: 15px;
        border-top: 1px solid #f3f4f6;
        margin-top: 15px;
      `;

      const scale = document.createElement('div');
      scale.textContent = `Scale: ${item.details.scale}`;
      scale.style.cssText = `
        font-size: 12px;
        color: #6b7280;
        margin-bottom: 5px;
      `;

      const time = document.createElement('div');
      time.textContent = `Completion: ${item.details.completionTime}`;
      time.style.cssText = `
        font-size: 12px;
        color: #6b7280;
      `;

      details.appendChild(scale);
      details.appendChild(time);

      contentContainer.appendChild(title);
      contentContainer.appendChild(description);
      contentContainer.appendChild(category);
      contentContainer.appendChild(details);

      card.appendChild(imageContainer);
      card.appendChild(contentContainer);
      portfolioGrid.appendChild(card);
    });

    portfolioSection.appendChild(portfolioGrid);
    enhancedDiv.appendChild(portfolioSection);

    return enhancedDiv;
  };

  return (
    <Button
      onClick={generateEnhancedPortfolioPDF}
      disabled={isGenerating}
      className="fixed top-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-white group rounded-full px-5 py-2"
      size="sm"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span className="font-medium text-sm">生成專業 Portfolio...</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium text-sm">下載 Portfolio PDF</span>
        </>
      )}
    </Button>
  );
};

export default EnhancedPortfolioPDFButton; 