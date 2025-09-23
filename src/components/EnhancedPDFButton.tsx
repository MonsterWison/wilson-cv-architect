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
      pdfContainer.style.cssText = `
        background: white;
        font-family: 'Arial', 'Calibri', sans-serif;
        line-height: 1.4;
        color: #1f2937;
        max-width: 210mm;
        margin: 0 auto;
        padding: 20mm;
        font-size: 11pt;
      `;

      // 創建專業的 CV 結構
      const cvContent = createProfessionalCVStructure();
      pdfContainer.appendChild(cvContent);

      // PDF 配置選項
      const pdfOptions = {
        margin: [10, 10, 10, 10],
        filename: 'Wilson_Ho_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait'
        }
      };

      // 生成 PDF
      await html2pdf().from(pdfContainer).set(pdfOptions).save();
      
      toast({
          title: "PDF Generated Successfully",
          description: "Your CV has been downloaded.",
      });
      
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: "PDF Generation Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const createProfessionalCVStructure = () => {
    const cvDiv = document.createElement('div');
    cvDiv.style.cssText = `
      font-family: 'Arial', 'Calibri', sans-serif;
      line-height: 1.4;
      color: #1f2937;
    `;

    // Header Section
    const header = createHeaderSection();
    cvDiv.appendChild(header);

    // Professional Summary
    const summary = createSummarySection();
    cvDiv.appendChild(summary);

    // Core Skills
    const skills = createSkillsSection();
    cvDiv.appendChild(skills);

    // Professional Experience
    const experience = createExperienceSection();
    cvDiv.appendChild(experience);

    // Prior Technical Roles
    const priorRoles = createPriorRolesSection();
    cvDiv.appendChild(priorRoles);

    // Education & Certifications
    const education = createEducationSection();
    cvDiv.appendChild(education);

    // Technical Interests
    const interests = createInterestsSection();
    cvDiv.appendChild(interests);

    // Portfolio Showcase
    const portfolio = createPortfolioSection();
    cvDiv.appendChild(portfolio);

    return cvDiv;
  };

  const createHeaderSection = () => {
    const header = document.createElement('div');
    header.style.cssText = `
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 3px solid #1e3a8a;
      padding-bottom: 15px;
    `;

    const name = document.createElement('h1');
    name.textContent = 'Ho Wai Shun Wilson';
    name.style.cssText = `
      font-size: 28pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 5px 0;
      letter-spacing: 1px;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Full Stack Developer (include IOS Apps)';
    title.style.cssText = `
      font-size: 16pt;
      font-weight: 600;
      color: #374151;
      margin: 0 0 15px 0;
    `;

    const contactInfo = document.createElement('div');
    contactInfo.style.cssText = `
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      font-size: 10pt;
      color: #6b7280;
    `;

    const contactItems = [
      { icon: '📞', text: '+852 9226 9702' },
      { icon: '📧', text: 'wilson_23@hotmail.com' },
      { icon: '🌐', text: 'www.monsterwilson.online' },
      { icon: '📍', text: 'Hong Kong' }
    ];

    contactItems.forEach(item => {
      const contactItem = document.createElement('span');
      contactItem.textContent = `${item.icon} ${item.text}`;
      contactItem.style.cssText = `
        white-space: nowrap;
        font-weight: 500;
        cursor: pointer;
        text-decoration: underline;
        color: #1e3a8a;
      `;
      
      // Add click functionality for email only
      if (item.text.includes('wilson_23@hotmail.com')) {
        contactItem.onclick = () => {
          window.open('mailto:wilson_23@hotmail.com?subject=CV Inquiry', '_blank');
        };
      } else {
        // For website, phone and location - no click functionality
        contactItem.style.cursor = 'default';
        contactItem.style.textDecoration = 'none';
        contactItem.style.color = '#6b7280';
      }
      
      contactInfo.appendChild(contactItem);
    });

    header.appendChild(name);
    header.appendChild(title);
    header.appendChild(contactInfo);

    return header;
  };

  const createSummarySection = () => {
    const section = document.createElement('div');
    section.style.cssText = `
      margin-bottom: 20px;
    `;

    const title = document.createElement('h3');
    title.textContent = 'PROFESSIONAL SUMMARY';
    title.style.cssText = `
      font-size: 14pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 10px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;

    const content = document.createElement('p');
    content.textContent = 'ERP Solutions Architect with 28+ years in technology implementation. Core expertise in custom module development and client-facing technical support for inventory/accounting systems. Proven track record in end-to-end solution design and critical issue resolution.';
    content.style.cssText = `
      font-size: 11pt;
      line-height: 1.5;
      margin: 0;
      text-align: justify;
    `;

    section.appendChild(title);
    section.appendChild(content);

    return section;
  };

  const createSkillsSection = () => {
    const section = document.createElement('div');
    section.style.cssText = `
      margin-bottom: 20px;
    `;

    const title = document.createElement('h3');
    title.textContent = 'CORE SKILLS';
    title.style.cssText = `
      font-size: 14pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 10px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;

    const skillsGrid = document.createElement('div');
    skillsGrid.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
    `;

    const skillCategories = [
      {
        category: 'Systems & Cloud',
        skills: 'Cloud ERP Migration, Firewall Configuration, Server Maintenance (20+ units), Docker, AWS, CloudFlare, Vercel, Zeabur, Alibaba Cloud, Tencent Cloud, Baidu Smart Cloud, GitHub, Firebase'
      },
      {
        category: 'Development & APIs',
        skills: 'Python, Generative AI, MS SQL, N8N, Langfuse, Cursor, XCode, DeepSeek, OpenRouter AI, ERP Module Customization, API Gateway, JWT Token, RESTful APIs, GraphQL, Microservices'
      },
      {
        category: 'AI/ML Development',
        skills: 'Large Language Models, Neural Networks, Natural Language Processing, TensorFlow/PyTorch, Model Training, AI Architecture Design'
      },
      {
        category: 'Mobile Development',
        skills: 'SwiftUI, iOS Development, Apple HIG, MVVM Architecture, AI Integration, App Store Publishing'
      },
      {
        category: 'Hardware & IoT',
        skills: 'IoT Device Installation, Access Control Systems, Facility Modifications'
      }
    ];

    skillCategories.forEach(cat => {
      const categoryDiv = document.createElement('div');
      categoryDiv.style.cssText = `
        background: #f8fafc;
        padding: 10px;
        border-left: 3px solid #3b82f6;
      `;

      const categoryTitle = document.createElement('h4');
      categoryTitle.textContent = cat.category;
      categoryTitle.style.cssText = `
        font-size: 11pt;
        font-weight: bold;
        color: #1e3a8a;
        margin: 0 0 5px 0;
      `;

      const skillsList = document.createElement('p');
      skillsList.textContent = cat.skills;
      skillsList.style.cssText = `
        font-size: 10pt;
        line-height: 1.4;
        margin: 0;
        color: #374151;
      `;

      categoryDiv.appendChild(categoryTitle);
      categoryDiv.appendChild(skillsList);
      skillsGrid.appendChild(categoryDiv);
    });

    section.appendChild(title);
    section.appendChild(skillsGrid);

    // 在Core Skills后添加分页，让Professional Experience在新页面开始
    const pageBreak = document.createElement('div');
    pageBreak.style.cssText = `
      page-break-after: always;
      break-after: page;
    `;
    section.appendChild(pageBreak);

    return section;
  };

  const createExperienceSection = () => {
    const section = document.createElement('div');
    section.style.cssText = `
      margin-bottom: 20px;
    `;

    const title = document.createElement('h3');
    title.textContent = 'PROFESSIONAL EXPERIENCE';
    title.style.cssText = `
      font-size: 14pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 15px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;

    // Current Experience
    const currentExp = document.createElement('div');
    currentExp.style.cssText = `
      margin-bottom: 15px;
    `;

    const companyHeader = document.createElement('div');
    companyHeader.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    `;

    const companyName = document.createElement('h4');
    companyName.textContent = 'Epoch-Tech Computer System Co., Ltd.';
    companyName.style.cssText = `
      font-size: 12pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0;
    `;

    const duration = document.createElement('span');
    duration.textContent = '2009 – Present';
    duration.style.cssText = `
      font-size: 10pt;
      color: #6b7280;
      font-weight: 500;
    `;

    companyHeader.appendChild(companyName);
    companyHeader.appendChild(duration);

    const position = document.createElement('h5');
    position.textContent = 'Developer';
    position.style.cssText = `
      font-size: 11pt;
      font-weight: 600;
      color: #374151;
      margin: 0 0 10px 0;
    `;

    const responsibilities = [
      'ERP System Development & Customization: Lead Plugin Developer for flagship inventory/accounting ERP with POS integration, labeling system, token system, and payment scheduler add-on. Developed 1500+ client-specific workflow solutions.',
      'Client Solution Lifecycle Management: Conducted unlimited requirement analysis sessions, authored technical proposals for enterprise clients, and provided professional support for complex accounting/system issues.',
      'Infrastructure & Security: Install and maintained 20+ server cluster, configured enterprise firewalls, performed monthly vulnerability assessments.',
      'Practical Facility Upgrades: Installed touch-free restroom systems with occupancy indicators, implemented facial recognition time clocks, enhanced server room cooling via weatherproofing.'
    ];

    const responsibilitiesList = document.createElement('ul');
    responsibilitiesList.style.cssText = `
      margin: 0;
      padding-left: 20px;
    `;

    responsibilities.forEach(resp => {
      const li = document.createElement('li');
      li.textContent = resp;
      li.style.cssText = `
        font-size: 10pt;
        line-height: 1.4;
        margin-bottom: 5px;
        color: #374151;
      `;
      responsibilitiesList.appendChild(li);
    });

    const achievements = document.createElement('div');
    achievements.style.cssText = `
      margin-top: 10px;
      padding: 8px;
      background: #f0f9ff;
      border-left: 3px solid #0ea5e9;
    `;

    const achievementsTitle = document.createElement('h6');
    achievementsTitle.textContent = 'Key Achievements:';
    achievementsTitle.style.cssText = `
      font-size: 10pt;
      font-weight: bold;
      color: #0c4a6e;
      margin: 0 0 5px 0;
    `;

    const achievementsList = document.createElement('p');
    achievementsList.textContent = 'ERP Excellence Awards 2022 • Asia\'s Most Valuable Brand Awards 2023 • CorpHub Outstanding Enterprise Awards 2023 • HKCT Business Awards 2023 • Capital eCommerce Awards 2022/23';
    achievementsList.style.cssText = `
      font-size: 9pt;
      line-height: 1.3;
      margin: 0;
      color: #0c4a6e;
    `;

    achievements.appendChild(achievementsTitle);
    achievements.appendChild(achievementsList);

    currentExp.appendChild(companyHeader);
    currentExp.appendChild(position);
    currentExp.appendChild(responsibilitiesList);
    currentExp.appendChild(achievements);

    section.appendChild(title);
    section.appendChild(currentExp);

    return section;
  };

  const createEducationSection = () => {
    const section = document.createElement('div');
    section.style.cssText = `
      margin-bottom: 20px;
    `;

    const title = document.createElement('h3');
    title.textContent = 'EDUCATION & CERTIFICATIONS';
    title.style.cssText = `
      font-size: 14pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 15px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;

    const educationGrid = document.createElement('div');
    educationGrid.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    `;

    // Education Column
    const educationCol = document.createElement('div');
    const educationTitle = document.createElement('h4');
    educationTitle.textContent = 'Education';
    educationTitle.style.cssText = `
      font-size: 12pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 10px 0;
    `;

    const educationItems = [
      { title: 'Certificate of Professional Program - Advanced Generative AI: End to end development with LLMs', institution: 'Venturenix LAB', year: '29/7/2025' },
      { title: 'Certificate in Python Programming (Part-time)', institution: 'Hong Kong College of Technology (HKCT)', year: '30/7/2025', additionalInfo: 'Employees Retraining Board' },
      { title: 'Diploma in Practical IT Skill', institution: 'Unisoft Education Centre', year: '2000' },
      { title: 'Vocational English Certificate', institution: 'HK PolyU', year: '1996' },
      { title: 'Business Studies Diploma', institution: 'Caritas Institute', year: '1995' },
      { title: 'HKCEE', institution: 'Hong Kong Certificate of Education Examination', subjects: 'Chinese • English • Geography • Mathematics' }
    ];

    const educationList = document.createElement('div');
    educationList.style.cssText = `
      space-y: 8px;
    `;

    educationItems.forEach(item => {
      const eduItem = document.createElement('div');
      eduItem.style.cssText = `
        margin-bottom: 8px;
        padding: 8px;
        background: #f8fafc;
        border-left: 2px solid #3b82f6;
      `;

      const eduTitle = document.createElement('h5');
      eduTitle.textContent = item.title;
      eduTitle.style.cssText = `
        font-size: 10pt;
        font-weight: bold;
        color: #374151;
        margin: 0 0 2px 0;
      `;

      const eduInstitution = document.createElement('p');
      eduInstitution.textContent = item.institution;
      eduInstitution.style.cssText = `
        font-size: 9pt;
        color: #1e3a8a;
        font-weight: 500;
        margin: 0 0 2px 0;
      `;

      const eduYear = document.createElement('p');
      eduYear.textContent = item.year || item.subjects || '';
      eduYear.style.cssText = `
        font-size: 8pt;
        color: #6b7280;
        margin: 0;
      `;

      eduItem.appendChild(eduTitle);
      eduItem.appendChild(eduInstitution);
      
      if (item.additionalInfo) {
        const eduAdditional = document.createElement('p');
        eduAdditional.textContent = item.additionalInfo;
        eduAdditional.style.cssText = `
          font-size: 8pt;
          color: #6b7280;
          margin: 0 0 2px 0;
          font-style: italic;
        `;
        eduItem.appendChild(eduAdditional);
      }
      
      eduItem.appendChild(eduYear);
      educationList.appendChild(eduItem);
    });

    educationCol.appendChild(educationTitle);
    educationCol.appendChild(educationList);

    // Certifications Column
    const certCol = document.createElement('div');
    const certTitle = document.createElement('h4');
    certTitle.textContent = 'Certifications';
    certTitle.style.cssText = `
      font-size: 12pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 10px 0;
    `;

    const certItems = [
      'Pitman: Software Applications • Word Processing',
      'HK PolyU: Vocational English Certificate',
      'Microsoft Office Specialist (MOS)'
    ];

    const certList = document.createElement('div');
    certList.style.cssText = `
      space-y: 8px;
    `;

    certItems.forEach(cert => {
      const certItem = document.createElement('div');
      certItem.style.cssText = `
        margin-bottom: 8px;
        padding: 8px;
        background: #f8fafc;
        border-left: 2px solid #10b981;
      `;

      const certText = document.createElement('p');
      certText.textContent = cert;
      certText.style.cssText = `
        font-size: 9pt;
        color: #374151;
        margin: 0;
        font-weight: 500;
      `;

      certItem.appendChild(certText);
      certList.appendChild(certItem);
    });

    certCol.appendChild(certTitle);
    certCol.appendChild(certList);

    educationGrid.appendChild(educationCol);
    educationGrid.appendChild(certCol);

    section.appendChild(title);
    section.appendChild(educationGrid);

    return section;
  };

  const createInterestsSection = () => {
    const section = document.createElement('div');
    section.style.cssText = `
      margin-bottom: 20px;
      page-break-before: always;
      break-before: page;
    `;

    const title = document.createElement('h3');
    title.textContent = 'TECHNICAL INTERESTS & CRAFTSMANSHIP';
    title.style.cssText = `
      font-size: 14pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 10px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;

    const interestsGrid = document.createElement('div');
    interestsGrid.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    `;

    const interests = [
      { title: 'iOS App Development', description: 'Native iOS applications with SwiftUI and AI integration' },
      { title: 'AI/ML Development', description: 'Custom Large Language Model implementation and neural networks' },
      { title: 'Scale Miniature Dioramas', description: '1:100 architectural models with intricate craftsmanship' },
      { title: 'High-Detail Model Painting', description: 'Precision acrylic painting on 1:35 scale miniatures' },
      { title: 'Resin Craft Production', description: 'Epoxy resin casting with LED integration and crystal effects' }
    ];

    interests.forEach(interest => {
      const interestItem = document.createElement('div');
      interestItem.style.cssText = `
        padding: 8px;
        background: #f8fafc;
        border-left: 2px solid #8b5cf6;
      `;

      const interestTitle = document.createElement('h5');
      interestTitle.textContent = interest.title;
      interestTitle.style.cssText = `
        font-size: 10pt;
        font-weight: bold;
        color: #374151;
        margin: 0 0 3px 0;
      `;

      const interestDesc = document.createElement('p');
      interestDesc.textContent = interest.description;
      interestDesc.style.cssText = `
        font-size: 8pt;
        color: #6b7280;
        margin: 0;
        line-height: 1.3;
      `;

      interestItem.appendChild(interestTitle);
      interestItem.appendChild(interestDesc);
      interestsGrid.appendChild(interestItem);
    });

    section.appendChild(title);
    section.appendChild(interestsGrid);

    return section;
  };

  const createPriorRolesSection = () => {
    const section = document.createElement('div');
    section.style.cssText = `
      margin-bottom: 20px;
    `;

    const title = document.createElement('h3');
    title.textContent = 'PRIOR TECHNICAL ROLES (1993-2008)';
    title.style.cssText = `
      font-size: 14pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 15px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;

    const rolesGrid = document.createElement('div');
    rolesGrid.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    `;

    const priorRoles = [
      {
        role: 'System Engineer',
        company: 'United Technologies',
        duration: '2008-2009'
      },
      {
        role: 'IT Engineer',
        company: 'I-Nem/NationMark/Skynet',
        duration: '2005-2007'
      },
      {
        role: 'IT Support Supervisor',
        company: 'Melbourne Garment',
        duration: '2001-2005'
      },
      {
        role: 'Operations Specialist',
        company: 'Banking & Logistics Firms',
        duration: '1993-2000'
      }
    ];

    priorRoles.forEach(role => {
      const roleDiv = document.createElement('div');
      roleDiv.style.cssText = `
        background: #f8fafc;
        padding: 12px;
        border-left: 3px solid #3b82f6;
      `;

      const roleTitle = document.createElement('h4');
      roleTitle.textContent = role.role;
      roleTitle.style.cssText = `
        font-size: 11pt;
        font-weight: bold;
        color: #374151;
        margin: 0 0 5px 0;
      `;

      const roleCompany = document.createElement('p');
      roleCompany.textContent = role.company;
      roleCompany.style.cssText = `
        font-size: 10pt;
        color: #1e3a8a;
        font-weight: 500;
        margin: 0 0 3px 0;
      `;

      const roleDuration = document.createElement('p');
      roleDuration.textContent = role.duration;
      roleDuration.style.cssText = `
        font-size: 9pt;
        color: #6b7280;
        margin: 0;
      `;

      roleDiv.appendChild(roleTitle);
      roleDiv.appendChild(roleCompany);
      roleDiv.appendChild(roleDuration);
      rolesGrid.appendChild(roleDiv);
    });

    section.appendChild(title);
    section.appendChild(rolesGrid);

    // 在Prior Technical Roles后添加分页，让Education独立一页
    const pageBreak = document.createElement('div');
    pageBreak.style.cssText = `
      page-break-after: always;
      break-after: page;
    `;
    section.appendChild(pageBreak);

    return section;
  };

  const createPortfolioSection = () => {
    const section = document.createElement('div');
    section.style.cssText = `
      margin-bottom: 20px;
    `;

    const title = document.createElement('h3');
    title.textContent = 'PORTFOLIO SHOWCASE';
    title.style.cssText = `
      font-size: 14pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0 0 15px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;

    const portfolioGrid = document.createElement('div');
    portfolioGrid.style.cssText = `
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
    `;

    const portfolioItems = [
      {
        title: 'iOS App Development',
        description: 'Native iOS applications built with SwiftUI, following Apple HIG design principles and MVVM architecture.',
        skills: 'Attraction Finder, SwiftUI, HIG Design, AI Integration',
        link: 'https://apps.apple.com/hk/app/attraction-finder/id6748924079'
      },
      {
        title: 'AI/ML Development',
        description: 'Custom Large Language Model implementation demonstrating deep understanding of AI architecture and machine learning principles.',
        skills: 'Custom LLM, Neural Networks, NLP, Python',
        link: 'https://www.monsterwilson.online/'
      },
      {
        title: 'Scale Miniature Dioramas',
        description: '1:100 architectural models featuring fantasy buildings, detailed interiors, and intricate craftsmanship.',
        skills: 'Architectural Modeling, LED Lighting, Interior Design, Weathering Effects'
      },
      {
        title: 'High-Detail Model Painting',
        description: 'Precision acrylic painting on 1:35 scale miniatures with realistic textures and weathering effects.',
        skills: 'Acrylic Painting, Weathering, Detail Work, Realistic Textures'
      },
      {
        title: 'Resin Craft Production',
        description: 'Epoxy resin casting with LED integration, crystal effects, and geometric patterns.',
        skills: 'Resin Casting, LED Integration, Crystal Effects, Geometric Patterns'
      }
    ];

    portfolioItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.style.cssText = `
        background: #f8fafc;
        padding: 12px;
        border-left: 3px solid #8b5cf6;
      `;

      const itemTitle = document.createElement('h4');
      itemTitle.textContent = item.title;
      itemTitle.style.cssText = `
        font-size: 11pt;
        font-weight: bold;
        color: #374151;
        margin: 0 0 5px 0;
      `;

      const itemDesc = document.createElement('p');
      itemDesc.textContent = item.description;
      itemDesc.style.cssText = `
        font-size: 9pt;
        line-height: 1.4;
        color: #6b7280;
        margin: 0 0 5px 0;
      `;

      const itemSkills = document.createElement('p');
      itemSkills.textContent = `Skills: ${item.skills}`;
      itemSkills.style.cssText = `
        font-size: 8pt;
        color: #1e3a8a;
        font-weight: 500;
        margin: 0;
      `;

      itemDiv.appendChild(itemTitle);
      itemDiv.appendChild(itemDesc);
      itemDiv.appendChild(itemSkills);
      portfolioGrid.appendChild(itemDiv);
    });

    section.appendChild(title);
    section.appendChild(portfolioGrid);

    return section;
  };

  return (
    <Button
      onClick={generateEnhancedPDF}
      disabled={isGenerating}
      className="fixed top-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-white group rounded-full px-5 py-2"
      size="sm"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span className="font-medium text-sm">Generating CV...</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium text-sm">Download CV</span>
        </>
      )}
    </Button>
  );
};

export default EnhancedPDFButton; 