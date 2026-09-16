# Discover Denizli — Complete Guide

> Complete offline guide for Denizli, Türkiye: 15 places, Pamukkale & Hierapolis, Laodicea, Kaklik Cave, local food, history timeline, map, itineraries & budget. Built for tourists and locals.

**Live:** https://flynntaggart26.github.io/denizli-guide/ · **Official:** [denizli.bel.tr](https://www.denizli.bel.tr) (Denizli Büyükşehir Belediyesi) · **Stack:** Vanilla HTML/CSS/JS + Leaflet (BSD) · **Offline:** localStorage, no backend

---

## Features

### 🗺 Discover — 15 Places & Map
- **Map:** Leaflet + OSM (ODbL) — 15 pins: Pamukkale, Hierapolis, Laodicea, Kaklık Cave, Honaz, Karahayıt, Buldan, Sarayköy, Işıklı Lake, Teleferik, Forum Çamlık, Tripolis, Ağlayan Kaya, Güney Falls, Bekilli
- Search + category filter, click → fly to pin, **📍 Nearest** via geolocation + haversine
- **Climate:** 12-month avg temps for Denizli (MGM normals, public domain) — bar chart

### 🥘 Food
- 6 dishes: Denizli Kebab, Keşkek, Buldan Cookie, etc. with allergens & price, filter by category
- Textile note: Buldan peshtemal — buy in Buldan bazaar

### 🏛 History
- Timeline 5500 BC → 1988 UNESCO, plus Rooster & Textile heritage cards

### ✈ Plan
- **Itinerary:** 1/2/3-day templates, interests (history/nature/beach/food/balloon) → route, **Print** + **.ics** calendar
- **Budget:** travelers × days × tier (avg 600/1100/1900 TRY)
- **Route Optimizer:** pick places → nearest-neighbor + 2-opt, total km, polyline on map

### ℹ Essentials — with Official DBB Links
- Getting there (Çardak Airport, bus, train) → [DBB Transport](https://www.denizli.bel.tr/ulasim), in-city (dolmuş, BiTaksi), stay, emergency 112/155, useful Turkish, events → [DBB Events](https://www.denizli.bel.tr/etkinlikler) (Rooster Festival etc.)
- Hotels & culture → [DBB Culture](https://www.denizli.bel.tr/kultur-sanat) · Map footer links to [denizli.bel.tr](https://www.denizli.bel.tr) for verification
- **UI Fix v1.0.1:** Hero stats now clearly visible (1M+ / 2,200 / 19 / 🐓), map-card fixed (520px + border), travertine polish, header `🏛 DBB Official →` button
- Legal: Map © OSM (ODbL) via Leaflet (BSD 2-Clause). All texts original, no Wikipedia copy. No photos bundled. Offline, MIT.

---

## Project structure

```
denizli-guide/
├── index.html
├── style.css  # travertine white + turquoise, Fraunces headings
├── app.js
└── README.md
```

## Getting started

```bash
git clone https://github.com/Flynntaggart26/denizli-guide.git
cd denizli-guide
open index.html
```

## License

MIT — made in Denizli with ❤️
