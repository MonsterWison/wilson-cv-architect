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
      // 創建完整的PDF內容
      const pdfContainer = createCompletePDFContent();
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

  const createCompletePDFContent = () => {
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

    // 1. 標題頁 - 包含完整的聯繫信息
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

    // 背景裝飾
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

    // 完整的聯繫信息網格
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
      { label: 'Phone', value: '+852 9226 9702', type: 'text' },
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
        transition: all 0.3s ease;
      `;

      // 設置點擊功能
      if (info.type === 'mailto') {
        contactItem.style.cursor = 'pointer';
        contactItem.onclick = () => {
          window.open(`mailto:${info.value}?subject=CV Inquiry`, '_self');
        };
      } else if (info.type === 'url') {
        contactItem.style.cursor = 'pointer';
        contactItem.onclick = () => {
          window.open(`https://${info.value}`, '_blank');
        };
      } else {
        contactItem.style.cursor = 'default';
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
    pdfContainer.appendChild(headerSection);

    // 2. 專業摘要
    const summarySection = document.createElement('div');
    summarySection.style.cssText = `
      margin-bottom: 30px;
      padding: 0 40px;
      page-break-inside: avoid;
    `;

    const summaryTitle = document.createElement('h2');
    summaryTitle.textContent = 'Professional Summary';
    summaryTitle.style.cssText = `
      font-size: 28px;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 25px 0;
      padding-bottom: 12px;
      border-bottom: 3px solid #667eea;
      position: relative;
    `;

    const summaryContent = document.createElement('div');
    summaryContent.style.cssText = `
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      page-break-inside: avoid;
    `;

    const summaryText = document.createElement('p');
    summaryText.textContent = 'ERP Solutions Architect with 28+ years in technology implementation. Core expertise in custom module development and client-facing technical support for inventory/accounting systems. Proven track record in end-to-end solution design and critical issue resolution.';
    summaryText.style.cssText = `
      font-size: 16px;
      line-height: 1.6;
      color: #374151;
      text-align: center;
      margin: 0;
    `;

    summaryContent.appendChild(summaryText);
    summarySection.appendChild(summaryTitle);
    summarySection.appendChild(summaryContent);
    pdfContainer.appendChild(summarySection);

    // 3. 核心技能 - 正確排版
    const skillsSection = document.createElement('div');
    skillsSection.style.cssText = `
      margin-bottom: 30px;
      padding: 0 40px;
      page-break-inside: avoid;
    `;

    const skillsTitle = document.createElement('h2');
    skillsTitle.textContent = 'Core Skills';
    skillsTitle.style.cssText = `
      font-size: 28px;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 25px 0;
      padding-bottom: 12px;
      border-bottom: 3px solid #667eea;
      position: relative;
    `;

    const skillsGrid = document.createElement('div');
    skillsGrid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    `;

    const skillCategories = [
      {
        title: "Systems",
        skills: ["Cloud ERP Migration", "Firewall Configuration", "Server Maintenance (20+ units)", "Docker"]
      },
      {
        title: "Development",
        skills: ["Python", "Generative AI", "MS SQL", "N8N", "Langfuse", "Cursor", "XCode", "DeepSeek", "OpenRouter AI", "ERP Module Customization"]
      },
      {
        title: "AI/ML Development",
        skills: ["Large Language Models", "Neural Networks", "Natural Language Processing", "TensorFlow/PyTorch", "Model Training", "AI Architecture Design"]
      },
      {
        title: "Mobile Development",
        skills: ["SwiftUI", "iOS Development", "Apple HIG", "MVVM Architecture", "AI Integration", "App Store Publishing"]
      },
      {
        title: "Hardware",
        skills: ["IoT Device Installation", "Access Control Systems", "Facility Modifications"]
      }
    ];

    skillCategories.forEach(category => {
      const categoryCard = document.createElement('div');
      categoryCard.style.cssText = `
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      `;

      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = category.title;
      categoryTitle.style.cssText = `
        font-size: 18px;
        font-weight: 600;
        color: #1f2937;
        margin: 0 0 15px 0;
        padding-bottom: 8px;
        border-bottom: 2px solid #667eea;
      `;

      const skillsList = document.createElement('div');
      skillsList.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      `;

      category.skills.forEach(skill => {
        const skillBadge = document.createElement('span');
        skillBadge.textContent = skill;
        skillBadge.style.cssText = `
          background: #f3f4f6;
          color: #374151;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid #d1d5db;
        `;
        skillsList.appendChild(skillBadge);
      });

      categoryCard.appendChild(categoryTitle);
      categoryCard.appendChild(skillsList);
      skillsGrid.appendChild(categoryCard);
    });

    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(skillsGrid);
    pdfContainer.appendChild(skillsSection);

    // 4. 專業經驗 - 整合Information System Manager
    const experienceSection = document.createElement('div');
    experienceSection.style.cssText = `
      margin-bottom: 30px;
      padding: 0 40px;
      page-break-inside: avoid;
    `;

    const experienceTitle = document.createElement('h2');
    experienceTitle.textContent = 'Professional Experience';
    experienceTitle.style.cssText = `
      font-size: 28px;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 25px 0;
      padding-bottom: 12px;
      border-bottom: 3px solid #667eea;
      position: relative;
    `;

    const experienceCard = document.createElement('div');
    experienceCard.style.cssText = `
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      page-break-inside: avoid;
    `;

    // 職位標題和公司信息
    const positionHeader = document.createElement('div');
    positionHeader.style.cssText = `
      margin-bottom: 25px;
    `;

    const positionTitle = document.createElement('div');
    positionTitle.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 8px;
    `;

    const positionText = document.createElement('h3');
    positionText.textContent = 'Information System Manager';
    positionText.style.cssText = `
      font-size: 24px;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    `;

    const currentBadge = document.createElement('span');
    currentBadge.textContent = 'Current';
    currentBadge.style.cssText = `
      background: #dcfce7;
      color: #166534;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
    `;

    const companyName = document.createElement('p');
    companyName.textContent = 'Epoch-Tech Computer System Co., Ltd.';
    companyName.style.cssText = `
      font-size: 18px;
      font-weight: 600;
      color: #667eea;
      margin: 0 0 8px 0;
    `;

    const durationLocation = document.createElement('div');
    durationLocation.style.cssText = `
      display: flex;
      gap: 20px;
      color: #6b7280;
      font-size: 14px;
    `;

    const duration = document.createElement('span');
    duration.textContent = '2009 – Present';
    duration.style.cssText = `
      display: flex;
      align-items: center;
      gap: 4px;
    `;

    const location = document.createElement('span');
    location.textContent = 'Hong Kong';
    location.style.cssText = `
      display: flex;
      align-items: center;
      gap: 4px;
    `;

    positionTitle.appendChild(positionText);
    positionTitle.appendChild(currentBadge);
    durationLocation.appendChild(duration);
    durationLocation.appendChild(location);
    positionHeader.appendChild(positionTitle);
    positionHeader.appendChild(companyName);
    positionHeader.appendChild(durationLocation);

    // 核心職責
    const responsibilitiesSection = document.createElement('div');
    responsibilitiesSection.style.cssText = `
      margin-bottom: 25px;
    `;

    const responsibilitiesTitle = document.createElement('h4');
    responsibilitiesTitle.textContent = 'Core Responsibilities & Deliverables:';
    responsibilitiesTitle.style.cssText = `
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 15px 0;
    `;

    const responsibilitiesList = document.createElement('ul');
    responsibilitiesList.style.cssText = `
      list-style: none;
      padding: 0;
      margin: 0;
    `;

    const responsibilities = [
      "ERP System Development & Customization: Lead Plugin Developer for flagship inventory/accounting ERP with POS integration, labeling system, token system, and payment scheduler add-on. Developed 1500+ client-specific workflow solutions.",
      "Client Solution Lifecycle Management: Conducted unlimited requirement analysis sessions, authored technical proposals for enterprise clients, and provided professional support for complex accounting/system issues.",
      "Infrastructure & Security: Install and maintained 20+ server cluster, configured enterprise firewalls, performed monthly vulnerability assessments.",
      "Practical Facility Upgrades: Installed touch-free restroom systems with occupancy indicators, implemented facial recognition time clocks, enhanced server room cooling via weatherproofing."
    ];

    responsibilities.forEach(responsibility => {
      const listItem = document.createElement('li');
      listItem.style.cssText = `
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 12px;
      `;

      const bullet = document.createElement('div');
      bullet.style.cssText = `
        width: 6px;
        height: 6px;
        background: #667eea;
        border-radius: 50%;
        margin-top: 8px;
        flex-shrink: 0;
      `;

      const text = document.createElement('span');
      text.textContent = responsibility;
      text.style.cssText = `
        color: #374151;
        line-height: 1.6;
        font-size: 14px;
      `;

      listItem.appendChild(bullet);
      listItem.appendChild(text);
      responsibilitiesList.appendChild(listItem);
    });

    responsibilitiesSection.appendChild(responsibilitiesTitle);
    responsibilitiesSection.appendChild(responsibilitiesList);

    // 公司認可
    const achievementsSection = document.createElement('div');
    achievementsSection.style.cssText = `
      margin-top: 25px;
    `;

    const achievementsTitle = document.createElement('h4');
    achievementsTitle.textContent = 'Company Recognition:';
    achievementsTitle.style.cssText = `
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 15px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    `;

    const achievementsGrid = document.createElement('div');
    achievementsGrid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
    `;

    const achievements = [
      "ERP Excellence Awards 2022",
      "Asia's Most Valuable Brand Awards 2023",
      "CorpHub Outstanding Enterprise Awards 2023",
      "HKCT Business Awards 2023",
      "Capital eCommerce Awards 2022/23"
    ];

    achievements.forEach(achievement => {
      const achievementBadge = document.createElement('div');
      achievementBadge.textContent = achievement;
      achievementBadge.style.cssText = `
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 12px;
        text-align: center;
        color: #475569;
        font-size: 13px;
        font-weight: 500;
      `;
      achievementsGrid.appendChild(achievementBadge);
    });

    achievementsSection.appendChild(achievementsTitle);
    achievementsSection.appendChild(achievementsGrid);

    // 組裝經驗卡片
    experienceCard.appendChild(positionHeader);
    experienceCard.appendChild(responsibilitiesSection);
    experienceCard.appendChild(achievementsSection);

    experienceSection.appendChild(experienceTitle);
    experienceSection.appendChild(experienceCard);
    pdfContainer.appendChild(experienceSection);

    return pdfContainer;
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