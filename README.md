# Discover Denizli — Complete Guide

> Complete offline guide for Denizli, Türkiye: 15 places, Pamukkale & Hierapolis, Laodicea, Kaklik Cave, local food, history timeline, map, itineraries & budget. Built for tourists and locals.

**Live:** https://flynntaggart26.github.io/denizli-guide/ · **Official DBB Website:** [https://www.denizli.bel.tr](https://www.denizli.bel.tr) (Denizli Büyükşehir Belediyesi) · **Stack:** Vanilla HTML/CSS/JS + Leaflet (BSD) · **Offline:** localStorage, no backend

> **Actual DBB link:** `https://www.denizli.bel.tr` — click above to verify hours, prices, events on the official municipality site (also linked in header button, map footer, and Essentials).

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
- **UI Fix v1.1.0 (dark):** Hero stats visible, map-card fixed, **all whites → dark glass** (place cards, filters, search are now `rgba(255,255,255,.05)` with light text `#f1f3ff`/`#cbd5e1`, no flat white left), Bosphorus Nights dark theme
- Legal: Map © OSM (ODbL) via Leaflet (BSD 2-Clause). All texts original, no Wikipedia copy. No photos bundled. Offline, MIT.

---

## 🔗 Official Links

| Link | URL |
|------|-----|
| **Live Demo (this guide)** | [https://flynntaggart26.github.io/denizli-guide/](https://flynntaggart26.github.io/denizli-guide/) |
| **DBB Official Website** | [https://www.denizli.bel.tr](https://www.denizli.bel.tr) |
| **DBB Transport** | [https://www.denizli.bel.tr/ulasim](https://www.denizli.bel.tr/ulasim) |
| **DBB Culture** | [https://www.denizli.bel.tr/kultur-sanat](https://www.denizli.bel.tr/kultur-sanat) |
| **DBB Events** | [https://www.denizli.bel.tr/etkinlikler](https://www.denizli.bel.tr/etkinlikler) |

## Project structure

```
denizli-guide/
├── index.html   # v4 cache bust, dark filters, DBB links
├── style.css    # dark Bosphorus Nights (070b1a), glass cards — all whites fixed
├── app.js       # debugged (duplicate timeline), dark place cards + filters
└── README.md    # + Official Links table + DBB
```

## Getting started

```bash
git clone https://github.com/Flynntaggart26/denizli-guide.git
cd denizli-guide
open index.html
```

## License

MIT — made in Denizli with ❤️
