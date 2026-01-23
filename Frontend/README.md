# SecureBank - BFSI Next.js Website

A modern, professional BFSI (Banking & Financial Services) website built with Next.js, TypeScript, and Tailwind CSS. Inspired by HSBC and Bank of America design patterns.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Analytics Ready**: Integrated with Google Tag Manager and dataLayer events
- **Performance Optimized**: Built with Next.js 15 and Turbopack
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Analytics**: Google Tag Manager (GTM) ready

## 🛠️ Installation

```bash
# Navigate to project directory
cd nextjs-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📄 Pages Structure

### Home Page (/)
- Hero section with floating cards animation
- Product showcase (Personal Loan, Home Loan, Savings Account)
- Why Choose Us section
- Call-to-action section

## 🎯 Analytics Events

The website tracks the following events via dataLayer:

### Page View
```javascript
{
  event: 'page_view',
  page_title: 'Home',
  page_location: window.location.href,
  page_path: '/'
}
```

### CTA Clicks
```javascript
{
  event: 'cta_click',
  cta_text: 'Apply Now',
  cta_location: 'hero',
  page_section: 'hero'
}
```

### Product Selection
```javascript
{
  event: 'select_product',
  product_id: 'personal-loan',
  product_name: 'Personal Loan',
  page_section: 'products'
}
```

## 🎨 Components

- **Navbar**: Responsive navigation with mobile menu
- **Hero**: Eye-catching hero section with animated floating cards
- **Products**: Product cards with hover effects
- **WhyChoose**: Feature highlights
- **CTASection**: Call-to-action with gradient background
- **Footer**: Multi-column footer with links
- **Analytics**: GTM integration component

## 📝 GTM Setup

1. Replace `GTM-XXXXXXX` in `components/Analytics.tsx` with your actual GTM container ID
2. Configure tags in GTM to listen to dataLayer events
3. Test using GTM Preview mode

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

## 📋 Project Structure

```
nextjs-website/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Analytics.tsx       # GTM integration
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Products.tsx        # Products showcase
│   ├── WhyChoose.tsx       # Features section
│   ├── CTASection.tsx      # Call-to-action
│   └── Footer.tsx          # Footer component
└── public/                 # Static assets
```

## 🎯 Assessment Alignment

This project is built for the **TVC Intern Group 4 BFSI Assessment** and includes:

✅ Next.js framework with TypeScript
✅ Professional BFSI-focused design
✅ Analytics tracking with dataLayer
✅ Responsive design
✅ Clean component architecture
✅ Ready for GTM integration

## 📌 Next Steps

1. **Add Product Detail Pages**: Create individual pages for each product
2. **Implement Application Flow**: Multi-step form for loan applications
3. **Add OTP Verification**: Mock OTP verification page
4. **Integrate Firebase**: For Android app parity
5. **Setup Server-Side GTM**: Implement sGTM for enhanced tracking
6. **Create BigQuery Integration**: Link GA4 to BigQuery

## 📄 License

This is a simulation project for assessment purposes only.

---

**Group**: TVC Intern Group 4  
**Project**: BFSI Analytics & Cloud Implementation Assessment  
**Platform**: Web (Next.js)
