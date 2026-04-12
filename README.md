# rewind-website

Website for the **Rewind** iOS app — a mental wellness companion featuring journaling, guided care routines, a supportive community, and a virtual evolving companion.

Built with Next.js and deployed on Vercel.

## What this is

This is the public-facing landing page for Rewind, designed to:
- Showcase the app's features and screenshots
- Drive App Store downloads
- Serve legal pages (Privacy Policy, Terms of Service, EULA, Support)

> This project is tightly coupled to the Rewind iOS app and is not intended as a generic template.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS** — custom design system matching the iOS app's visual identity
- **Framer Motion** — scroll-driven animations and parallax gallery

## Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout + metadata + favicon
│   ├── not-found.tsx         # 404 page
│   ├── privacy/              # Privacy Policy
│   ├── terms/                # Terms of Service
│   ├── eula/                 # EULA
│   └── support/              # Support page
└── components/
    ├── HeroSection.tsx         # Hero + nav
    ├── GallerySection.tsx      # Scroll-driven screenshot gallery
    ├── FeaturesSection.tsx     # Feature highlights with images
    ├── TestimonialsSection.tsx # User reviews
    ├── FAQSection.tsx          # Animated accordion FAQ
    └── FooterSection.tsx       # Download CTA + links
```

## Assets

App screenshots live in `public/screenshots/` (1.jpg → 5.jpg).
Feature images: `journal-feature.jpg`, `care-corner.jpg`, `live-voice.jpg`.
Hero mockup: `hero-mockup.jpg` (4:3 aspect ratio).

---

© 2026 Rewind · [rewind@shyamjaiswal.in](mailto:rewind@shyamjaiswal.in)