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

    // 處理作品內容
    const portfolioGrid = originalContent.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.xl\\:grid-cols-4');
    if (portfolioGrid) {
      const enhancedGrid = portfolioGrid.cloneNode(true) as HTMLElement;
      enhancedGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        padding: 0 20px;
      `;

      // 優化每個作品卡片
      const cards = enhancedGrid.querySelectorAll('.overflow-hidden.hover\\:shadow-xl');
      cards.forEach((card, index) => {
        const enhancedCard = card as HTMLElement;
        enhancedCard.style.cssText = `
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          page-break-inside: avoid;
          margin-bottom: 30px;
          ${index % 4 === 0 ? 'page-break-before: always;' : ''}
        `;

        // 優化圖片
        const image = enhancedCard.querySelector('img');
        if (image) {
          (image as HTMLElement).style.cssText = `
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 12px 12px 0 0;
          `;
        }

        // 優化內容區域
        const content = enhancedCard.querySelector('.pb-3');
        if (content) {
          (content as HTMLElement).style.cssText = `
            padding: 20px;
          `;
        }

        // 優化標題
        const title = enhancedCard.querySelector('.text-lg.font-semibold');
        if (title) {
          (title as HTMLElement).style.cssText = `
            font-size: 18px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 10px;
            line-height: 1.3;
          `;
        }

        // 優化描述
        const description = enhancedCard.querySelector('.text-gray-600.leading-relaxed');
        if (description) {
          (description as HTMLElement).style.cssText = `
            font-size: 14px;
            color: #6b7280;
            line-height: 1.5;
            margin-bottom: 15px;
          `;
        }

        // 優化技術細節
        const details = enhancedCard.querySelector('.space-y-2.pt-2');
        if (details) {
          (details as HTMLElement).style.cssText = `
            padding-top: 15px;
            border-top: 1px solid #f3f4f6;
            margin-top: 15px;
          `;
        }
      });

      enhancedDiv.appendChild(enhancedGrid);
    }

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
          <span className="font-medium text-sm">下載專業 Portfolio PDF</span>
        </>
      )}
    </Button>
  );
};

export default EnhancedPortfolioPDFButton; 