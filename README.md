# Discover Denizli — Complete Offline Guide

> **The complete companion for Denizli, Türkiye** — 15 curated places from Pamukkale’s travertines to Laodicea, with interactive map, food guide, 3,000-year history, itinerary planner, route optimizer, climate, and a **natural-voice Pamukkale audio guide**. Built for tourists and locals, works 100% offline after first load.

<p align="center">
  <a href="https://flynntaggart26.github.io/denizli-guide/"><img src="https://img.shields.io/badge/Live%20Demo-Visit%20Guide-0e7490?style=for-the-badge&logo=github&logoColor=white" alt="Live"></a>
  <a href="https://www.denizli.bel.tr"><img src="https://img.shields.io/badge/Official-DBB-1e1b4b?style=for-the-badge" alt="DBB"></a>
  <img src="https://img.shields.io/badge/Stack-Vanilla_JS-f59e0b?style=flat-square" alt="Stack">
  <img src="https://img.shields.io/badge/Map-Leaflet_+_OSM-06b6d4?style=flat-square" alt="Map">
  <img src="https://img.shields.io/badge/License-MIT-1e1b4b?style=flat-square" alt="License">
</p>

<p align="center">
  <b>Live — Latest Build (v5, dark readable):</b> <a href="https://flynntaggart26.github.io/denizli-guide/">https://flynntaggart26.github.io/denizli-guide/</a><br>
  <b>Official DBB Website:</b> <a href="https://www.denizli.bel.tr">https://www.denizli.bel.tr</a> — always verify hours/prices there.<br>
  <sub>Offline-first • No tracking • No backend • <code>style.css?v=5</code> / <code>app.js?v=5</code> • Hard refresh <code>Ctrl+Shift+R</code> after update</sub>
</p>

---

## Table of Contents

- [Why This Guide Exists](#why-this-guide-exists)
- [Live Demo](#live-demo)
- [Features](#features)
- [Design — Travertine to Night](#design--travertine-to-night)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Data, Legal & Privacy](#data-legal--privacy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License & Credits](#license--credits)

---

## Why This Guide Exists

Most Denizli guides are scattered PDFs, hotel brochures, or online-only blogs that fail in Pamukkale without signal. **Discover Denizli** puts everything in one offline file: the travertines you walk barefoot, the Hierapolis theatre above them, the red springs of Karahayıt, the looms of Buldan, and the rooster that crows 30 seconds straight. Curated for a first-time visitor and for someone who lives in Denizli — with the municipality as the source of truth.

---

## Live Demo

| Discover (Map + Audio at top) | Places — Now Readable | Food & History |
|---|---|---|
| Audio guide visible without scroll, map 520px, dark filters | Dark glass cards, white title #fff, #e2e8f0 desc, gradient badges | 6 dishes + timeline + rooster |

**Open:** https://flynntaggart26.github.io/denizli-guide/ → *Tap 🎧 to hear Pamukkale, then 📍 Nearest, then Plan a 2-day route.*

---

## Features

### 🗺 Discover — 15 Places & Interactive Map

| # | Place | Category | Highlight |
|---|-------|----------|-----------|
| 1 | Pamukkale Travertines | Nature | White terraces, UNESCO |
| 2 | Hierapolis | Ancient | Theatre, necropolis |
| 3 | Laodicea | Ancient | Stadium, churches |
| 4 | Kaklık Cave | Nature | Underground travertines |
| 5 | Honaz Mountain | Nature | 2,571m, paragliding |
| 6 | Karahayıt Red Springs | Nature | Thermal red water |
| 7 | Buldan | City | Textile, historic houses |
| 8 | Sarayköy | City | Vineyards |
| 9 | Işıklı Lake (Çivril) | Nature | Lotus, bird watch |
| 10 | Teleferik & Bağbaşı | Nature | Cable car 1,400m |
| 11 | Forum Çamlık | City | Modern center |
| 12 | Tripolis (Yenicekent) | Ancient | Mosaics |
| 13 | Ağlayan Kaya | Nature | Niobe myth |
| 14 | Güney Falls | Nature | Waterfall picnic |
| 15 | Bekilli Vineyards | Food | Shiraz, Boğazkere |

- **Map:** Leaflet 1.9.4 (BSD 2-Clause) + OSM tiles (© OSM, ODbL) — 15 pins with original 1–2 sentence descriptions. No Google API, no key.
- **UX:** Search + category filter (`Ancient/Nature/City/Food`), **dark filters** (`rgba(255,255,255,.06)`, `#f1f3ff` text — *v5 fix: no more white input on dark*), click card → `map.setView(12)` + popup, **📍 Nearest** via `navigator.geolocation` + haversine, no server.
- **Climate:** 12-month avg temps for Denizli (MGM normals 1991–2020, public domain) — 12 bars, `8 + temp/30*28` height, month + °C labels.

### 🎧 Pamukkale — Complete Audio Guide (v1.1)

*Not robotic.* Generated with **Python `edge-tts`** — `tr-TR-EmelNeural` (TR, 341KB) + `en-US-JennyNeural` (EN, 297KB), Microsoft Neural, offline MP3 in `audio/`.

- Beautiful player at top of Discover: `🇹🇷 Türkçe / 🇬🇧 English` switch, `audio` controls, transcript collapsible. Script is **original** (travertine formation → Hierapolis → Cleopatra Pool → sunrise tip → `denizli.bel.tr`), 1 min, not Wikipedia.
- Files: `audio/pamukkale_tr.mp3`, `audio/pamukkale_en.mp3` + `audio/generate.py` (reproducible) + `audio/*.txt`.
- Legal: Generated audio is yours, no MP3 bundled from elsewhere, no music.

### 🥘 Food & Textile

- 6 dishes: Denizli Kebab, Keşkek, Buldan Cookie, Çal Wine, Simit, Balık Ekmek — allergens, price (TRY), filter by category.
- Note: Buldan peshtemal — buy in Buldan bazaar, not Pamukkale gate.

### 🏛 History — 3,000 Years

- Timeline: `5500 BC Laodicea → 190 BC Hierapolis → 17 AD Earthquake → 1070 Turks → 1429 Ottoman → 1919 Resistance (Müftü Ahmet Hulusi) → 1988 UNESCO`.
- Cards: **Rooster** (long-crowing breed, city symbol) + **Textile** (Laodicea looms → 70% of Turkey’s towels).

### ✈ Plan — Itinerary, Budget & Route

- **Itinerary:** 1/2/3-day templates, interests (history/nature/beach/food/balloon) → picks route, **Print** + **.ics** calendar (`BEGIN:VCALENDAR` with `VEVENT`s).
- **Budget:** travelers × days × tier (budget 600 / mid 1100 / lux 1900 TRY, avg of Pamukkale ticket 400, dolmuş 30, kebab 180).
- **Route Optimizer:** Select places → **nearest-neighbor + 2-opt** over haversine, total km, `L.polyline` on map + `fitBounds()`. Original algorithm, no Directions API.

### ℹ Essentials — Official DBB Links

- Getting there: Çardak Airport (DNZ) 65km, bus, train → [DBB Transport](https://www.denizli.bel.tr/ulasim)
- In city: dolmuş, BiTaksi, Pamukkale 20km, stay (Karahayıt thermal, Bayramyeri), emergency 112/155, useful Turkish, events → [DBB Events](https://www.denizli.bel.tr/etkinlikler)
- Hotels & culture → [DBB Culture](https://www.denizli.bel.tr/kultur-sanat)
- Legal: Map © OSM (ODbL) via Leaflet (BSD). All texts original, no Wikipedia copy. No photos bundled — use your own. Offline, MIT.

---

## Design — Travertine to Night

- **Before (light travertine):** `bg #fdfcfa`, white cards — pleasant but washed out in sun.
- **Now (Bosphorus Nights, v5):** `bg #070b1a` deep navy, cards `rgba(255,255,255,.05–.07)` glass, **place cards now readable** (`#fff` title 14px 800, `#e2e8f0` desc, gradient badges `#f59e0b→#e11d48` white text, `rgba(255,255,255,.14)` border, `box-shadow` + `backdrop-filter: blur`), filters `rgba(255,255,255,.06)` dark, hero stats white on teal/brown gradient. **No flat white left.**
- **Typography:** Fraunces 700 for headings, Inter 500/600/700 for UI, 1.65 line-height.
- **Map:** `0.9 saturate, 0.95 brightness` to match night.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | Vanilla HTML/CSS/JS, no build | Offline, single file per concern, fast |
| Map | Leaflet 1.9.4 (BSD) + OSM (ODbL) | No key, cacheable |
| Audio | `edge-tts` Python → MP3 (Emel/Jenny Neural) + `<audio>` + `SpeechSynthesis` for “Pamukkale nerede?” | Natural, not robotic, no MP3 copyright |
| Storage | `localStorage` for journal/SOS/a11y (not for this guide, but pattern) | No backend, privacy-first |
| Fonts | Fraunces + Inter via Google Fonts (OFL) | Editorial + UI |
| Icons | Emoji + CSS | Zero deps |

---

## Project Structure

```
denizli-guide/
├── index.html   # v5 cache bust, header DBB button, audio guide at top, dark filters
├── style.css    # Bosphorus Nights dark (070b1a), glass cards, readable place cards — all whites fixed
├── app.js       # debugged (duplicate timeline), dark place cards, audio switchAudio(), route, climate
├── audio/
│   ├── pamukkale_tr.mp3  # 341KB, EmelNeural
│   ├── pamukkale_en.mp3  # 297KB, JennyNeural
│   ├── pamukkale_tr.txt  # original script
│   ├── pamukkale_en.txt
│   └── generate.py       # edge-tts reproducible
└── README.md    # this file (v5)
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
- **Privacy:** No tracking, no backend. Geolocation only for Nearest, never sent. Audio plays locally.
- **Official source:** Always verify hours/prices at [https://www.denizli.bel.tr](https://www.denizli.bel.tr) — linked in header, map footer, Essentials.

---

## Roadmap

- [x] v1.0 — 15 places + map + food + history + plan
- [x] v1.1 — Pamukkale audio (neural) + dark readable + DBB links
- [ ] v1.2 — PWA + offline tile cache + AR travertine overlay

---

## License & Credits

**MIT** — fork, modify, share. Audio is yours (generated).

Built with ❤️ in Denizli — for tourists and for locals who want to show their city.

*Last update: September 2026 — v5, audio + readable dark cards.*

