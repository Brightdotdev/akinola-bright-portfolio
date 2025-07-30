# Deploying to Cloudflare Pages

This guide will help you deploy your portfolio to Cloudflare Pages.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI**: Install the Cloudflare CLI tool

## Installation

### Install Wrangler CLI
```bash
npm install -g wrangler
```

### Login to Cloudflare
```bash
wrangler login
```

## Deployment Steps

### Method 1: Using Wrangler CLI (Recommended)

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages**:
   ```bash
   npm run deploy
   ```

### Method 2: Using Cloudflare Dashboard

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages"
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/` (leave empty)

## Environment Variables (Optional)

If you need environment variables, add them in the Cloudflare Pages dashboard:
- Go to your project settings
- Navigate to "Environment variables"
- Add any required variables

## Custom Domain (Optional)

1. In your Cloudflare Pages project settings
2. Go to "Custom domains"
3. Add your domain and follow the DNS configuration

## Troubleshooting

### Common Issues:

1. **Build fails**: Check your build logs in the Cloudflare dashboard
2. **Routing issues**: Ensure `public/_redirects` file is present
3. **404 errors**: Verify the build output directory is `dist`

### Support:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/) 