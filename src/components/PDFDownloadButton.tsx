import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import html2pdf from "html2pdf.js";

const PDFDownloadButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // 獲取 CV 內容區域
      const cvContent = document.querySelector('.min-h-screen.bg-gradient-subtle');
      
      if (!cvContent) {
        throw new Error('CV content not found');
      }

      // 創建一個臨時的容器來優化 PDF 輸出
      const tempContainer = document.createElement('div');
      tempContainer.className = 'cv-pdf-container';
      tempContainer.style.cssText = `
        background: white;
        padding: 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
        color: #1f2937;
      `;
      
      // 複製 CV 內容
      const clonedContent = cvContent.cloneNode(true) as HTMLElement;
      
      // 移除不需要的元素（如按鈕、互動元素等）
      const elementsToRemove = clonedContent.querySelectorAll('button, .hover\\:shadow-xl, .transition-all, .cursor-pointer');
      elementsToRemove.forEach(el => el.remove());
      
      // 調整樣式以適應 PDF
      const allElements = clonedContent.querySelectorAll('*');
      allElements.forEach(el => {
        const element = el as HTMLElement;
        // 移除 hover 效果和動畫
        element.style.transition = 'none';
        element.style.transform = 'none';
        element.style.animation = 'none';
        
        // 確保文字顏色在 PDF 中清晰可見
        const computedStyle = getComputedStyle(element);
        if (computedStyle.color.includes('rgb(156, 163, 175)') || computedStyle.color.includes('rgb(107, 114, 128)')) {
          element.style.color = '#374151';
        }
        
        // 優化背景色
        if (computedStyle.backgroundColor.includes('rgba(0, 0, 0, 0.05)') || computedStyle.backgroundColor.includes('rgba(0, 0, 0, 0.1)')) {
          element.style.backgroundColor = '#f9fafb';
        }
      });
      
      tempContainer.appendChild(clonedContent);
      document.body.appendChild(tempContainer);

      // PDF 配置選項
      const pdfOptions = {
        margin: [10, 10, 10, 10],
        filename: 'Wilson_Ho_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' 
        }
      };

      // 生成 PDF
      await html2pdf().from(tempContainer).set(pdfOptions).save();
      
      // 清理臨時元素
      document.body.removeChild(tempContainer);
      
      toast({
        title: "PDF 生成成功！",
        description: "你的 CV 已成功下載為 PDF 檔案。",
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
      onClick={generatePDF}
      disabled={isGenerating}
      className="fixed top-6 right-6 z-50 bg-white/95 backdrop-blur-xl border border-gray-200/50 hover:border-gray-300 hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-300 text-gray-700 hover:text-gray-900 group rounded-full px-4 py-2"
      size="sm"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span className="font-medium text-sm">生成中...</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium text-sm">下載 PDF</span>
        </>
      )}
    </Button>
  );
};

export default PDFDownloadButton; 