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
        
        if (text.includes('wilson_23@hotmail.com')) {
          element.style.cursor = 'pointer';
          element.onclick = () => {
                          window.open(`mailto:wilson_23@hotmail.com?subject=CV Inquiry`, '_self');
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

      // 確保所有聯繫信息都顯示在PDF中
      const headerSection = clonedContent.querySelector('header');
      if (headerSection) {
        // 強制添加聯繫信息到PDF中
        const contactContainer = document.createElement('div');
        contactContainer.style.cssText = `
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
        `;

        const contactInfo = [
          { icon: '📞', text: '+852 9226 9702', type: 'phone' },
          { icon: '📧', text: 'wilson_23@hotmail.com', type: 'email' },
          { icon: '🌐', text: 'wilson-cv-architect.vercel.app', type: 'website' },
          { icon: '📍', text: 'Hong Kong', type: 'location' }
        ];

        contactInfo.forEach(info => {
          const contactItem = document.createElement('div');
          contactItem.style.cssText = `
            background: rgba(255,255,255,0.15);
            padding: 10px 15px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
          `;
          contactItem.innerHTML = `${info.icon} ${info.text}`;
          contactContainer.appendChild(contactItem);
        });

        // 找到標題後添加聯繫信息
        const titleElement = headerSection.querySelector('p');
        if (titleElement) {
          titleElement.parentNode?.insertBefore(contactContainer, titleElement.nextSibling);
        }
      }

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

      // 優化 Portfolio Showcase - 增加圖片信息
      const portfolioSection = clonedContent.querySelector('[class*="portfolio"]');
      if (portfolioSection) {
        const portfolioCards = portfolioSection.querySelectorAll('[class*="card"]');
        portfolioCards.forEach(card => {
          const cardElement = card as HTMLElement;
          const cardText = cardElement.textContent || '';
          
          // 為不同類型的作品集添加圖片信息
          if (cardText.includes('iOS App Development')) {
            // iOS App Development - 添加App Store圖標和應用截圖信息
            const title = cardElement.querySelector('h3');
            const description = cardElement.querySelector('p');
            
            cardElement.innerHTML = '';
            if (title) cardElement.appendChild(title.cloneNode(true));
            if (description) {
              const shortDesc = description.cloneNode(true) as HTMLElement;
              shortDesc.textContent = shortDesc.textContent?.substring(0, 100) + '...';
              cardElement.appendChild(shortDesc);
            }
            
            // 添加圖片信息
            const imageInfo = document.createElement('div');
            imageInfo.style.cssText = `
              margin-top: 10px;
              padding: 8px;
              background: #f8fafc;
              border-radius: 6px;
              font-size: 12px;
              color: #6b7280;
            `;
            imageInfo.innerHTML = `
              <strong>📱 App Screenshots:</strong> Available on App Store<br>
              <strong>🎨 UI Design:</strong> SwiftUI with Apple HIG guidelines<br>
              <strong>📊 Features:</strong> AI-powered attraction recommendations
            `;
            cardElement.appendChild(imageInfo);
            
          } else if (cardText.includes('AI/ML Development')) {
            // AI/ML Development - 添加模型架構圖信息
            const title = cardElement.querySelector('h3');
            const description = cardElement.querySelector('p');
            
            cardElement.innerHTML = '';
            if (title) cardElement.appendChild(title.cloneNode(true));
            if (description) {
              const shortDesc = description.cloneNode(true) as HTMLElement;
              shortDesc.textContent = shortDesc.textContent?.substring(0, 100) + '...';
              cardElement.appendChild(shortDesc);
            }
            
            // 添加圖片信息
            const imageInfo = document.createElement('div');
            imageInfo.style.cssText = `
              margin-top: 10px;
              padding: 8px;
              background: #f8fafc;
              border-radius: 6px;
              font-size: 12px;
              color: #6b7280;
            `;
            imageInfo.innerHTML = `
              <strong>🧠 Model Architecture:</strong> Custom LLM implementation<br>
              <strong>📈 Training Visualizations:</strong> Neural network diagrams<br>
              <strong>🔬 Research Documentation:</strong> Technical specifications
            `;
            cardElement.appendChild(imageInfo);
            
          } else if (cardText.includes('Miniature Dioramas')) {
            // Miniature Dioramas - 添加作品圖片信息
            const title = cardElement.querySelector('h3');
            const description = cardElement.querySelector('p');
            
            cardElement.innerHTML = '';
            if (title) cardElement.appendChild(title.cloneNode(true));
            if (description) {
              const shortDesc = description.cloneNode(true) as HTMLElement;
              shortDesc.textContent = shortDesc.textContent?.substring(0, 100) + '...';
              cardElement.appendChild(shortDesc);
            }
            
            // 添加圖片信息
            const imageInfo = document.createElement('div');
            imageInfo.style.cssText = `
              margin-top: 10px;
              padding: 8px;
              background: #f8fafc;
              border-radius: 6px;
              font-size: 12px;
              color: #6b7280;
            `;
            imageInfo.innerHTML = `
              <strong>🏗️ 27 Architectural Models:</strong> 1:100 scale dioramas<br>
              <strong>💡 LED Lighting:</strong> Integrated illumination systems<br>
              <strong>🎨 Detailed Interiors:</strong> Fantasy buildings & realistic scenes<br>
              <strong>📸 Portfolio Gallery:</strong> High-resolution documentation
            `;
            cardElement.appendChild(imageInfo);
            
          } else if (cardText.includes('Model Painting')) {
            // Model Painting - 添加繪畫作品圖片信息
            const title = cardElement.querySelector('h3');
            const description = cardElement.querySelector('p');
            
            cardElement.innerHTML = '';
            if (title) cardElement.appendChild(title.cloneNode(true));
            if (description) {
              const shortDesc = description.cloneNode(true) as HTMLElement;
              shortDesc.textContent = shortDesc.textContent?.substring(0, 100) + '...';
              cardElement.appendChild(shortDesc);
            }
            
            // 添加圖片信息
            const imageInfo = document.createElement('div');
            imageInfo.style.cssText = `
              margin-top: 10px;
              padding: 8px;
              background: #f8fafc;
              border-radius: 6px;
              font-size: 12px;
              color: #6b7280;
            `;
            imageInfo.innerHTML = `
              <strong>🎨 9 Detailed Paintings:</strong> 1:35 scale miniatures<br>
              <strong>🎭 Realistic Textures:</strong> Acrylic painting techniques<br>
              <strong>🌟 Special Effects:</strong> Weathering & aging effects<br>
              <strong>📷 Process Documentation:</strong> Step-by-step tutorials
            `;
            cardElement.appendChild(imageInfo);
            
          } else if (cardText.includes('Resin Craft')) {
            // Resin Craft - 添加手工藝品圖片信息
            const title = cardElement.querySelector('h3');
            const description = cardElement.querySelector('p');
            
            cardElement.innerHTML = '';
            if (title) cardElement.appendChild(title.cloneNode(true));
            if (description) {
              const shortDesc = description.cloneNode(true) as HTMLElement;
              shortDesc.textContent = shortDesc.textContent?.substring(0, 100) + '...';
              cardElement.appendChild(shortDesc);
            }
            
            // 添加圖片信息
            const imageInfo = document.createElement('div');
            imageInfo.style.cssText = `
              margin-top: 10px;
              padding: 8px;
              background: #f8fafc;
              border-radius: 6px;
              font-size: 12px;
              color: #6b7280;
            `;
            imageInfo.innerHTML = `
              <strong>✨ 27 Craft Items:</strong> Decorative & functional pieces<br>
              <strong>🌈 Geometric Patterns:</strong> Marble effects & artistic forms<br>
              <strong>💎 Crystal Effects:</strong> Epoxy resin techniques<br>
              <strong>📸 Product Photography:</strong> Professional lighting setup
            `;
            cardElement.appendChild(imageInfo);
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