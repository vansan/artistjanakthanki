# 🪷 Adwait Art — Spiritual Artist Portfolio & Store

> *"Art from Silence — Inspired by Meditation & Consciousness"*

A premium spiritual artist portfolio and e-commerce website for **Swami Anand Atirek** ([@adwait.art](https://www.instagram.com/adwait.art/)), a Vadodara-based spiritual artist with 28+ years of mastery.

---

## ✨ Features

### Pages
| Page | Description |
|------|-------------|
| **Home** | Hero banner, featured artworks, art categories, about strip, commission CTA, newsletter |
| **Gallery** | Masonry grid with search, category filters, artwork modal with details |
| **Shop** | E-commerce grid with add-to-cart, wishlist, quick-view, filter by type |
| **Digital Downloads** | Printable wall art, meditation posters, mobile wallpapers, bundles |
| **About** | Artist biography, skills, philosophy, journey |
| **Commission** | Custom artwork request form + 5-step process guide |
| **Blog** | SEO-friendly spiritual blog posts |
| **Contact** | Contact form, WhatsApp button, social links |

### Functionality
- 🛒 Shopping cart sidebar with running total
- 🔍 Artwork search & category filters
- 🖼️ Artwork detail modal (pop-up)
- 📱 Fully responsive / mobile-first
- ✨ Scroll-reveal animations
- 💬 WhatsApp commission & checkout integration
- 📧 Newsletter signup
- ⬆️ Back-to-top button
- 🔔 Toast notifications

---

## 🎨 Design

| Token | Value |
|-------|-------|
| Primary Font | Cormorant Garamond (serif) |
| Body Font | Jost (sans-serif) |
| White | `#FAFAF7` |
| Cream | `#F5F0E8` |
| Gold | `#C9A96E` |
| Dark | `#2A2520` |

---

## 🗂️ Project Structure

```
artistjanakthanki/
├── index.html              # Main SPA — all 8 pages
├── styles.css              # Design system & all styles
├── app.js                  # All JavaScript logic
├── images/
│   ├── hero_artwork.png    # Lotus sacred geometry painting
│   ├── meditation_art.png  # Chakra consciousness canvas
│   ├── stone_art_krishna.png
│   ├── ram_sita_stone.png
│   ├── henna_art.png
│   ├── sketch_art.png
│   ├── wood_carving_radha.png
│   ├── digital_mandala.png
│   └── artist_profile.png
└── spiritual-artist-portfo.md   # Project spec
```

---

## 🚀 Running Locally

No build step required — pure HTML/CSS/JS.

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve locally (recommended for relative paths)
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

---

## ✏️ Customisation Checklist

- [ ] **WhatsApp number** — update `wa.me/919999999999` in `index.html` & `app.js`
- [ ] **Email address** — update `adwait.art@gmail.com` placeholder
- [ ] **Artwork prices** — edit the `artworks` array in `app.js`
- [ ] **Add more artworks** — push new objects into the `artworks` array
- [ ] **Payment gateway** — wire up Razorpay/Stripe to the checkout flow

---

## 📸 Art Categories

- Stone / Pebble Art
- Spiritual & Meditation Art
- Pencil Sketches
- Henna / Mehndi Art
- Wood Carving
- Digital Art & Mandalas

---

## 🙏 Artist

**Swami Anand Atirek**  
28 years of devotional artistry · Vadodara, Gujarat, India  
Instagram: [@adwait.art](https://www.instagram.com/adwait.art/)

---

*Built with pure HTML, CSS & JavaScript. No frameworks, no dependencies.*
