# Discover Denizli — Complete Offline Travel Guide

> **The complete companion for Denizli, Türkiye** — 26 curated places from Pamukkale's travertines to Laodicea, monuments and statues, with interactive map, TR/EN neural audio guides, bus routes, mini tips, food guide, 5,500-year history, smart itinerary planner, budget calculator with CSV export, route optimizer with travel modes, packing checklist, and shareable plans. Built for tourists and locals, works 100% offline after first load.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Guide-0e7490?style=for-the-badge&logo=github&logoColor=white)](https://flynntaggart26.github.io/denizli-guide/)
[![Official DBB](https://img.shields.io/badge/Official-DBB-1e1b4b?style=flat-square)](https://www.denizli.bel.tr)
[![Stack](https://img.shields.io/badge/Stack-Vanilla_JS-f59e0b?style=flat-square)](app.js)
[![Map](https://img.shields.io/badge/Map-Leaflet_+_OSM-06b6d4?style=flat-square)](https://leafletjs.com/)
[![License](https://img.shields.io/badge/License-MIT-1e1b4b?style=flat-square)](LICENSE)

**Live:** https://flynntaggart26.github.io/denizli-guide/  
**Official DBB:** https://www.denizli.bel.tr — always verify hours/prices there.  
**Stack:** Vanilla HTML/CSS/JS · Leaflet 1.9.4 + OpenStreetMap · `edge-tts` neural audio · No backend · No tracking

---

## Why this guide exists

I grew up in Denizli. One summer afternoon at the ancient theatre in Hierapolis, a tourist asked me questions about the city I couldn't answer. That moment stuck. I built this so visitors (and locals) can find Denizli's culture, history, and food in one place — free, offline, and without needing a signal in Pamukkale.

It also grew from family history: my late grandfather ran a restaurant here, so the food section carries Denizli dishes with real allergen warnings. A close friend once had a walnut reaction from cookies I made without knowing — that taught me to label allergens properly in the app.

---

## Features

### 🗺 Discover — 26 Places & Interactive Map

| Category | Places |
|----------|--------|
| Ancient | Pamukkale Travertines, Hierapolis, Cleopatra Pool, St. Philip Church, Archaeology Museum, Laodicea, Tripolis, Colossae, Beycesultan Mound |
| Nature | Kaklık Cave, Honaz Mountain, Karahayıt Red Springs, Işıklı Lake, Teleferik & Bağbaşı, Ağlayan Kaya, Güney Falls |
| City | Buldan, Sarayköy, Forum Çamlık, Kaleiçi Bazaar |
| Monument | Denizli Rooster Statue, Atatürk Monument, Bayramyeri, Servergazi Tomb, Delikliçınar Square |
| Food | Bekilli Vineyards |

- **Map:** Leaflet 1.9.4 + OSM tiles — no Google API key, no key of any kind.
- Click any place card → map flies to it (zoom 13), popup opens, detail panel shows **Denizli bus numbers**, mini tips, activities, and per-place TR/EN audio.
- **📍 Nearest:** uses browser geolocation + haversine distance, runs entirely client-side.
- Climate bars: 12-month average temperatures for Denizli (MGM 1991–2020 normals, public domain).

### 🎧 Audio Guide — TR + EN (Neural, offline)

Generated locally with Python `edge-tts` (`tr-TR-EmelNeural` + `en-US-JennyNeural`), saved as MP3s in `audio/`. The main Pamukkale guide (~300 KB each language) plus per-place guides play without internet.

> ⚠️ **Known issue:** `audio/philip_tr.mp3` is currently empty (0 bytes). Turkish audio for St. Philip Church will not play until it is regenerated. All other places have working TR + EN audio.

### 🥘 Food & Textile

- 12 Denizli dishes (tandır kebabı, keşkek, arap aşı, kale biber tavası, honaz kirazı, acıpayam kavunu, buldan cevizli sucuk, çal karası & şarabı, babadağ kestanesi, tavas baklavası, denizli simidi, yenice yoğurdu) — each with **allergens**, price range, and a warning note.
- 5 take-home products (buldan peştemali, denizli havlu & bornoz, kale biberi, honaz kiraz kolonyası, çal şarabı).
- **Allergy card:** filter food categories and an auto-generated TR+EN allergy card appears — show it to a waiter.

### 🏛 History — 5,500 Years

Original timeline from Beycesultan Höyüğü (~5000 BC) through Laodicea, Hierapolis, Selçuklu/Ladik Beyliği, Ottoman textile era, 1919 resistance at Bayramyeri, UNESCO 1988, and Büyükşehir 2014. All text is original, not copied from Wikipedia.

### 🗓 Smart Itinerary Planner

- 1–5 days, pace (relaxed / balanced / packed), multi-select focus filters.
- Start from Denizli Center / Pamukkale / Çardak Airport / Custom.
- **Generate Smart Plan** → day-by-day timeline with stop count, km, travel minutes.
- **🎲 Surprise Me**, print, export `.ics` calendar, copy as text, **shareable URL** (encodes plan in `?plan=...`).

### 💰 Budget Calculator

- Categories: Stay / Food / Transport / Tickets.
- Styles: Budget / Mid / Comfort.
- Currency: TRY / USD / EUR with CSV export.
- ⚠️ Rates are hardcoded (1 USD = 32.5 TRY, 1 EUR = 35.2 TRY) — update `RATES` in `app.js` before relying on it for real budgeting.

### 🧭 Route Optimizer

- Travel mode: Car/Taxi (50 km/h) / Dolmuş-Bus (35 km/h) / Walk (5 km/h).
- Nearest-neighbor + 2-opt optimization, teal polyline on map, per-leg km + minutes.
- Save / load route to `localStorage`.

### 🎒 Packing Checklist

- Auto-generated from your plan, season, and activities (essentials, clothing, nature, ancient sites, water, tech, optional).
- CSV export.

### 📱 Quick Actions

- One-tap Google Maps links for Pamukkale, Hierapolis, Laodicea, Kaklık, Buldan, Teleferik.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | Vanilla HTML/CSS/JS, no build | Offline, single file per concern, fast |
| Map | Leaflet 1.9.4 (BSD) + OSM (ODbL) | No key, cacheable, offline after tile cache |
| Audio | Python `edge-tts` → MP3 (Emel/Jenny Neural) | Natural voices, no MP3 copyright issues |
| Storage | `localStorage` (saved routes, plans) | No backend, privacy-first |
| Fonts | Fraunces + Inter (Google Fonts, OFL) | Editorial + UI |

---

## Project Structure

```
denizli-guide/
├── index.html   # Shell: header, DBB link, audio bar, Discover/Food/History/Plan/Essentials tabs
├── style.css    # "Bosphorus Nights" dark theme (#070b1a navy, teal/amber accents)
├── app.js       # 26 places, Leaflet map, planner, budget, route optimizer, packing, share URLs
├── audio/
│   ├── pamukkale_tr.mp3 / pamukkale_en.mp3   # complete guide (~300 KB each)
│   ├── *_tr.mp3 / *_en.mp3  for all 26 place IDs (per-place 1-2 sentences)
│   ├── pamukkale_tr.txt / pamukkale_en.txt   # original scripts (only Pamukkale has TXT sources)
│   ├── generate.py / generate_all.py / generate_v7.py  # edge-tts reproducible scripts
│   └── philip_tr.mp3  # ⚠️ currently 0 bytes — needs regeneration
└── README.md    # this file (v9)
```

---

## Getting Started

```bash
git clone https://github.com/Flynntaggart26/denizli-guide.git
cd denizli-guide
open index.html
# or serve locally:
python -m http.server 8000   # then visit http://localhost:8000
```

**Live:** https://flynntaggart26.github.io/denizli-guide/ (GitHub Pages, `main` → `/`)

---

## Data, Legal & Privacy

- **Map tiles:** © OpenStreetMap contributors (ODbL). Attribution in footer + map.
- **Leaflet:** BSD 2-Clause.
- **Audio:** Generated via `edge-tts` (Microsoft Neural) from original scripts — no Wikipedia, no music, no stock audio.
- **Descriptions:** Original, 1–2 sentences per place. History text is original.
- **Climate:** MGM 1991–2020 normals, public domain.
- **Privacy:** No tracking, no backend. Geolocation used only for "Nearest me" and never leaves the browser. Plans/routes saved to your browser only.
- **Official source:** Always verify hours/prices at https://www.denizli.bel.tr

---

## Roadmap

- [x] v1.0 — 15 places + map + food + history + plan
- [x] v1.1 — Pamukkale audio (neural) + dark readable + DBB links
- [x] v7 — 26 places + Monument category, empty-list bug fix, README sync
- [x] v8 — per-place TR/EN audio for all 26, focusPlace zoom-13, bus numbers + mini tips
- [x] v9 — Smart itinerary planner, budget breakdown+CSV, route optimizer with modes/time/save, packing list, shareable URLs
- [ ] v1.2 — Fix empty `philip_tr.mp3`, add TXT scripts for all places, dynamic exchange rates, PWA + offline tile cache

---

## Contributing

Contributions welcome — especially:

- Regenerating `audio/philip_tr.mp3` (and adding TXT scripts for all places)
- New place data (coords, buses, tips, activities)
- Budget rate updates (fix hardcoded USD/EUR)
- Translations (DE, FR, RU, AR…)
- Bug fixes / UI polish

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-idea`
3. Edit `index.html`, `app.js`, or add audio scripts
4. Test by opening `index.html` locally (serve over HTTP for audio)
5. Commit and open a Pull Request

---

## License & Credits

**MIT** — fork, modify, share. Audio is yours (generated).

Built with ❤️ in Denizli — for tourists and for locals who want to show their city.

*Last update: September 2026 — v9, smart planner, budget CSV, route modes, packing, shareable URLs, full TR/EN audio for 25 of 26 places.*
