# Discover Denizli — Complete Offline Travel Guide

> **The complete companion for Denizli, Türkiye** — 26 curated places from Pamukkale's travertines to Laodicea, monuments and statues, with interactive map, TR/EN neural audio guides, bus routes, mini tips, food guide, 5,500-year history, smart itinerary planner, budget calculator with CSV export, route optimizer with travel modes, packing checklist, and shareable plans. Built for tourists and locals, works 100% offline after first load.

<p align="center">
  <a href="https://flynntaggart26.github.io/denizli-guide/"><img src="https://img.shields.io/badge/Live%20Demo-Visit%20Guide-0e7490?style=for-the-badge&logo=github&logoColor=white" alt="Live"></a>
  <a href="https://www.denizli.bel.tr"><img src="https://img.shields.io/badge/Official-DBB-1e1b4b?style=for-the-badge" alt="DBB"></a>
  <img src="https://img.shields.io/badge/Stack-Vanilla_JS-f59e0b?style=flat-square" alt="Stack">
  <img src="https://img.shields.io/badge/Map-Leaflet_+_OSM-06b6d4?style=flat-square" alt="Map">
  <img src="https://img.shields.io/badge/License-MIT-1e1b4b?style=flat-square" alt="License">
</p>

<p align="center">
  <b>Live — Latest Build (v9, smart planner + budget CSV + route modes + packing + shareable URLs):</b> <a href="https://flynntaggart26.github.io/denizli-guide/">https://flynntaggart26.github.io/denizli-guide/</a><br>
  <b>Official DBB Website:</b> <a href="https://www.denizli.bel.tr">https://www.denizli.bel.tr</a> — always verify hours/prices there.<br>
  <sub>Offline-first • No tracking • No backend • <code>style.css?v=9</code> / <code>app.js?v=9</code> • Hard refresh <code>Ctrl+Shift+R</code> after update</sub>
</p>

---

## Table of Contents

- [Why This Guide Exists](#why-this-guide-exists)
- [Live Demo](#live-demo)
- [Features](#features)
- [Design — Bosphorus Nights](#design--bosphorus-nights)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Data, Legal & Privacy](#data-legal--privacy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License & Credits](#license--credits)

---

## Why This Guide Exists

Most Denizli guides are scattered PDFs, hotel brochures, or online-only blogs that fail in Pamukkale without signal. **Discover Denizli** puts everything in one offline file: the travertines you walk barefoot, the Hierapolis theatre above them, the red springs of Karahayıt, the looms of Buldan, the rooster that crows 30 seconds straight, and the square where the War of Independence sparked. Curated for a first-time visitor and for someone who lives in Denizli — with the municipality (DBB) as the source of truth.

---

## Live Demo

**Open:** https://flynntaggart26.github.io/denizli-guide/

- Tap 🎧 to hear Pamukkale's complete guide in Turkish or English
- Click any place card → map flies to it (zoom 13), popup opens, detail panel shows buses, tips, activities, and per-place audio
- Switch to **Plan** tab → generate a smart itinerary, calculate budget in TRY/USD/EUR, optimize a route with travel modes, get a packing list, share a URL
- Works on mobile, desktop, and — after first load — completely offline

---

## Features

### 🗺 Discover — 26 Places & Interactive Map

| # | Place | Category | Highlight |
|---|-------|----------|-----------|
| 1 | Pamukkale Travertines | Nature | White terraces, UNESCO |
| 2 | Hierapolis | Ancient | Theatre, necropolis |
| 3 | Cleopatra Pool (Hierapolis) | Ancient | Swim among Roman columns |
| 4 | St. Philip Church & Martyrium | Ancient | Apostle Philip holy site |
| 5 | Hierapolis Archaeology Museum | Ancient | Statues, sarcophagi |
| 6 | Laodicea | Ancient | Stadium, churches |
| 7 | Tripolis (Yenicekent) | Ancient | Mosaics |
| 8 | Colossae (Honaz) | Ancient | Biblical city |
| 9 | Beycesultan Mound (Çivril) | Ancient | First city, 5000 BC |
| 10 | Kaklık Cave | Nature | Underground travertines |
| 11 | Honaz Mountain | Nature | 2,571m, paragliding |
| 12 | Karahayıt Red Springs | Nature | Thermal red water |
| 13 | Işıklı Lake (Çivril) | Nature | Lotus, bird watch |
| 14 | Teleferik & Bağbaşı | Nature | Cable car 1,400m |
| 15 | Ağlayan Kaya | Nature | Niobe myth |
| 16 | Güney Falls | Nature | Waterfall picnic |
| 17 | Buldan | City | Textile, historic houses |
| 18 | Sarayköy | City | Vineyards |
| 19 | Forum Çamlık | City | Modern center |
| 20 | Kaleiçi Bazaar | City | 700-year bazaar, kebab |
| 21 | Denizli Horoz Heykeli (Delikliçınar) | Monument | City symbol statue |
| 22 | Atatürk Anıtı (Çınar) | Monument | Ceremony square |
| 23 | Bayramyeri & Müftü Ahmet Hulusi Anıtı | Monument | 1919 first resistance |
| 24 | Servergazi Türbesi & Zafer Anıtı | Monument | Seljuk memorial |
| 25 | Delikliçınar Meydanı | Monument | Historic square |
| 26 | Bekilli Vineyards | Food | Shiraz, Boğazkere |

- **Map:** Leaflet 1.9.4 (BSD 2-Clause) + OSM tiles (© OSM, ODbL) — 26 pins with original 1–2 sentence descriptions. No Google API, no key.
- **UX:** Search + category filter (`Ancient / Nature / City / Monument / Food`), click card or map pin → **smooth flyTo zoom 13 + popup**, selected card highlighted with teal border, detail panel opens with **all Denizli bus numbers**, **mini tüyo box**, activities, and **per-place TR/EN audio**. **📍 Nearest** flies to the closest place via `navigator.geolocation` + haversine, no server. Category badges color-coded (Ancient purple, Nature green, City blue, Monument amber, Food red).
- **Climate:** 12-month avg temps for Denizli (MGM normals 1991–2020, public domain) — 12 bars, month + °C labels.

### 🎧 Audio Guide — Every Place, Both Languages (v9)

*Not robotic, both TR and EN.* Generated with **Python `edge-tts`** — `tr-TR-EmelNeural` + `en-US-JennyNeural` (Microsoft Neural), offline MP3s. **All 26 places now have TR + EN** (52 files, 24-61KB each) + the complete Pamukkale guide (341KB/297KB) — total 54 MP3s in `audio/`. Each card has its own `🇹🇷 TR dinle / 🇬🇧 EN listen` buttons + player, and the detail panel auto-loads that place's TR guide. Reproducible via `audio/generate_all.py` + `audio/generate_v7.py`.

### 🥘 Food & Textile

- 12 dishes: Denizli Tandır Kebabı, Keşkek, Arap Aşı, Kale Biber Tavası, Honaz Kirazı, Acıpayam Kavunu, Buldan Cevizli Sucuk, Çal Karası & Şarabı, Babadağ Kestanesi, Tavas Baklavası, Denizli Simidi, Yenice Yoğurdu — allergens, price (TRY), filter by category + auto allergy card (TR+EN for waiters).
- 5 take-home products: Buldan Peştemali, Denizli Havlusu & Bornoz, Kale Biberi, Honaz Kiraz Kolonyası, Çal Şarabı — with local buying tips.
- Note: Buldan peshtemal — buy in Buldan bazaar, not Pamukkale gate.

### 🏛 History — 5,500 Years

- Timeline: `5500 BC Beycesultan → 261 BC Laodicea → 190 BC Hierapolis → 17 AD Earthquake → 1070 Turks → 1261 Ladik Beyliği → 1429 Ottoman → 1919 Resistance (Müftü Ahmet Hulusi) → 1988 UNESCO → 2014 Metropolitan`.
- Cards: **Rooster** (long-crowing breed, city symbol) + **Textile** (Laodicea looms → 70% of Turkey's towels).

### 🗓 Itinerary Planner — Smart & Shareable

- **Days:** 1–5, **Pace:** Relaxed (2-3/day) / Balanced (3-4/day) / Packed (5+/day)
- **Focus filters:** Multi-select Ancient / Nature / City / Monument / Food
- **Start from:** Denizli Center / Pamukkale / Çardak Airport / Custom
- **🪄 Generate Smart Plan** → day-by-day timeline with stop count, km, travel minutes, per-stop duration estimates
- **🎲 Surprise Me** → randomized plan
- **Export:** 🖨 Print / 📅 .ics Calendar / 📋 Copy as Text / 🔗 **Shareable URL** (encodes plan, days, pace, focus in `?plan=...` — recipient loads exact same plan)

### 💰 Budget Calculator — Categories + Currency + CSV

- 4 categories: Stay / Food / Transport / Tickets
- 3 styles: 💸 Budget / ⚖️ Mid / 💎 Comfort (per-day TRY rates)
- **Currency:** TRY / USD / EUR (fixed rates: 1 USD=32.5 TRY, 1 EUR=35.2 TRY)
- Breakdown table with per-day + totals + grand total
- **📊 Export CSV** for spreadsheet planning

### 🧭 Route Optimizer — Modes, Times, Save/Load

- **Travel mode:** 🚗 Car/Taxi (50 km/h) / 🚌 Dolmuş/Bus (35 km/h) / 🚶 Walk (5 km/h)
- **Start / End** dropdowns (any place or auto)
- Nearest-neighbor + 2-opt optimization
- Per-leg: distance (km) + estimated minutes
- Map: teal polyline + numbered markers, fitBounds
- **💾 Save / 📂 Load** route to localStorage

### 🎒 Packing Checklist — Auto-Generated

- Based on your plan, season, and activities
- Categories: Essentials, Clothing (summer/winter auto), Nature/Hiking, Ancient Sites, Water Activities, Tech, Optional
- Checkbox UI, **📥 Export CSV**

### 📱 Quick Actions

- One-tap Google Maps links for Pamukkale, Hierapolis, Laodicea, Kaklık, Buldan, Teleferik

---

## Design — Bosphorus Nights

- **Background:** `#070b1a` deep navy with subtle radial gradients (teal + amber)
- **Cards:** Solid dark `#1e293b` with `#334155` borders, `box-shadow: 0 6px 16px rgba(0,0,0,.28)`
- **Typography:** Fraunces 700 for headings, Inter 500/600/700 for UI, 1.65 line-height
- **Readability:** Place cards use `#f8fafc` titles (15px, 800), `#e2e8f0` descriptions (13px, 600), `#94a3b8` tips, gradient badges with white text
- **Map:** `saturate(0.9) brightness(0.95)` to match night theme
- **Accents:** Teal `#0e7490` (primary), Amber `#f59e0b` (warnings/tips), Green `#10b981` (success/budget), Purple `#8b5cf6` (ancient)

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | Vanilla HTML/CSS/JS, no build | Offline, single file per concern, fast |
| Map | Leaflet 1.9.4 (BSD) + OSM (ODbL) | No key, cacheable, works offline after tile cache |
| Audio | `edge-tts` Python → MP3 (Emel/Jenny Neural) + `<audio>` + `SpeechSynthesis` | Natural, not robotic, no MP3 copyright |
| Storage | `localStorage` for saved routes, plans | No backend, privacy-first |
| Fonts | Fraunces + Inter via Google Fonts (OFL) | Editorial + UI |
| Icons | Emoji + CSS | Zero deps |

---

## Project Structure

```
denizli-guide/
├── index.html   # v9 cache bust, header DBB, audio guide top + per-place TR/EN players, Plan tab v2
├── style.css    # Bosphorus Nights dark (070b1a), solid dark cards #1e293b — readable
├── app.js       # 26 places, focusPlace zoom-13, smart planner, budget CSV, route modes, packing, share URL
├── audio/
│   ├── pamukkale_tr.mp3 / pamukkale_en.mp3  # complete guide (341/297KB)
│   ├── *_tr.mp3 / *_en.mp3 for all 26 ids   # per-place 1-2 sentences (24-61KB ×52)
│   ├── generate.py / generate_all.py / generate_v7.py  # edge-tts reproducible (Emel/Jenny Neural)
│   └── *_tr.txt / *_en.txt                  # original scripts
└── README.md    # this file (v9)
```

---

## Getting Started

```bash
git clone https://github.com/Flynntaggart26/denizli-guide.git
cd denizli-guide
open index.html
# or: python -m http.server 8000
```

Live: **https://flynntaggart26.github.io/denizli-guide/** (GitHub Pages, `main` → `/`).

---

## Data, Legal & Privacy

- **Map tiles:** © OpenStreetMap contributors (ODbL) — attribution in footer + map.
- **Leaflet:** BSD 2-Clause.
- **Audio:** Generated via `edge-tts` (Microsoft Neural) from **original script** — no Wikipedia, no music, no stock audio. Files are yours to keep.
- **Descriptions:** Original, 1–2 sentences, no copy.
- **Climate:** MGM 1991–2020 normals, public domain, original bars.
- **Privacy:** No tracking, no backend. Geolocation only for Nearest, never sent. Audio plays locally. Plans/routes saved to your browser only.
- **Official source:** Always verify hours/prices at [https://www.denizli.bel.tr](https://www.denizli.bel.tr) — linked in header, map footer, Essentials.

---

## Roadmap

- [x] v1.0 — 15 places + map + food + history + plan
- [x] v1.1 — Pamukkale audio (neural) + dark readable + DBB links
- [x] v7 — 26 places + Monument category, empty-list bug fix, README sync
- [x] v8 — per-place TR/EN audio for all 26, focusPlace zoom-13, bus numbers + mini tips
- [x] v9 — Smart itinerary planner, budget breakdown+CSV, route optimizer with modes/time/save, packing list, shareable URLs
- [ ] v1.2 — PWA + offline tile cache + AR travertine overlay + weather widget + multi-language UI

---

## Contributing

Contributions welcome! Especially:

- New place data (coords, buses, tips, activities)
- Audio script improvements (TR/EN)
- Budget rate updates
- Translations (DE, FR, RU, AR…)
- Bug fixes / UI polish

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-idea`
3. Edit `index.html`, `app.js`, or add audio scripts
4. Test by opening `index.html` locally
5. Commit and open a Pull Request

Small, focused PRs are best.

---

## License & Credits

**MIT** — fork, modify, share. Audio is yours (generated).

Built with ❤️ in Denizli — for tourists and for locals who want to show their city.

*Last update: September 2026 — v9, smart planner, budget CSV, route modes, packing, shareable URLs, full TR/EN audio for all 26 places.*