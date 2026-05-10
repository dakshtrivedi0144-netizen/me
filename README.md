# Daksh Trivedi - Portfolio

A modern, Vercel-compatible portfolio website built with Next.js 14 and React.

## Features

- ⚡ **Next.js 14** - Latest React framework with App Router
- 🎨 **Modern Design** - Dark theme with teal accents and smooth animations
- 📱 **Responsive** - Mobile-friendly design
- 🚀 **Vercel Ready** - Optimized for Vercel deployment
- ⚙️ **Zero Config** - Works out of the box

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── layout.js       # Root layout with metadata
│   ├── page.js         # Main portfolio page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json        # Dependencies
├── next.config.js      # Next.js configuration
├── jsconfig.json       # JS path aliases
└── vercel.json         # Vercel configuration
```

## Customization

Edit `app/page.js` to update content and `app/globals.css` for styling.

## License

© 2026 Daksh Trivedi. All rights reserved.
