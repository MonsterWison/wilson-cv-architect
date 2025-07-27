# Wilson Ho - ERP Solutions Architect CV

A modern, responsive CV website showcasing 28+ years of technology expertise in ERP solutions and information systems management.

## 🚀 Live Demo

Visit: [https://wilsonho.github.io/wilson-cv-architect](https://wilsonho.github.io/wilson-cv-architect)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📋 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Loading**: Optimized build with Vite
- **Accessible**: WCAG compliant components

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── CVHeader.tsx    # Header with contact info
│   ├── CVSection.tsx   # Section wrapper
│   ├── SkillsGrid.tsx  # Skills display
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Main CV page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wilsonho/wilson-cv-architect.git
cd wilson-cv-architect
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment to GitHub Pages

### Automatic Deployment

1. Push your changes to the main branch
2. Run the deployment command:
```bash
npm run deploy
```

This will:
- Build the project
- Deploy to the `gh-pages` branch
- Make it available at `https://wilsonho.github.io/wilson-cv-architect`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Create a new branch called `gh-pages`:
```bash
git checkout -b gh-pages
```

3. Copy the contents of `dist/` to the root of the `gh-pages` branch

4. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. In your GitHub repository settings, set the source to `gh-pages` branch

## 📝 Customization

### Personal Information

Update your personal information in:
- `src/components/CVHeader.tsx` - Contact details and title
- `src/pages/Index.tsx` - Professional summary and experience

### Styling

The project uses Tailwind CSS with custom CSS variables. Main styling files:
- `src/index.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration

### Content

Update your CV content in the respective component files:
- Experience: `src/pages/Index.tsx`
- Skills: `src/components/SkillsGrid.tsx`
- Education: `src/components/EducationTimeline.tsx`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

### Code Style

The project uses ESLint for code linting. Run `npm run lint` to check for issues.

## 📄 License

This project is private and for personal use.

## 🤝 Contributing

This is a personal CV website, but suggestions for improvements are welcome!

---

**Contact**: monsterbb100@gmail.com  
**Location**: Hong Kong  
**Website**: [https://wilsonho.github.io/wilson-cv-architect](https://wilsonho.github.io/wilson-cv-architect)
