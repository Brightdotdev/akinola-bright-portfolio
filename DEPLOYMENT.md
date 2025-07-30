# Deploying to GitHub Pages

This guide will help you deploy your React Vite portfolio to GitHub Pages.

## Prerequisites

1. **GitHub Account**: Make sure your code is pushed to GitHub
2. **Repository**: Your project should be in a GitHub repository

## Configuration

Your project is already configured for GitHub Pages deployment with:

- ✅ **Base path**: Set to `/akinola-bright-portfolio/` in `vite.config.ts`
- ✅ **Homepage**: Set in `package.json`
- ✅ **SPA routing**: Configured with 404.html and index.html scripts
- ✅ **Build script**: `npm run build`
- ✅ **Deploy script**: `gh-pages -d dist`

## Deployment Steps

### Method 1: Using npm scripts (Recommended)

1. **Build and deploy**:
   ```bash
   npm run deploy
   ```

   This command will:
   - Build your project (`npm run build`)
   - Deploy to GitHub Pages (`gh-pages -d dist`)

### Method 2: Manual deployment

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npx gh-pages -d dist
   ```

## After Deployment

1. **Wait for deployment**: GitHub Pages takes a few minutes to deploy
2. **Check your site**: Visit `https://Brightdotdev.github.io/akinola-bright-portfolio/`
3. **Enable GitHub Pages** (if not already enabled):
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save

## How SPA Routing Works

Your React Router routes will work correctly because:

1. **404.html**: Redirects all routes to index.html with query parameters
2. **index.html script**: Converts query parameters back to proper URLs
3. **React Router**: Handles the routing on the client side

## Available Routes

- **Home**: `https://Brightdotdev.github.io/akinola-bright-portfolio/`
- **Projects**: `https://Brightdotdev.github.io/akinola-bright-portfolio/projects`
- **Now**: `https://Brightdotdev.github.io/akinola-bright-portfolio/now`

## Troubleshooting

### Common Issues:

1. **404 errors on refresh**: Make sure 404.html is in the `public` folder
2. **Build fails**: Check for TypeScript errors with `npm run build`
3. **Assets not loading**: Verify the base path in `vite.config.ts`
4. **Deployment not showing**: Wait 5-10 minutes for GitHub Pages to update

### Support:
- [GitHub Pages Documentation](https://pages.github.com/)
- [gh-pages package](https://github.com/tschaub/gh-pages)
- [SPA for GitHub Pages](https://github.com/rafgraph/spa-github-pages) 