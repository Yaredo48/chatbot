# Professional Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS for professionals in Software Engineering, Machine Learning, AI Engineering, and Data Science.

## 🚀 Features

### ✨ Core Sections
- **Introduction**: Personal statement with professional avatar
- **Skills**: Visual skill bars with expertise levels
- **Projects**: Showcase of 5 significant projects with filtering
- **Experience**: Timeline-based work history
- **Education**: Academic background and certifications
- **Publications**: Research papers and open-source contributions
- **Testimonials**: Client and colleague recommendations
- **Contact**: Interactive contact form with social links

### 🎨 Design Features
- **Modern UI**: Clean, professional design with gradient accents
- **Responsive**: Fully optimized for desktop, tablet, and mobile
- **Interactive**: Smooth animations and micro-interactions
- **Accessible**: Semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags and structured data

### 🛠 Technical Stack
- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Intersection Observer**: For scroll-triggered animations

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎯 Customization

### Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal details (name, title, contact info)
- Skills and expertise levels
- Project information and links
- Work experience and education
- Publications and testimonials

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for custom styles and animations
- Adjust color schemes in the Tailwind configuration

### Content Sections
Each section is a separate component in `src/components/`:
- `Introduction.jsx` - Hero section with personal info
- `Skills.jsx` - Technical skills visualization
- `Projects.jsx` - Project showcase with filtering
- `Experience.jsx` - Work experience timeline
- `Education.jsx` - Academic background
- `Publications.jsx` - Research and contributions
- `Testimonials.jsx` - Client recommendations
- `Contact.jsx` - Contact form and information

## 🌟 Key Features

### Interactive Elements
- Smooth scroll navigation
- Animated skill bars
- Project filtering by technology
- Testimonial carousel
- Form validation and submission
- Hover effects and transitions

### Performance Optimizations
- Lazy loading with Intersection Observer
- Optimized images and assets
- Minimal bundle size with Vite
- Code splitting and tree shaking

### SEO Best Practices
- Semantic HTML5 structure
- Meta tags and Open Graph
- Proper heading hierarchy
- Alt text for images
- Structured data markup

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1200px+ with full feature set
- **Tablet**: 768px-1199px with adapted layout
- **Mobile**: <768px with mobile-first design

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Import your repository to Vercel
2. Vercel will automatically detect the framework
3. Deploy with zero configuration

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Configure custom domain if needed

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by professional portfolio best practices
- Icons provided by Lucide React
- Animations powered by Framer Motion
