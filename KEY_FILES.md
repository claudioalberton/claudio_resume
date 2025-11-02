# Key Files Quick Reference

Essential files you'll interact with most often.

## Files You'll Edit Often

### Your Content (MOST IMPORTANT)
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/data/resume-data.ts
```
**Edit this to update**: Name, contact info, experience, skills, everything!

### Your Colors
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/app/globals.css
```
**Edit this to change**: Primary color, theme colors, global styles

### Your Page Layout
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/app/page.tsx
```
**Edit this to**: Reorder sections, remove sections, change layout

## Files You Might Edit

### Site Metadata
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/app/layout.tsx
```
**Edit for**: Page title, description, SEO, font changes

### Individual Sections
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/components/hero-section.tsx
/Users/claudioalbertonbatista/Project Claudio/resume-website/components/achievements-section.tsx
/Users/claudioalbertonbatista/Project Claudio/resume-website/components/experience-section.tsx
/Users/claudioalbertonbatista/Project Claudio/resume-website/components/education-section.tsx
/Users/claudioalbertonbatista/Project Claudio/resume-website/components/skills-section.tsx
/Users/claudioalbertonbatista/Project Claudio/resume-website/components/languages-section.tsx
/Users/claudioalbertonbatista/Project Claudio/resume-website/components/patents-section.tsx
```
**Edit these to**: Modify individual section layouts, styling, or behavior

## Configuration Files

### Next.js Configuration
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/next.config.js
```
**Edit for**: Base path, export settings (rarely needed)

### Tailwind Configuration
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/tailwind.config.ts
```
**Edit for**: Custom colors, fonts, animations (advanced)

### TypeScript Configuration
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/tsconfig.json
```
**Edit for**: TypeScript settings (rarely needed)

### Package Configuration
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/package.json
```
**Edit for**: Adding new dependencies, scripts

## Documentation Files

### Start Here
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/START_HERE.md
```
**Your first stop** - Quick introduction and next steps

### Main Documentation
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/README.md
```
**Comprehensive guide** - Everything about the project

### Quick Reference
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/QUICKSTART.md
```
**Quick commands** - Common tasks and commands

### Customization Guide
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/CUSTOMIZATION_CHECKLIST.md
```
**Step-by-step guide** - How to customize everything

### Deployment Guide
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/DEPLOYMENT.md
```
**How to deploy** - Publishing your website online

### Features Guide
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/FEATURES.md
```
**Feature reference** - All features explained

### Project Overview
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/OVERVIEW.md
```
**Big picture** - Complete project overview

### Technical Details
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/PROJECT_SUMMARY.md
```
**Technical reference** - Architecture and details

### Documentation Index
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/DOCUMENTATION_INDEX.md
```
**Find anything** - Index of all documentation

### Completion Summary
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/PROJECT_COMPLETE.md
```
**Project status** - What's complete and next steps

## Deployment Files

### GitHub Actions Workflow
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/.github/workflows/deploy.yml
```
**Automated deployment** - Deploys to GitHub Pages automatically

### Git Ignore
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/.gitignore
```
**Git configuration** - Files to exclude from version control

### Jekyll Disable
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/.nojekyll
```
**GitHub Pages config** - Disables Jekyll processing

## Build Output

### Static Export Folder
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/out/
```
**Generated files** - Created after `npm run build`, deploy this folder

### Main HTML File
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/out/index.html
```
**Your website** - The main HTML file that browsers load

## Project Root
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/
```
**Project location** - Base directory for all commands

## Quick Copy-Paste Paths

### Navigate to Project
```bash
cd "/Users/claudioalbertonbatista/Project Claudio/resume-website"
```

### Open Content File
```bash
open "/Users/claudioalbertonbatista/Project Claudio/resume-website/data/resume-data.ts"
```

### Open Colors File
```bash
open "/Users/claudioalbertonbatista/Project Claudio/resume-website/app/globals.css"
```

### Open in VS Code (if installed)
```bash
code "/Users/claudioalbertonbatista/Project Claudio/resume-website"
```

## File Locations by Task

### Update Resume Content
**File**: `/data/resume-data.ts`
**Section**: Entire file
**Type**: TypeScript data structure

### Change Primary Color
**File**: `/app/globals.css`
**Section**: `:root { --primary: ... }`
**Type**: CSS custom property

### Reorder Sections
**File**: `/app/page.tsx`
**Section**: Inside `<div ref={contentRef}>`
**Type**: React components

### Change Page Title
**File**: `/app/layout.tsx`
**Section**: `export const metadata`
**Type**: Next.js metadata

### Modify a Section's Layout
**File**: `/components/[section-name]-section.tsx`
**Section**: Component JSX
**Type**: React component

### Add New Dependency
**File**: `/package.json`
**Section**: `dependencies` or `devDependencies`
**Type**: JSON configuration

### Configure Deployment
**File**: `/.github/workflows/deploy.yml`
**Section**: Entire file
**Type**: YAML workflow

## Folder Structure Overview

```
/Users/claudioalbertonbatista/Project Claudio/resume-website/
│
├── .github/                    # GitHub configuration
│   └── workflows/              # Automated workflows
│
├── app/                        # Next.js app directory
│   ├── globals.css            # ← EDIT: Colors/styles
│   ├── layout.tsx             # ← EDIT: Metadata
│   └── page.tsx               # ← EDIT: Section order
│
├── components/                 # React components
│   ├── ui/                    # Base UI components
│   └── *-section.tsx          # ← EDIT: Section layouts
│
├── data/                       # Content data
│   └── resume-data.ts         # ← EDIT: Your content
│
├── lib/                        # Utility functions
│   └── utils.ts               # Helper functions
│
├── out/                        # Build output (deploy this)
│   ├── _next/                 # Next.js assets
│   └── index.html             # Main page
│
├── node_modules/               # Dependencies (don't edit)
│
├── Configuration Files         # Project config
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
│
└── Documentation Files         # All the .md files
    ├── START_HERE.md
    ├── README.md
    └── etc...
```

## Most Important Files (Top 5)

1. **`/data/resume-data.ts`** - Your content
2. **`/app/globals.css`** - Your colors
3. **`/app/page.tsx`** - Your layout
4. **`START_HERE.md`** - Getting started
5. **`CUSTOMIZATION_CHECKLIST.md`** - How to customize

## Least Important Files (Safe to Ignore)

- Files in `node_modules/` - Dependencies
- Files in `.next/` - Build cache
- Files in `out/` - Generated output
- `package-lock.json` - Dependency lock
- Most config files - Rarely need changes

## Color Coding by Importance

🔴 **Critical** - You'll edit often
- `/data/resume-data.ts`

🟡 **Important** - You might edit
- `/app/globals.css`
- `/app/page.tsx`
- `/app/layout.tsx`

🟢 **Optional** - Edit if needed
- Component files
- Configuration files

⚪ **Informational** - Reference only
- Documentation files
- README files

🔵 **Generated** - Don't edit
- `out/` folder
- `node_modules/` folder
- `.next/` folder

## File Size Reference

- **Smallest**: Config files (~100 lines)
- **Small**: UI components (~50-100 lines)
- **Medium**: Section components (~100-150 lines)
- **Large**: resume-data.ts (~170 lines)
- **Largest**: Documentation files (~300-1000 lines)

## Quick Access

### In Terminal
```bash
# Navigate to project
cd "/Users/claudioalbertonbatista/Project Claudio/resume-website"

# Edit content
nano data/resume-data.ts

# Edit colors
nano app/globals.css

# View structure
ls -la
```

### In Finder (Mac)
```bash
# Open project folder
open "/Users/claudioalbertonbatista/Project Claudio/resume-website"
```

### In VS Code
```bash
# Open project
code "/Users/claudioalbertonbatista/Project Claudio/resume-website"

# Open specific file
code "/Users/claudioalbertonbatista/Project Claudio/resume-website/data/resume-data.ts"
```

---

**Tip**: Bookmark this file for quick reference to all file paths!

**Most Used Path**: `/data/resume-data.ts` - You'll edit this the most!

**Project Root**: `/Users/claudioalbertonbatista/Project Claudio/resume-website/`
