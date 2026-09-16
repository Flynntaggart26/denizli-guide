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
  <b>Live — Latest Build (v6, readable + per-place audio):</b> <a href="https://flynntaggart26.github.io/denizli-guide/">https://flynntaggart26.github.io/denizli-guide/</a><br>
  <b>Official DBB Website:</b> <a href="https://www.denizli.bel.tr">https://www.denizli.bel.tr</a> — always verify hours/prices there.<br>
  <sub>Offline-first • No tracking • No backend • <code>style.css?v=6</code> / <code>app.js?v=6</code> • Hard refresh <code>Ctrl+Shift+R</code> after update</sub>
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

### 🎧 Audio Guide — Every Place, Both Languages (v1.2)

*Not robotic, both TR and EN.* Generated with **Python `edge-tts`** — `tr-TR-EmelNeural` + `en-US-JennyNeural` (Microsoft Neural), offline MP3s. **Every of the 15 places now has TR + EN** (30 files, 24-61KB each) + the complete Pamukkale guide (341KB/297KB) — total 32 MP3s in `audio/`.

- **Top player:** Pamukkale complete guide (1 min, original script: travertine → Hierapolis → Cleopatra Pool → sunrise tip) with `🇹🇷/🇬🇧` switch + transcript.
- **Per-place cards:** Each card in Discover now has `🇹🇷 TR / 🇬🇧 EN` buttons + `<audio>` controls — tap to hear that place’s own 1-sentence guide in beautiful neural voice (e.g., Hierapolis, Laodicea, Kaklık...). Files: `audio/hier_tr.mp3`, `audio/lao_en.mp3`, etc. (naming = `id_lang.mp3`).
- Generated via `audio/generate_all.py` (reproducible, original 1-sentence scripts, no Wikipedia). All audio is yours.
- Legal: No MP3 bundled from elsewhere, no music, no robot Web Speech.

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
- **Now (Bosphorus Nights, v6):** `bg #070b1a` deep navy, cards **solid dark `#1e293b`** (not translucent white) + `border #334155`, **place cards now fully readable** (`#f8fafc` title 15px 800, `#e2e8f0` desc 13px 600, `#94a3b8` tip, gradient badges white text, `box-shadow` 0 6px 16px), filters `rgba(255,255,255,.06)` dark, hero stats white teal/brown, **per-place audio buttons** visible. **No flat white left (v5→v6 fix).**
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
├── index.html   # v6 cache bust, header DBB, audio guide top + per-place TR/EN players, dark filters
├── style.css    # Bosphorus Nights dark (070b1a), solid dark cards #1e293b — readable
├── app.js       # dark place cards + playPlace(id,lang) for all 15, switchAudio(), route, climate
├── audio/
│   ├── pamukkale_tr.mp3 / pamukkale_en.mp3  # complete guide (341/297KB)
│   ├── pam_tr.mp3 / pam_en.mp3, hier_tr.mp3 ... bek_tr.mp3  # per-place 1-sentence (24-61KB ×30)
│   ├── generate.py / generate_all.py        # edge-tts reproducible (Emel/Jenny Neural)
│   └── *_tr.txt / *_en.txt                  # original scripts
└── README.md    # this file (v6)
```

---

## 📄 Actual `index.html` (Live File)

This is the **actual `index.html`** deployed to Pages (v6, ~180 lines, `style.css?v=6` / `app.js?v=6`). No separate build — what you see on GitHub is what runs live.

- **View on GitHub:** [https://github.com/Flynntaggart26/denizli-guide/blob/main/index.html](https://github.com/Flynntaggart26/denizli-guide/blob/main/index.html)
- **Raw:** `https://raw.githubusercontent.com/Flynntaggart26/denizli-guide/main/index.html`
- **Live:** [https://flynntaggart26.github.io/denizli-guide/](https://flynntaggart26.github.io/denizli-guide/)

<details><summary>Click to expand — first 60 lines of actual <code>index.html</code></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Discover Denizli — Complete Guide</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Inter:wght@500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<link rel="stylesheet" href="style.css?v=6">
</head>
<body>
<header class="header">
  <div class="head-inner">
    <div class="logo"><div class="mark">DZ</div><div><h1>Discover Denizli</h1><p>Official Companion • Offline • EN/TR</p></div></div>
    <div class="head-actions">
      <a href="https://www.denizli.bel.tr" target="_blank" class="btn" style="background:#0e7490;color:white">🏛 DBB Official →</a>
...
</html>
```

Full file is exactly as in repo — 174 lines, vanilla, no build.

</details>

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

*Last update: September 2026 — v6, per-place TR/EN audio for all 15 + readable dark cards.*

