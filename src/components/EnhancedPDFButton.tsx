import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import html2pdf from "html2pdf.js";

const EnhancedPDFButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateEnhancedPDF = async () => {
    setIsGenerating(true);
    
    try {
      // 獲取完整的 CV 內容
      const cvContent = document.querySelector('.min-h-screen');
      if (!cvContent) {
        throw new Error('找不到 CV 內容');
      }

      // 創建 PDF 容器
      const pdfContainer = document.createElement('div');
      pdfContainer.style.cssText = `
        background: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #1f2937;
        max-width: 210mm;
        margin: 0 auto;
        padding: 0;
      `;

      // 複製原始內容並優化
      const clonedContent = cvContent.cloneNode(true) as HTMLElement;
      
      // 移除 PDF 按鈕
      const pdfButton = clonedContent.querySelector('button');
      if (pdfButton) {
        pdfButton.remove();
      }

      // 優化樣式
      clonedContent.style.cssText = `
        background: white !important;
        color: #1f2937 !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        line-height: 1.6 !important;
        margin: 0 !important;
        padding: 20px !important;
      `;

      // 確保所有文字顏色正確
      const allElements = clonedContent.querySelectorAll('*');
      allElements.forEach(el => {
        const element = el as HTMLElement;
        element.style.color = '#1f2937';
        element.style.background = element.style.background.includes('gradient') ? '#f8fafc' : element.style.background;
      });

      // 修復聯繫信息的點擊功能
      const contactItems = clonedContent.querySelectorAll('[class*="contact"], [class*="bg-gradient"], [class*="rounded"]');
      contactItems.forEach(item => {
        const element = item as HTMLElement;
        const text = element.textContent || '';
        
        if (text.includes('monsterbb100@gmail.com')) {
          element.style.cursor = 'pointer';
          element.onclick = () => {
            window.open(`mailto:monsterbb100@gmail.com?subject=CV Inquiry`, '_self');
          };
        } else if (text.includes('wilson-cv-architect.vercel.app')) {
          element.style.cursor = 'pointer';
          element.onclick = () => {
            window.open('https://wilson-cv-architect.vercel.app', '_blank');
          };
        } else {
          // 電話和位置 - 移除點擊功能
          element.style.cursor = 'default';
          element.onclick = null;
          element.removeAttribute('onclick');
        }
      });

      // 移除無用的按鈕
      const buttons = clonedContent.querySelectorAll('button, a[href*="portfolio"], a[href*="app-store"], a[href*="homework7"]');
      buttons.forEach(button => {
        button.remove();
      });

      // 修復 Core Skills 排版
      const skillsSection = clonedContent.querySelector('[class*="skills"]');
      if (skillsSection) {
        const skillsGrid = skillsSection.querySelector('.grid');
        if (skillsGrid) {
          (skillsGrid as HTMLElement).style.cssText = `
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 20px !important;
            margin: 20px 0 !important;
          `;
        }
      }

      // 修復標題和內容分頁問題
      const sections = clonedContent.querySelectorAll('section');
      sections.forEach(section => {
        (section as HTMLElement).style.cssText = `
          page-break-inside: avoid !important;
          margin-bottom: 30px !important;
        `;
      });

      // 移除 Portfolio Showcase 的無用內容
      const portfolioSection = clonedContent.querySelector('[class*="portfolio"]');
      if (portfolioSection) {
        const portfolioCards = portfolioSection.querySelectorAll('[class*="card"]');
        portfolioCards.forEach(card => {
          const cardElement = card as HTMLElement;
          const cardText = cardElement.textContent || '';
          
          // 保留標題，移除詳細內容
          if (cardText.includes('iOS App Development') || 
              cardText.includes('AI/ML Development') || 
              cardText.includes('Miniature Dioramas') || 
              cardText.includes('Model Painting') || 
              cardText.includes('Resin Craft')) {
            
            // 只保留標題和簡短描述
            const title = cardElement.querySelector('h3');
            const description = cardElement.querySelector('p');
            
            cardElement.innerHTML = '';
            if (title) cardElement.appendChild(title.cloneNode(true));
            if (description) {
              const shortDesc = description.cloneNode(true) as HTMLElement;
              shortDesc.textContent = shortDesc.textContent?.substring(0, 100) + '...';
              cardElement.appendChild(shortDesc);
            }
          }
        });
      }

      pdfContainer.appendChild(clonedContent);
      document.body.appendChild(pdfContainer);

      // 使用 html2pdf.js 生成 PDF
      const pdfOptions = {
        margin: [15, 15, 15, 15],
        filename: 'Wilson_Ho_Professional_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 3,
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

      await html2pdf().from(pdfContainer).set(pdfOptions).save();
      
      // 清理
      document.body.removeChild(pdfContainer);
      
      toast({
        title: "CV PDF 生成成功！",
        description: "你的完整 CV 已成功下載為 PDF 檔案。",
        variant: "default",
      });
      
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: "PDF 生成失敗",
        description: "生成 PDF 時發生錯誤，請稍後再試。",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={generateEnhancedPDF}
      disabled={isGenerating}
      className="fixed top-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-white group rounded-full px-5 py-2"
      size="sm"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span className="font-medium text-sm">生成專業 PDF...</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium text-sm">下載 CV PDF</span>
        </>
      )}
    </Button>
  );
};

export default EnhancedPDFButton; 