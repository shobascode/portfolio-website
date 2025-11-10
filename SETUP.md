# Portfolio Website Setup Guide

## 🚀 Quick Setup Instructions

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `portfolio-website` (or your preferred name)
   - **Description**: "My professional portfolio website"
   - **Visibility**: Public (recommended for portfolio)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 2: Connect Local Repository to GitHub

After creating the GitHub repository, run these commands in your terminal:

```bash
# Add the remote repository (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/portfolio-website.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Netlify

1. Go to [Netlify.com](https://netlify.com) and sign up/sign in
2. Click "New site from Git"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your `portfolio-website` repository
6. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: (leave empty for static site)
   - **Publish directory**: (leave empty, defaults to root)
7. Click "Deploy site"

### Step 4: Custom Domain Setup (Optional)

#### If you already have a domain:
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions

#### If you need to buy a domain:
1. Purchase from registrars like:
   - [Namecheap](https://namecheap.com)
   - [Google Domains](https://domains.google.com)
   - [GoDaddy](https://godaddy.com)
2. Follow the custom domain setup above

### Step 5: Customize Your Portfolio

Edit the following in `index.html`:
- [ ] Replace "Shoba" with your name
- [ ] Update the hero section with your title and description
- [ ] Add your actual projects in the projects section
- [ ] Update skills to match your expertise
- [ ] Replace contact links with your social media profiles
- [ ] Update email address in contact section

## 🎨 Customization Tips

### Colors
The main colors are defined in `styles.css`. Look for these values to customize:
- Primary blue: `#2563eb`
- Accent yellow: `#fbbf24`
- Text dark: `#1f2937`
- Background: `#ffffff`

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation if needed

### Performance Optimization
- Optimize images before adding them
- Use WebP format for better compression
- Keep file sizes minimal

## 🔧 Development Workflow

### Local Development
```bash
# Navigate to project directory
cd /Users/shoba/portfolio-website

# Start local server (Python)
python -m http.server 8000

# Or use any other local server
# Then visit: http://localhost:8000
```

### Making Changes
```bash
# Make your changes to files
# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub (triggers automatic Netlify deployment)
git push origin main
```

## 📱 Testing Checklist

Before going live, test:
- [ ] Mobile responsiveness (use browser dev tools)
- [ ] All navigation links work
- [ ] Contact links are correct
- [ ] Images load properly
- [ ] Site loads quickly
- [ ] No console errors

## 🌐 SEO Optimization

- [ ] Update meta description in `<head>`
- [ ] Add relevant keywords
- [ ] Ensure all images have alt text
- [ ] Test site speed with Google PageSpeed Insights
- [ ] Submit to Google Search Console

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure GitHub repository is public
4. Check Netlify deploy logs for errors

## 🎉 You're Done!

Once deployed, your portfolio will be live and automatically update whenever you push changes to GitHub!

**Next Steps:**
- Share your portfolio URL
- Add it to your resume and LinkedIn
- Keep it updated with new projects
- Monitor analytics (you can add Google Analytics later)
