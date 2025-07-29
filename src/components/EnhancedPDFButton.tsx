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
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 30px;
      margin-bottom: 30px;
      border-radius: 0;
      position: relative;
      overflow: hidden;
    `;

    // 添加背景裝飾
    const bgDecoration = document.createElement('div');
    bgDecoration.style.cssText = `
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      height: 200px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
      transform: translate(50%, -50%);
    `;
    enhancedDiv.appendChild(bgDecoration);

    // 創建專業的標題區域
    const titleSection = document.createElement('div');
    titleSection.style.cssText = `
      text-align: center;
      position: relative;
      z-index: 1;
    `;

    const name = document.createElement('h1');
    name.textContent = 'Ho Wai Shun Wilson';
    name.style.cssText = `
      font-size: 48px;
      font-weight: 700;
      margin: 0 0 10px 0;
      letter-spacing: -1px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `;

    const title = document.createElement('h2');
    title.textContent = 'ERP Solutions Architect';
    title.style.cssText = `
      font-size: 24px;
      font-weight: 300;
      margin: 0 0 30px 0;
      opacity: 0.9;
    `;

    // 創建聯繫信息網格
    const contactGrid = document.createElement('div');
    contactGrid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    `;

    const contactInfo = [
      { label: 'Phone', value: '+852 9226 9702' },
      { label: 'Email', value: 'monsterbb100@gmail.com' },
      { label: 'Location', value: 'Hong Kong' },
      { label: 'Website', value: 'wilson-cv-architect.vercel.app' }
    ];

    contactInfo.forEach(info => {
      const contactItem = document.createElement('div');
      contactItem.style.cssText = `
        background: rgba(255,255,255,0.1);
        padding: 15px;
        border-radius: 8px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
      `;

      const label = document.createElement('div');
      label.textContent = info.label;
      label.style.cssText = `
        font-size: 12px;
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

    titleSection.appendChild(name);
    titleSection.appendChild(title);
    titleSection.appendChild(contactGrid);
    enhancedDiv.appendChild(titleSection);

    // 處理原始內容
    const contentSections = originalContent.querySelectorAll('section');
    contentSections.forEach((section, index) => {
      const enhancedSection = document.createElement('div');
      enhancedSection.style.cssText = `
        margin-bottom: 40px;
        page-break-inside: avoid;
        ${index > 0 ? 'page-break-before: auto;' : ''}
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
          padding-bottom: 10px;
          border-bottom: 3px solid #667eea;
          position: relative;
        `;
        enhancedSection.appendChild(title);
      }

      // 處理內容
      const content = section.querySelector('.space-y-6');
      if (content) {
        const enhancedContent = content.cloneNode(true) as HTMLElement;
        
        // 優化卡片樣式
        const cards = enhancedContent.querySelectorAll('.shadow-soft');
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
        const skillGrids = enhancedContent.querySelectorAll('.grid');
        skillGrids.forEach(grid => {
          (grid as HTMLElement).style.cssText = `
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
          `;
        });

        enhancedSection.appendChild(enhancedContent);
      }

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
          <span className="font-medium text-sm">下載專業 CV PDF</span>
        </>
      )}
    </Button>
  );
};

export default EnhancedPDFButton; 