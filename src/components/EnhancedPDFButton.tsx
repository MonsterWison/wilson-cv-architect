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
      // 創建專業的 PDF 容器
      const pdfContainer = document.createElement('div');
      pdfContainer.className = 'enhanced-cv-pdf';
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

      // 獲取 CV 內容
      const cvContent = document.querySelector('.min-h-screen.bg-gradient-subtle');
      if (!cvContent) {
        throw new Error('CV content not found');
      }

      // 創建專業的 PDF 結構
      const enhancedContent = createEnhancedPDFStructure(cvContent.cloneNode(true) as HTMLElement);
      pdfContainer.appendChild(enhancedContent);
      document.body.appendChild(pdfContainer);

      // 高品質 PDF 配置
      const pdfOptions = {
        margin: [15, 15, 15, 15],
        filename: 'Wilson_Ho_Professional_CV.pdf',
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
        title: "專業 CV PDF 生成成功！",
        description: "你的精美 CV 已成功下載為 PDF 檔案。",
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

  const createEnhancedPDFStructure = (originalContent: HTMLElement) => {
    const enhancedDiv = document.createElement('div');
    enhancedDiv.style.cssText = `
      background: white;
      color: #1f2937;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      max-width: 210mm;
      margin: 0 auto;
      padding: 0;
    `;

    // 創建專業的標題頁 - 包含所有內容，避免空白頁
    const headerSection = document.createElement('div');
    headerSection.style.cssText = `
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px;
      margin-bottom: 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
      page-break-after: avoid;
    `;

    // 添加背景裝飾
    const bgDecoration = document.createElement('div');
    bgDecoration.style.cssText = `
      position: absolute;
      top: -50px;
      right: -50px;
      width: 200px;
      height: 200px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
    `;
    headerSection.appendChild(bgDecoration);

    const name = document.createElement('h1');
    name.textContent = 'Ho Wai Shun Wilson';
    name.style.cssText = `
      font-size: 42px;
      font-weight: 700;
      margin: 0 0 10px 0;
      letter-spacing: -1px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: relative;
      z-index: 1;
    `;

    const title = document.createElement('h2');
    title.textContent = 'ERP Solutions Architect';
    title.style.cssText = `
      font-size: 20px;
      font-weight: 300;
      margin: 0 0 25px 0;
      opacity: 0.9;
      position: relative;
      z-index: 1;
    `;

    // 創建可點擊的聯繫信息
    const contactGrid = document.createElement('div');
    contactGrid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      max-width: 500px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    `;

    const contactInfo = [
      { label: 'Phone', value: '+852 9226 9702', type: 'tel' },
      { label: 'Email', value: 'monsterbb100@gmail.com', type: 'mailto' },
      { label: 'Location', value: 'Hong Kong', type: 'text' },
      { label: 'Website', value: 'wilson-cv-architect.vercel.app', type: 'url' }
    ];

    contactInfo.forEach(info => {
      const contactItem = document.createElement('div');
      contactItem.style.cssText = `
        background: rgba(255,255,255,0.15);
        padding: 15px;
        border-radius: 10px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
        cursor: pointer;
        transition: all 0.3s ease;
      `;

      // 添加點擊事件
      if (info.type === 'tel') {
        contactItem.onclick = () => window.open(`tel:${info.value}`, '_self');
      } else if (info.type === 'mailto') {
        contactItem.onclick = () => window.open(`mailto:${info.value}?subject=CV Inquiry`, '_self');
      } else if (info.type === 'url') {
        contactItem.onclick = () => window.open(`https://${info.value}`, '_blank');
      }

      const label = document.createElement('div');
      label.textContent = info.label;
      label.style.cssText = `
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        opacity: 0.8;
        margin-bottom: 5px;
      `;

      const value = document.createElement('div');
      value.textContent = info.value;
      value.style.cssText = `
        font-size: 14px;
        font-weight: 500;
      `;

      contactItem.appendChild(label);
      contactItem.appendChild(value);
      contactGrid.appendChild(contactItem);
    });

    headerSection.appendChild(name);
    headerSection.appendChild(title);
    headerSection.appendChild(contactGrid);
    enhancedDiv.appendChild(headerSection);

    // 處理原始內容 - 確保內容正確提取
    const sections = originalContent.querySelectorAll('section');
    sections.forEach((section, index) => {
      const enhancedSection = document.createElement('div');
      enhancedSection.style.cssText = `
        margin-bottom: 30px;
        padding: 0 40px;
        page-break-inside: avoid;
      `;

      // 獲取標題
      const sectionTitle = section.querySelector('h2');
      if (sectionTitle) {
        const title = document.createElement('h2');
        title.textContent = sectionTitle.textContent;
        title.style.cssText = `
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 25px 0;
          padding-bottom: 12px;
          border-bottom: 3px solid #667eea;
          position: relative;
        `;
        enhancedSection.appendChild(title);
      }

      // 處理內容 - 直接複製整個 section 內容
      const sectionContent = section.cloneNode(true) as HTMLElement;
      
      // 移除原始標題，避免重複
      const originalTitle = sectionContent.querySelector('h2');
      if (originalTitle) {
        originalTitle.remove();
      }

      // 移除 PDF 按鈕，避免在 PDF 中顯示
      const pdfButtons = sectionContent.querySelectorAll('button');
      pdfButtons.forEach(button => {
        if (button.textContent?.includes('PDF')) {
          button.remove();
        }
      });

      // 優化樣式
      const cards = sectionContent.querySelectorAll('.shadow-soft, .border-l-4, .bg-gradient-to-r');
      cards.forEach(card => {
        (card as HTMLElement).style.cssText = `
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          page-break-inside: avoid;
        `;
      });

      // 優化技能網格
      const skillGrids = sectionContent.querySelectorAll('.grid');
      skillGrids.forEach(grid => {
        (grid as HTMLElement).style.cssText = `
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin: 20px 0;
        `;
      });

      // 優化文字顏色和背景
      const allTextElements = sectionContent.querySelectorAll('*');
      allTextElements.forEach(el => {
        const element = el as HTMLElement;
        const computedStyle = getComputedStyle(element);
        
        // 修復文字顏色
        if (computedStyle.color.includes('rgb(156, 163, 175)') || computedStyle.color.includes('rgb(107, 114, 128)')) {
          element.style.color = '#374151';
        }
        
        // 移除漸變背景，使用純色
        if (computedStyle.background.includes('gradient')) {
          element.style.background = '#f8fafc';
        }
      });

      enhancedSection.appendChild(sectionContent);
      enhancedDiv.appendChild(enhancedSection);
    });

    return enhancedDiv;
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