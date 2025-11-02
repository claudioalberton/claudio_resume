# Modern Resume Website

A beautiful, responsive resume website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and PDF export functionality.

## Features

- Modern, professional design with clean layout
- Responsive design (mobile, tablet, desktop)
- Dark mode toggle
- Smooth animations with Framer Motion
- PDF export functionality
- Print-friendly styling
- Static site generation for easy deployment
- Beautiful typography and proper spacing
- Timeline view for professional experience
- Sections for achievements, experience, education, skills, languages, and patents

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components inspired by shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PDF Export**: react-to-print
- **Theme**: next-themes for dark mode

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create a static export:

```bash
npm run build
```

This will generate a static site in the `out` directory that can be deployed to any static hosting service.

## Deployment

### GitHub Pages

1. Update the `basePath` in `next.config.js` if deploying to a subdirectory
2. Build the project: `npm run build`
3. Deploy the `out` directory to GitHub Pages

### Other Static Hosts

The `out` directory can be deployed to:
- Vercel
- Netlify
- AWS S3
- Azure Static Web Apps
- Any static file hosting service

## Customization

### Update Resume Data

Edit the file `/data/resume-data.ts` to update your personal information, experience, education, skills, etc.

### Modify Styling

- Global styles: `/app/globals.css`
- Theme colors: Modify CSS variables in `globals.css`
- Component styles: Each component uses Tailwind CSS classes

### Color Scheme

The default color scheme uses a professional blue palette. To change:

1. Edit CSS variables in `/app/globals.css`
2. Modify the `--primary` and related color values
3. Both light and dark themes can be customized independently

## Project Structure

```
resume-website/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── achievements-section.tsx
│   ├── education-section.tsx
│   ├── experience-section.tsx
│   ├── hero-section.tsx
│   ├── languages-section.tsx
│   ├── patents-section.tsx
│   ├── pdf-export-button.tsx
│   ├── skills-section.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── data/
│   └── resume-data.ts       # Resume content data
├── lib/
│   └── utils.ts             # Utility functions
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json
```

## Features Details

### Dark Mode
- Toggle between light and dark themes
- Persistent theme selection
- Smooth transitions

### PDF Export
- Click "Download PDF" button to generate a PDF
- Print-optimized styling
- Maintains colors and formatting

### Animations
- Fade-in effects on scroll
- Smooth transitions
- Hover effects on interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this template for your own resume!

## Author

Claudio Alberton Batista
