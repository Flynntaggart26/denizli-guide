const places=[
  // --- MUST-SEE: UNESCO + Antik ---
  {id:'pam', name:'Pamukkale Travertines', cat:'Nature', lat:37.9249, lon:29.1214, desc:'White calcium terraces, UNESCO. Walk barefoot, swim in Cleopatra Pool.', tip:'Sunrise, no shoes.', buses:['Pamukkale (301, 300) • Denizli Otogar → Pamukkale every 15 min','Karahayıt (270)'], activities:['Walk travertines barefoot','Swim Cleopatra Pool','Photo at sunrise']},
  {id:'hier', name:'Hierapolis Ancient City', cat:'Ancient', lat:37.9255, lon:29.1260, desc:'Roman city above travertines, theatre and necropolis.', tip:'Combo ticket with Pamukkale.', buses:['Pamukkale (301) — same as travertines, walk up'], activities:['Theatre','Necropolis','Archaeology Museum']},
  {id:'cleo', name:"Cleopatra Pool (Hierapolis)", cat:'Ancient', lat:37.9271, lon:29.1278, desc:'Swim among fallen Roman columns in 35°C thermal water.', tip:'Bring swimsuit + towel, extra fee.', buses:['Pamukkale (301) • inside Hierapolis'], activities:['Swim with columns','Thermal bath','Photos']},
  {id:'philip', name:'St. Philip Church & Martyrium', cat:'Ancient', lat:37.9290, lon:29.1250, desc:'One of Christianity’s oldest holy sites — tomb of Apostle Philip.', tip:'Uphill walk from theatre.', buses:['Pamukkale (301) • inside Hierapolis, follow signs'], activities:['Martyrium','Church','Viewpoint']},
  {id:'museum', name:'Hierapolis Archaeology Museum', cat:'Ancient', lat:37.9235, lon:29.1265, desc:'Roman baths turned museum — statues, sarcophagi, Laodicea finds.', tip:'Best at midday heat.', buses:['Pamukkale (301) • inside site'], activities:['Statues','Sarcophagi','Bath building']},
  {id:'lao', name:'Laodicea', cat:'Ancient', lat:37.8371, lon:29.1079, desc:'Ancient trade city, churches and stadium.', tip:'10km from Denizli center.', buses:['Laodicea (260) • City → Eskihisar','Minibus from Otogar'], activities:['Stadium','Church','Ancient street']},
  {id:'tri', name:'Tripolis (Yenicekent)', cat:'Ancient', lat:38.0500, lon:28.5800, desc:'Lydian-Roman city, mosaics.', tip:'North, near Buldan.', buses:['Buldan (720) + walk 2km or taxi'], activities:['Mosaics','Agora','Quiet ruins']},
  {id:'colossae', name:'Colossae Ancient City (Honaz)', cat:'Ancient', lat:37.7850, lon:29.2560, desc:'Biblical city mentioned in the New Testament — mound + ruins.', tip:'Combine with Honaz.', buses:['Honaz (110) + taxi 6km'], activities:['Mound','History stop','Photos']},
  {id:'beyce', name:'Beycesultan Mound (Çivril)', cat:'Ancient', lat:38.2470, lon:29.7390, desc:'Denizli’s first city — 40 layers from 5000 BC.', tip:'Archaeology lovers must.', buses:['Çivril (760) • + taxi to mound'], activities:['Mound','Museum info','History']},
  // --- DOĞA / GEZİLECEK ---
  {id:'kak', name:'Kaklık Cave', cat:'Nature', lat:37.8360, lon:29.4340, desc:'Underground Pamukkale — travertine cave with pool.', tip:'30km east, less crowded.', buses:['Kaklık (210) • Honaz-Kaklık minibus'], activities:['Cave walk','Pool','Photo with stalactites']},
  {id:'hon', name:'Honaz Mountain', cat:'Nature', lat:37.6810, lon:29.2760, desc:'Highest in Aegean (2571m), paragliding and hiking.', tip:'Spring wildflowers.', buses:['Honaz (110) • City → Honaz','Paragliding shuttle'], activities:['Hike to summit','Paragliding','Picnic']},
  {id:'kar', name:'Karahayıt Red Springs', cat:'Nature', lat:37.9630, lon:29.0740, desc:'Red thermal springs, spa hotels.', tip:'Stay for thermal.', buses:['Karahayıt (270) • Pamukkale line'], activities:['Red water photo','Thermal bath','Spa']},
  {id:'civ', name:'Işıklı Lake (Çivril)', cat:'Nature', lat:38.2240, lon:29.8900, desc:'Lotus lake, bird watching, boat tour.', tip:'July lotus bloom.', buses:['Çivril (760) • Denizli → Çivril 1h15'], activities:['Lotus boat','Bird watch','Sunset']},
  {id:'cam', name:'Denizli Teleferik & Bağbaşı', cat:'Nature', lat:37.7420, lon:29.0710, desc:'Cable car to 1400m, city view.', tip:'Sunset ride.', buses:['Bağbaşı (120, 130, 150) • Bayramyeri → Teleferik','Teleferik shuttle'], activities:['Cable car','Bağbaşı plateau','Paragliding','Zipline','Evening tea']},
  {id:'aga', name:'Ağlayan Kaya', cat:'Nature', lat:37.8600, lon:29.3200, desc:'Mythological Niobe rock, Honaz foothills.', tip:'Hiking stop.', buses:['Honaz (110) + taxi 5km'], activities:['Hiking','Myth photo','Forest']},
  {id:'gun', name:'Güney Falls', cat:'Nature', lat:38.1500, lon:29.0500, desc:'Waterfall and picnic, cool in summer.', tip:'Family picnic.', buses:['Güney (730) • Denizli → Güney 1h'], activities:['Waterfall','Picnic','Cool air']},
  // --- ŞEHİR / GEZİLMESİ GEREKEN ---
  {id:'bul', name:'Buldan', cat:'City', lat:38.0450, lon:28.8290, desc:'Textile town, historic houses, peshtemal.', tip:'Buy Buldan cloth.', buses:['Buldan (720) • Denizli Otogar → Buldan 1h'], activities:['Historic houses','Weaving workshop','Bazaar']},
  {id:'sar', name:'Sarayköy', cat:'City', lat:37.9250, lon:28.9250, desc:'Vineyards and old train station.', tip:'Wine tasting.', buses:['Sarayköy (310) • Train Denizli → Sarayköy 20min'], activities:['Vineyard tour','Train station','Wine']},
  {id:'for', name:'Forum Çamlık', cat:'City', lat:37.7830, lon:29.0850, desc:'Modern center, cafes and shopping.', tip:'Evening walk.', buses:['All city buses to Çınar / Bayramyeri — 100, 101, 102'], activities:['Cafe','Shopping','Cinema']},
  {id:'kaleici', name:'Kaleiçi Bazaar', cat:'City', lat:37.7760, lon:29.0880, desc:'700-year-old covered bazaar — kebab, copper, textiles.', tip:'Lunch: Tandır Kebab.', buses:['All Çınar / Bayramyeri buses'], activities:['Bazaar walk','Kebab','Souvenirs']},
  // --- ANIT & HEYKEL / TARİHSEL ŞEHİR NOKTALARI ---
  {id:'horoz', name:'Denizli Horoz Heykeli (Delikliçınar)', cat:'Monument', lat:37.7765, lon:29.0875, desc:'Symbol of the city — world-famous long-crowing rooster statue.', tip:'Photo stop, city center.', buses:['All city center buses • Delikliçınar stop'], activities:['Photo','City square','Evening walk']},
  {id:'ataturk', name:'Atatürk Anıtı (Çınar)', cat:'Monument', lat:37.7810, lon:29.0830, desc:'Main Atatürk monument and ceremony square.', tip:'Republic Day ceremonies.', buses:['Çınar buses 100, 101, 102'], activities:['Monument','Square','Photos']},
  {id:'bayram', name:'Bayramyeri & Müftü Ahmet Hulusi Anıtı', cat:'Monument', lat:37.7750, lon:29.0940, desc:'Where the first resistance call of 1919 was made — Milli Mücadele’nin ilk kıvılcımı.', tip:'Historical must-see.', buses:['Bayramyeri buses • walkable from Kaleiçi'], activities:['Monument','History stop','Mosque square']},
  {id:'server', name:'Servergazi Türbesi & Zafer Anıtı', cat:'Monument', lat:37.7890, lon:29.0610, desc:'Seljuk commander Servergazi tomb + martyrdom memorial.', tip:'Quiet, spiritual stop.', buses:['Servergazi / Karahasanlı minibuses'], activities:['Tomb visit','Memorial','View']},
  {id:'delikli', name:'Delikliçınar Meydanı', cat:'Monument', lat:37.7775, lon:29.0865, desc:'Historic square — heart of modern Denizli, events and fountains.', tip:'Start city walking tour here.', buses:['All center buses'], activities:['Square','Fountains','Cafes']},
  {id:'bek', name:'Bekilli Vineyards', cat:'Food', lat:38.2300, lon:29.4200, desc:'Wine route, Shiraz and Boğazkere.', tip:'Autumn harvest.', buses:['Bekilli (740) • Çal-Bekilli minibus'], activities:['Wine tasting','Vineyard walk','Harvest Sep-Oct']},
];
const foods=[
  {name:'Denizli Tandır Kebabı', desc:'Kuzunun tandırda 6 saat odun ateşinde pişmesi — Denizli’nin en meşhur yemeği. Bayramyeri ve Kaleiçi’nde her lokantada var.', allergens:['meat'], price:'220-320 TRY', cat:'Kebab', note:'Vejetaryen/vegan için uygun değil. Et alerjisi olanlar kaçınmalı.'},
  {name:'Denizli Keşkeği', desc:'Düğünlerin baş tacı — buğday ve etin saatlerce dövülmesiyle yapılır, üzerine kızarmış tereyağı ve biber.', allergens:['gluten','dairy','meat'], price:'90-130 TRY', cat:'Pilav', note:'Gluten (buğday) ve süt ürünleri içerir — çölyak ve laktoz intoleransı olanlar için uygun değil.'},
  {name:'Arap Aşı / Çaput Aşı', desc:'Kışın iç ısıtan Tavaz yemeği — tavuk suyu, hamur ve bol acı biber.', allergens:['gluten','meat','egg'], price:'70-100 TRY', cat:'Çorba', note:'Yumurta ve gluten içerir — yumurta alerjisi ve çölyak dikkat.'},
  {name:'Kale Biber Tavası', desc:'Kale’nin coğrafi işaretli tatlı-acı biberi, domates ve etle tavada.', allergens:['meat'], price:'80-110 TRY', cat:'Sebze', note:'Acı hassasiyeti olanlar için orta acılı isteyin. Vejetaryen versiyonu istenebilir.'},
  {name:'Honaz Kirazı', desc:'Haziran’da Honaz ovasından — iri, sulu, dünyaca ünlü. Mevsiminde tezgahlar dolup taşar.', allergens:[], price:'60-100 TRY/kg', cat:'Meyve', note:'Meyve alerjisi nadir ama polen alerjisi olanlar dikkat — taze ve yıkanmış tüketin.'},
  {name:'Acıpayam Kavunu', desc:'Temmuz-Ağustos’un tatlı kavunu, Acıpayam ovasından. Kokusu kesilmeden anlaşılır.', allergens:[], price:'30-50 TRY', cat:'Meyve', note:'Kavun alerjisi (lateks çapraz) olanlar dikkatli olmalı.'},
  {name:'Buldan Cevizli Sucuk & Kurabiye', desc:'Ceviz ve üzüm pekmezinin buluşması — Buldan’ın kış tatlısı.', allergens:['nuts','gluten','dairy'], price:'50-80 TRY', cat:'Tatlı', note:'Ceviz/fındık alerjisi olanlar kesinlikle tüketmemeli — eser miktarda fındık bulaşması olabilir.'},
  {name:'Çal Karası & Şarabı', desc:'Denizli’ye özgü üzüm — Shiraz ve Boğazkere ile karıştırılır, Çal bağlarında tadım.', allergens:['sulfite','alcohol'], price:'250-450 TRY/şişe', cat:'İçecek', note:'Sülfit ve alkol içerir — alkol hassasiyeti ve hamileler için uygun değil. 18+.'},
  {name:'Babadağ Kestanesi', desc:'Sonbaharda kavrulmuş kestane, Honaz ve Babadağ ormanlarından.', allergens:['nuts'], price:'80-120 TRY/kg', cat:'Kuruyemiş', note:'Kestane, fındık ailesi — kuruyemiş alerjisi olanlar dikkat.'},
  {name:'Tavas Baklavası', desc:'Kat kat yufka, taze tereyağı ve cevizle Denizli usulü.', allergens:['nuts','gluten','dairy'], price:'300-450 TRY/kg', cat:'Tatlı', note:'Gluten, süt ve ceviz içerir — üç alerjen bir arada, etiket okuyun.'},
  {name:'Denizli Simidi', desc:'Sokak simidi, susamlı ve gevrek — sabah çayı ile.', allergens:['gluten','sesame'], price:'15-25 TRY', cat:'Atıştırmalık', note:'Susam ve gluten içerir — susam alerjisi olanlar için riskli.'},
  {name:'Yenice Yoğurdu', desc:'Yenicekent’in manda yoğurdu, kaymaklı.', allergens:['dairy'], price:'60-90 TRY/kg', cat:'Süt', note:'Süt alerjisi ve laktoz intoleransı olanlar için uygun değil.'},
];
const recommendedProducts=[
  {name:'Buldan Peştemali', desc:'El tezgahında dokunan, %100 pamuk — hamam ve plaj için. UNESCO adayı zanaat.', price:'150-400 TRY', tip:'Buldan çarşısından alın, Pamukkale kapısından değil — %30 ucuz, orijinal.'},
  {name:'Denizli Havlusu & Bornoz', desc:'Dünya havlusunun %70’i Denizli’den — Babadağ ve Organize Sanayi. Pamuk, bambu, hızlı kuruyan.', price:'200-600 TRY', tip:'Havlu dokuma atölyesini ziyaret edin, etiketinde “Buldan” arayın.'},
  {name:'Kale Biberi (Kurutulmuş)', desc:'Coğrafi işaretli, tatlı-acı dengeli — mutfağa götürmelik hediye.', price:'80-150 TRY/kg', tip:'Vakumlu pakette alın, gümrükte sorun yok.'},
  {name:'Honaz Kiraz Kolonyası', desc:'Kiraz çiçeği esanslı kolonya — Denizli’nin kokusu.', price:'40-70 TRY', tip:'Hediyelik, sıvı olduğu için uçakta bagaja verin.'},
  {name:'Çal Şarabı (Şişe)', desc:'Çal Karası üzümünden — yerel üretici, butik şaraphane. Gümrüklü götürülebilir.', price:'250-450 TRY', tip:'Şaraphane tadımı ücretsiz, kargo ile de gönderilir.'},
];
const timeline=[
  {year:'MÖ 5000', title:'Beycesultan Höyüğü', desc:'Çivril’de 40 katman — Denizli’nin ilk şehri, Kalkolitik’ten Tunç Çağı’na.'},
  {year:'MÖ 261', title:'Laodicea kuruldu', desc:'Antiokhos II kurdu, yün ve bankacılıkla zengin, Lycus vadisi ticaret başkenti.'},
  {year:'MÖ 190', title:'Hierapolis', desc:'Bergama Kralı II. Eumenes kurdu — termal şifa kenti, Apollon ve tiyatro.'},
  {year:'MS 60', title:'Büyük Deprem', desc:'Laodicea yıkıldı, halk Roma yardımı reddedip kendi parasıyla yeniden kurdu.'},
  {year:'MS 1070', title:'Türkler geldi', desc:'Malazgirt sonrası Selçuklular, Haçlılar Hierapolis’ten geçti.'},
  {year:'1261', title:'Ladik (Denizli) Beyliği', desc:'Laodicea’nın Türkçesi Ladik — İncil’in Colossae’si Türklerin Denizli’si oldu.'},
  {year:'1429', title:'Osmanlı', desc:'Sancak merkezi, dokuma hiç durmadı.'},
  {year:'1889', title:'Demiryolu', desc:'İzmir-Denizli hattı — pamuk ve dokuma ihracatı patladı.'},
  {year:'1919', title:'İlk Kıvılcım', desc:'15 Mayıs, Müftü Ahmet Hulusi Bayramyeri’nde cihad fetvası — Türkiye’de ilk direniş çağrısı.'},
  {year:'1923', title:'İl oldu', desc:'Cumhuriyet’le il, 1980’lerde Anadolu Kaplanı — havlunun %70’i Denizli’den.'},
  {year:'1988', title:'UNESCO', desc:'Hierapolis-Pamukkale doğal + kültürel çift miras, dünyada nadir.'},
  {year:'2014', title:'Büyükşehir', desc:'Denizli Büyükşehir Belediyesi — 19 ilçe.'},
];
let lang='en';
function switchTab(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-tab="${id}"]`).classList.add('active');
  if(id==='discover') setTimeout(()=> map.invalidateSize(), 120);
  if(id==='food'){ renderFood(); renderProducts(); }
}
function setLang(v){ lang=v; renderPlaces(); }
let map;
let selectedId=null;
function initMap(){
  map=L.map('map').setView([37.85, 29.25], 9);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:18, attribution:'© OSM'}).addTo(map);
  places.forEach(p=> p._marker=L.marker([p.lat,p.lon]).addTo(map).bindPopup(`<b>${p.name}</b><br>${p.desc}<br><small>💡 ${p.tip}</small>`).on('click',()=> focusPlace(p.id, false)));
}
function focusPlace(id, scrollDetail=true){
  const p=places.find(x=>x.id===id); if(!p) return;
  selectedId=id;
  document.querySelectorAll('#places > div').forEach(d=>{
    const active=d.dataset.pid===id;
    d.style.borderColor=active?'#0e7490':'#334155';
    d.style.boxShadow=active?'0 0 0 2px rgba(14,116,144,.45), 0 6px 16px rgba(0,0,0,.28)':'0 6px 16px rgba(0,0,0,.28)';
  });
  try{
    if(map.flyTo) map.flyTo([p.lat,p.lon], 13, {duration:.9});
    else map.setView([p.lat,p.lon], 13);
    setTimeout(()=>{ try{ p._marker.openPopup(); }catch(e){} }, 950);
  }catch(e){ try{ map.setView([p.lat,p.lon], 13); }catch(_){} }
  showPlaceDetail(id);
  if(scrollDetail){ try{ document.getElementById('placeDetail').scrollIntoView({behavior:'smooth', block:'nearest'}); }catch(e){} }
}
function renderPlaces(){
  const q=document.getElementById('q').value.toLowerCase();
  const cat=document.getElementById('fCat').value;
  const el=document.getElementById('places'); el.innerHTML='';
  const catColor={Ancient:'#8b5cf6',Nature:'#10b981',City:'#0ea5e9',Monument:'#f59e0b',Food:'#e11d48'};
  const catIcon={Ancient:'🏛',Nature:'🌿',City:'🏙',Monument:'🗿',Food:'🥘'};
  const list=places.filter(p=>{
    if(cat!=='all' && p.cat!==cat) return false;
    if(q && !(p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))) return false;
    return true;
  });
  if(!list.length){ el.innerHTML='<div style="padding:14px;color:#94a3b8;font-size:13px">No places found. Try another search.</div>'; return; }
  list.forEach(p=>{
    const div=document.createElement('div');
    div.dataset.pid=p.id;
    div.style.cssText='background:#1e293b;border:1px solid #334155;border-radius:14px;padding:14px;cursor:pointer;box-shadow:0 6px 16px rgba(0,0,0,.28);transition:.16s';
    const firstBus=(p.buses&&p.buses[0])||'';
    div.innerHTML=`<div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><b style="color:#f8fafc;font-size:15px;letter-spacing:-.01em">${catIcon[p.cat]||'📍'} ${p.name}</b><span style="font-size:10px;padding:4px 8px;border-radius:999px;background:${catColor[p.cat]||'#64748b'};color:white;font-weight:800;white-space:nowrap">${p.cat}</span></div><div style="font-size:13px;color:#e2e8f0;margin-top:6px;font-weight:600;line-height:1.5">${p.desc}</div><div style="margin-top:8px;display:grid;gap:6px"><div style="font-size:11.5px;color:#fde68a;background:rgba(245,158,11,.10);border:1px solid rgba(245,158,11,.22);border-radius:8px;padding:6px 8px">💡 <b>Mini tüyo:</b> ${p.tip}</div><div style="font-size:11.5px;color:#a5f3fc;background:rgba(14,116,144,.12);border:1px solid rgba(14,116,144,.28);border-radius:8px;padding:6px 8px">🚌 <b>${firstBus}</b>${p.buses.length>1?` <span style="color:#94a3b8">+${p.buses.length-1} hat</span>`:''}</div></div><div style="margin-top:8px;display:flex;gap:6px;align-items:center;flex-wrap:wrap"><button class="audio-mini" onclick="event.stopPropagation(); playPlace('${p.id}','tr')" style="padding:4px 8px;border-radius:999px;background:rgba(14,116,144,.18);border:1px solid rgba(14,116,144,.32);color:#5eead4;font-size:11px;font-weight:700;cursor:pointer">🇹🇷 TR dinle</button><button class="audio-mini" onclick="event.stopPropagation(); playPlace('${p.id}','en')" style="padding:4px 8px;border-radius:999px;background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.22);color:#fde68a;font-size:11px;font-weight:700;cursor:pointer">🇬🇧 EN listen</button><audio id="audio-${p.id}" controls preload="none" style="flex:1;min-width:140px;height:28px;border-radius:8px"></audio></div><div style="font-size:11px;color:#94a3b8;margin-top:6px">Karta tıkla → haritada zoom + tüm otobüsler + detay</div>`;
    div.onclick=()=> focusPlace(p.id);
    el.appendChild(div);
  });
  if(selectedId){ const s=document.querySelector(`#places > div[data-pid="${selectedId}"]`); if(s){ s.style.borderColor='#0e7490'; s.style.boxShadow='0 0 0 2px rgba(14,116,144,.45), 0 6px 16px rgba(0,0,0,.28)'; } }
}
function showPlaceDetail(id){
  const p=places.find(x=>x.id===id); if(!p) return;
  const el=document.getElementById('placeDetail');
  el.style.display='block';
  el.innerHTML=`
    <div style="display:flex;justify-content:space-between;gap:12px;align-items:start">
      <div><h3 style="font-family:Fraunces,serif;font-size:18px;color:#f1f3ff">${p.name}</h3><div style="font-size:12px;color:#cbd5e1">${p.desc} • <span style="color:#94a3b8">${p.cat} • 📍 ${p.lat.toFixed(3)}, ${p.lon.toFixed(3)} — haritada zoomlandı</span></div></div>
      <button class="btn" onclick="document.getElementById('placeDetail').style.display='none'">✕</button>
    </div>
    <div style="margin-top:10px;padding:10px;background:rgba(245,158,11,.10);border:1px solid rgba(245,158,11,.28);border-radius:12px;font-size:13px;color:#fde68a">💡 <b>Mini tüyo:</b> ${p.tip}</div>
    <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div>
        <div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#9aa0c2;font-weight:800">🚌 Oraya giden Denizli otobüsleri</div>
        <ul style="margin:6px 0 0 16px;font-size:12.5px;color:#e2e8f0">${p.buses.map(b=>`<li><b>${b}</b></li>`).join('')}</ul>
        <div style="font-size:11px;color:#9aa0c2;margin-top:6px">Detaylı saatler için <a href="https://www.denizli.bel.tr/ulasim" target="_blank" style="color:#5eead4">denizli.bel.tr/ulasim</a> • Kart: Denizli Kart</div>
      </div>
      <div>
        <div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#9aa0c2;font-weight:800">🎯 Tavsiye edilen etkinlikler</div>
        <ul style="margin:6px 0 0 16px;font-size:12.5px;color:#e2e8f0">${p.activities.map(a=>`<li>${a}</li>`).join('')}</ul>
      </div>
    </div>
    <div style="margin-top:12px;padding:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px">
      <div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#9aa0c2;font-weight:800">🎧 Audio Guide — ${p.name} için ayrı TR + EN</div>
      <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
        <button class="btn" style="background:rgba(14,116,144,.18);border-color:rgba(14,116,144,.32);color:#5eead4" onclick="playDetail('${p.id}','tr')">🇹🇷 Türkçe dinle</button>
        <button class="btn" style="background:rgba(245,158,11,.12);border-color:rgba(245,158,11,.22);color:#fde68a" onclick="playDetail('${p.id}','en')">🇬🇧 English listen</button>
        <audio id="audio-detail" controls preload="none" style="flex:1;min-width:160px;height:32px" src="audio/${p.id}_tr.mp3"></audio>
      </div>
      <div style="font-size:11px;color:#9aa0c2;margin-top:6px">TR (EmelNeural) + EN (JennyNeural) — edge-tts, offline MP3, robotik değil. Dosyalar: <code>audio/${p.id}_tr.mp3</code> + <code>audio/${p.id}_en.mp3</code></div>
    </div>
  `;
  // map zoom is handled by focusPlace(); keep popup in sync only
  // scroll into view
  el.scrollIntoView({behavior:'smooth', block:'nearest'});
}
function findNearest(){
  if(!navigator.geolocation){ alert('No geolocation'); return; }
  navigator.geolocation.getCurrentPosition(pos=>{
    const {latitude,longitude}=pos.coords;
    const hav=(a,b,c,d)=>{const R=6371, dLat=(c-a)*Math.PI/180, dLon=(d-b)*Math.PI/180, e=Math.sin(dLat/2)**2+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(dLon/2)**2; return R*2*Math.asin(Math.sqrt(e));};
    let best=null, d0=Infinity; places.forEach(p=>{const d=hav(latitude,longitude,p.lat,p.lon); if(d<d0){d0=d;best=p;}}); if(best){ focusPlace(best.id); }
  });
}
function playPlace(id, lang){
  const audio=document.getElementById(`audio-${id}`);
  if(!audio) return;
  const src=`audio/${id}_${lang}.mp3`;
  if(audio.src.includes(src) && !audio.paused){ audio.pause(); return; }
  audio.src=src; audio.load(); audio.play().catch(()=> alert('Audio not found: '+src));
}
function playDetail(id, lang){
  const audio=document.getElementById('audio-detail');
  if(!audio) return;
  const src=`audio/${id}_${lang}.mp3`;
  audio.src=src; audio.load(); audio.play().catch(()=>{});
}
function speak(t){ if(!('speechSynthesis'in window))return; const u=new SpeechSynthesisUtterance(t); u.lang=lang==='tr'?'tr-TR':'en-US'; u.rate=0.9; speechSynthesis.cancel(); speechSynthesis.speak(u); }
function renderFood(){
  const chips=document.getElementById('foodChips');
  const grid=document.getElementById('foodGrid');
  if(!chips||!grid) return;
  const cats=[...new Set(foods.map(f=>f.cat))];
  chips.innerHTML=''; cats.forEach(c=>{
    const b=document.createElement('button');
    b.textContent=c; b.style.cssText='padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#9aa0c2;font-weight:700;font-size:12px;cursor:pointer';
    b.onclick=()=>{ b.classList.toggle('active'); if(b.classList.contains('active')){ b.style.background='linear-gradient(135deg,#0e7490,#06b6d4)'; b.style.color='white'; b.style.borderColor='transparent'; } else { b.style.background='rgba(255,255,255,.06)'; b.style.color='#9aa0c2'; b.style.borderColor='rgba(255,255,255,.12)'; } renderFoodFiltered(); updateAllergyCard(); };
    chips.appendChild(b);
  });
  renderFoodFiltered();
  renderProducts();
  updateAllergyCard();
}
function renderFoodFiltered(){
  const active=[...document.querySelectorAll('#foodChips .active')].map(b=>b.textContent);
  const grid=document.getElementById('foodGrid'); grid.innerHTML='';
  foods.filter(f=> active.length===0 || active.includes(f.cat)).forEach(f=>{
    const div=document.createElement('div'); div.className='food-card';
    div.style.cssText='border:1px solid rgba(255,255,255,.10);border-radius:14px;padding:14px;background:rgba(255,255,255,.05);backdrop-filter:blur(6px)';
    div.innerHTML=`<b style="color:#f1f3ff">${f.name}</b> <span style="font-size:10px;padding:2px 6px;border-radius:999px;background:rgba(255,255,255,.08);color:#9aa0c2">${f.cat}</span><div style="font-size:12.5px;color:#cbd5e1;margin-top:4px">${f.desc}</div><div style="font-size:11px;color:#f59e0b;margin-top:6px;font-weight:700">${f.allergens.length? '⚠️ '+f.allergens.join(', '):'✅ No allergens'} • ${f.price}</div><div style="font-size:11px;color:#fde68a;margin-top:6px;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.14);border-radius:8px;padding:6px"><b>Alerji notu:</b> ${f.note}</div>`;
    grid.appendChild(div);
  });
}
function renderProducts(){
  const grid=document.getElementById('productGrid');
  if(!grid) return;
  grid.innerHTML='';
  recommendedProducts.forEach(p=>{
    const div=document.createElement('div');
    div.style.cssText='background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:14px';
    div.innerHTML=`<b style="color:#f1f3ff">${p.name}</b><div style="font-size:12.5px;color:#cbd5e1;margin-top:4px">${p.desc}</div><div style="font-size:11px;color:#06b6d4;font-weight:700;margin-top:6px">${p.price}</div><div style="font-size:11px;color:#fde68a;margin-top:4px">💡 ${p.tip}</div>`;
    grid.appendChild(div);
  });
}
function updateAllergyCard(){
  const card=document.getElementById('allergyCard');
  if(!card) return;
  const active=[...document.querySelectorAll('#foodChips .active')].map(b=>b.textContent);
  if(!active.length){
    card.innerHTML='Alerjen seçince kart burada oluşur — filtre ile kategoriye göre daraltın, kartı garsona gösterin.';
    card.style.color='#f1f3ff';
    return;
  }
  const foodsInView=foods.filter(f=> active.includes(f.cat));
  const allAllergens=[...new Set(foodsInView.flatMap(f=>f.allergens))];
  if(!allAllergens.length){
    card.innerHTML='<b style="color:#6ee7b7">✅ Seçili kategoride alerjen yok.</b> Yine de çapraz bulaşma için sorun.';
    return;
  }
  card.innerHTML=`<b style="color:#fde68a">⚠️ Alerjim var:</b> ${allAllergens.join(', ')}<br><span style="font-size:12px">Lütfen yemeğimde <b>${allAllergens.join(', ')}</b> olmasın. Teşekkürler!</span><br><span style="font-size:11px;color:#9aa0c2">I have allergy to ${allAllergens.join(', ')} — please no ${allAllergens.join(', ')}.</span>`;
}
let lastPlan=null;
let lastBudget=null;
let savedRoute=null;
const RATES={TRY:1, USD:32.5, EUR:35.2};
const PLACE_DURATION={Ancient:120, Nature:90, City:60, Monument:30, Food:90};
const MODE_SPEED={car:50, dolmus:35, walk:5};

function renderPlanFocus(){
  const el=document.getElementById('pFocus'); if(!el) return;
  const cats=[...new Set(places.map(p=>p.cat))];
  el.innerHTML='';
  cats.forEach(c=>{
    const b=document.createElement('button');
    b.textContent=c; b.style.cssText='padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#9aa0c2;font-weight:700;font-size:12px;cursor:pointer';
    b.onclick=()=>{ b.classList.toggle('active'); if(b.classList.contains('active')){ b.style.background='linear-gradient(135deg,#0e7490,#06b6d4)'; b.style.color='white'; b.style.borderColor='transparent'; } else { b.style.background='rgba(255,255,255,.06)'; b.style.color='#9aa0c2'; b.style.borderColor='rgba(255,255,255,.12)'; } };
    el.appendChild(b);
  });
}
function renderRoutePicks(){
  const el=document.getElementById('routePicks'); if(!el) return;
  const startEl=document.getElementById('rStart'), endEl=document.getElementById('rEnd');
  el.innerHTML='';
  if(startEl){ startEl.innerHTML='<option value="">Auto (nearest)</option>'; }
  if(endEl){ endEl.innerHTML='<option value="">Same as start</option>'; }
  places.forEach(p=>{
    const b=document.createElement('button');
    b.textContent=p.name; b.dataset.pid=p.id;
    b.style.cssText='padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.05);color:#f1f3ff;font-size:12px;cursor:pointer;transition:.15s';
    b.onclick=()=>{ b.classList.toggle('active'); if(b.classList.contains('active')){ b.style.background='linear-gradient(135deg,#0e7490,#06b6d4)'; b.style.borderColor='transparent'; b.style.color='white'; } else { b.style.background='rgba(255,255,255,.05)'; b.style.borderColor='rgba(255,255,255,.10)'; b.style.color='#f1f3ff'; } };
    el.appendChild(b);
    if(startEl){ const o=document.createElement('option'); o.value=p.id; o.textContent=p.name; startEl.appendChild(o); }
    if(endEl){ const o=document.createElement('option'); o.value=p.id; o.textContent=p.name; endEl.appendChild(o); }
  });
}
function generateSmartPlan(){
  const days=parseInt(document.getElementById('pDays').value)||2;
  const pace=document.getElementById('pPace').value;
  const focus=[...document.querySelectorAll('#pFocus .active')].map(b=>b.textContent);
  const start=document.getElementById('pStart').value;
  const perDay={relaxed:2.5, balanced:3.5, packed:5}[pace];
  const totalSlots=Math.round(days*perDay);
  let pool=places.filter(p=> focus.length===0 || focus.includes(p.cat));
  if(!pool.length) pool=places;
  pool=[...pool].sort(()=>Math.random()-0.5);
  let plan=[];
  if(start && start!=='hotel'){
    const s=places.find(p=>p.id===start);
    if(s) plan.push(s);
  }
  for(const p of pool){
    if(plan.length>=totalSlots) break;
    if(!plan.find(x=>x.id===p.id)) plan.push(p);
  }
  lastPlan=plan;
  renderPlanTimeline(plan, days);
}
function renderPlanTimeline(plan, days){
  const el=document.getElementById('planOut'); if(!el) return;
  const perDay=Math.ceil(plan.length/days);
  let html='';
  let idx=0;
  for(let d=1; d<=days; d++){
    const dayPlan=plan.slice(idx, idx+perDay);
    idx+=perDay;
    if(!dayPlan.length) break;
    let dayKm=0, dayMin=0;
    for(let i=0;i<dayPlan.length-1;i++){ const km=haversine(dayPlan[i].lat,dayPlan[i].lon,dayPlan[i+1].lat,dayPlan[i+1].lon); dayKm+=km; dayMin+=km/35*60; }
    html+=`<div style="margin-bottom:16px;padding:12px;background:rgba(14,116,144,.10);border:1px solid rgba(14,116,144,.25);border-radius:12px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <b style="color:#5eead4;font-size:14px">Day ${d}</b>
        <span style="font-size:11px;color:#94a3b8">${dayPlan.length} stops • ~${dayKm.toFixed(0)}km • ~${Math.round(dayMin)}min travel</span>
      </div>
      <ol style="margin:0 0 0 18px;font-size:13px;color:#e2e8f0;line-height:1.8">${dayPlan.map((p,i)=>`<li><b>${p.name}</b> <span style="color:#94a3b8">(${p.cat}, ~${PLACE_DURATION[p.cat]||60}min)</span> — ${p.desc}</li>`).join('')}</ol>
    </div>`;
  }
  if(!html) html='<div style="padding:12px;color:#94a3b8">No plan generated. Adjust filters or add more days.</div>';
  el.innerHTML=html;
}
function clearPlan(){ lastPlan=null; document.getElementById('planOut').innerHTML=''; }
function randomizePlan(){ document.getElementById('pDays').value=Math.floor(Math.random()*3)+2; document.getElementById('pPace').value=['relaxed','balanced','packed'][Math.floor(Math.random()*3)]; generateSmartPlan(); }
function copyPlanText(){
  if(!lastPlan||!lastPlan.length){ alert('Generate a plan first'); return; }
  const days=parseInt(document.getElementById('pDays').value)||2;
  const perDay=Math.ceil(lastPlan.length/days);
  let txt=`Denizli ${days}-Day Itinerary\n${'='.repeat(30)}\n`;
  let idx=0;
  for(let d=1; d<=days; d++){
    const dayPlan=lastPlan.slice(idx, idx+perDay); idx+=perDay;
    if(!dayPlan.length) break;
    txt+=`\nDay ${d}:\n`;
    dayPlan.forEach((p,i)=> txt+=`  ${i+1}. ${p.name} (${p.cat}) — ${p.desc}\n`);
  }
  navigator.clipboard.writeText(txt).then(()=>alert('Copied to clipboard!'));
}
function sharePlanUrl(){
  if(!lastPlan||!lastPlan.length){ alert('Generate a plan first'); return; }
  const params=new URLSearchParams();
  params.set('plan', lastPlan.map(p=>p.id).join(','));
  params.set('days', document.getElementById('pDays').value);
  params.set('pace', document.getElementById('pPace').value);
  const focus=[...document.querySelectorAll('#pFocus .active')].map(b=>b.textContent);
  if(focus.length) params.set('focus', focus.join(','));
  const url=`${location.origin}${location.pathname}?${params.toString()}`;
  navigator.clipboard.writeText(url).then(()=>alert('Shareable link copied!'));
}
function calcBudget(){
  const trav=parseInt(document.getElementById('bTrav').value)||1;
  const days=parseInt(document.getElementById('bDays').value)||1;
  const tier=document.getElementById('bTier').value;
  const currency=document.getElementById('bCurrency').value;
  const rates=RATES[currency]||1;
  const sym=currency==='TRY'?'₺':currency==='USD'?'$':'€';
  const base={budget:{stay:400,food:200,transport:80,tickets:150}, mid:{stay:800,food:350,transport:150,tickets:250}, lux:{stay:1500,food:600,transport:300,tickets:400}}[tier];
  const breakdown=Object.entries(base).map(([k,v])=> ({cat:k, perDay:v, total:v*days*trav, totalC:(v*days*trav/rates).toFixed(2)}));
  const grand=breakdown.reduce((s,b)=>s+b.total,0);
  lastBudget={trav,days,tier,currency,breakdown,grand};
  const rows=breakdown.map(b=>`<tr style="border-bottom:1px solid rgba(255,255,255,.08)"><td style="padding:8px;color:#fde68a">${b.cat}</td><td style="padding:8px;text-align:right;color:#e2e8f0">${sym}${b.totalC}/day</td><td style="padding:8px;text-align:right;color:#5eead4;font-weight:700">${sym}${b.totalC}</td></tr>`).join('');
  document.getElementById('budgetOut').innerHTML=`<div style="padding:12px;background:rgba(16,185,129,.10);border:1px solid rgba(16,185,129,.25);border-radius:12px">
    <div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#9aa0c2;font-weight:800;margin-bottom:8px">Breakdown (${sym}${currency})</div>
    <table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="color:#94a3b8;font-weight:700"><td style="padding:8px">Category</td><td style="padding:8px;text-align:right">Per Day</td><td style="padding:8px;text-align:right">Total</td></tr></thead><tbody>${rows}</tbody></table>
    <div style="display:flex;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid rgba(16,185,129,.25);font-weight:800;font-size:15px"><span>Grand Total</span><span style="color:#5eead4">${sym}${(grand/rates).toFixed(2)}</span></div>
  </div>`;
}
function exportBudgetCSV(){
  if(!lastBudget){ alert('Calculate budget first'); return; }
  const {trav,days,tier,currency,breakdown,grand}=lastBudget;
  const sym=currency==='TRY'?'₺':currency==='USD'?'$':'€';
  let csv='Category,Per Day ('+sym+'),Total ('+sym+')\n';
  breakdown.forEach(b=> csv+=`${b.cat},${b.totalC},${b.totalC}\n`);
  csv+=`Grand Total,,${(grand/RATES[currency]).toFixed(2)}\n`;
  const blob=new Blob([csv],{type:'text/csv'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=`denizli-budget-${tier}-${days}d.csv`; a.click(); URL.revokeObjectURL(url);
}
function haversine(a,b,c,d){const R=6371, dLat=(c-a)*Math.PI/180, dLon=(d-b)*Math.PI/180, e=Math.sin(dLat/2)**2+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(dLon/2)**2; return R*2*Math.asin(Math.sqrt(e));}
function travelTime(km, mode){ return Math.round(km/MODE_SPEED[mode]*60); }
function optimizeRoute(){
  const sel=[...document.querySelectorAll('#routePicks .active')].map(b=>b.dataset.pid);
  const pts=sel.map(id=> places.find(p=>p.id===id)).filter(Boolean);
  if(pts.length<2){ alert('Pick 2+ places'); return; }
  const mode=document.getElementById('rMode').value;
  const startId=document.getElementById('rStart').value;
  const endId=document.getElementById('rEnd').value;
  let route=[], rest=[...pts];
  if(startId){ const s=places.find(p=>p.id===startId); if(s){ route.push(s); rest=rest.filter(p=>p.id!==startId); } }
  else { route.push(rest.splice(0,1)[0]); }
  while(rest.length){ let best=0,d0=Infinity; rest.forEach((p,i)=>{const d=haversine(route[route.length-1].lat,route[route.length-1].lon,p.lat,p.lon); if(d<d0){d0=d;best=i;}}); route.push(rest.splice(best,1)[0]); }
  if(endId && endId!==route[route.length-1].id){ const e=places.find(p=>p.id===endId); if(e && !route.find(x=>x.id===endId)) route.push(e); }
  const legs=route.slice(0,-1).map((p,i)=>({from:p, to:route[i+1], km:haversine(p.lat,p.lon,route[i+1].lat,route[i+1].lon)}));
  const totalKm=legs.reduce((s,l)=>s+l.km,0);
  const totalMin=legs.reduce((s,l)=>s+travelTime(l.km,mode),0);
  savedRoute={route, legs, mode, totalKm, totalMin};
  let html=`<div style="padding:12px;background:rgba(245,158,11,.10);border:1px solid rgba(245,158,11,.25);border-radius:12px">
    <div style="display:flex;justify-content:space-between;margin-bottom:10px"><b style="color:#fde68a">Optimized Route (${mode})</b><span style="color:#94a3b8">${totalKm.toFixed(1)} km • ~${Math.floor(totalMin/60)}h${totalMin%60}m</span></div>
    <ol style="margin:0 0 0 18px;font-size:13px;color:#e2e8f0;line-height:1.9">${legs.map((l,i)=>`<li>${i+1}. <b>${l.from.name}</b> → <b>${l.to.name}</b> <span style="color:#94a3b8">(${l.km.toFixed(1)}km, ~${travelTime(l.km,mode)}min)</span></li>`).join('')}${legs.length?`<li>${legs.length+1}. <b>${route[route.length-1].name}</b> (end)</li>`:''}</ol>
    <div style="margin-top:10px;padding:8px;background:rgba(255,255,255,.04);border-radius:8px;font-size:11px;color:#9aa0c2">Times are estimates. Dolmuş waits ~15min. Check <a href="https://www.denizli.bel.tr/ulasim" style="color:#5eead4">denizli.bel.tr</a> for schedules.</div>
  </div>`;
  document.getElementById('routeOut').innerHTML=html;
  document.getElementById('routeStats').textContent=`${route.length} stops • ${totalKm.toFixed(1)}km • ~${totalMin}min`;
  if(window.routeLine) map.removeLayer(window.routeLine);
  window.routeLine=L.polyline(route.map(p=>[p.lat,p.lon]),{color:'#0e7490', weight:3, opacity:0.8, dashArray:'8,6'}).addTo(map);
  legs.forEach((l,i)=>{ L.marker([l.to.lat,l.to.lon]).addTo(map).bindTooltip(`${i+1}. ${l.to.name}`); });
  map.fitBounds(window.routeLine.getBounds(),{padding:[20,20]});
}
function clearRoute(){ document.querySelectorAll('#routePicks .active').forEach(b=>b.classList.remove('active')); document.getElementById('routeOut').innerHTML=''; document.getElementById('routeStats').textContent=''; if(window.routeLine){ map.removeLayer(window.routeLine); window.routeLine=null; } }
function saveRoute(){ if(!savedRoute){ alert('Optimize a route first'); return; } localStorage.setItem('denizli-saved-route', JSON.stringify(savedRoute)); alert('Route saved to browser storage'); }
function loadRoute(){ const data=localStorage.getItem('denizli-saved-route'); if(!data){ alert('No saved route found'); return; } savedRoute=JSON.parse(data); const ids=savedRoute.route.map(p=>p.id); document.querySelectorAll('#routePicks button').forEach(b=>{ if(ids.includes(b.dataset.pid)) b.classList.add('active'); }); optimizeRoute(); }
function exportPlanICS(){
  if(!lastPlan||!lastPlan.length){ alert('Generate a plan first'); return; }
  const days=parseInt(document.getElementById('pDays').value)||2;
  const perDay=Math.ceil(lastPlan.length/days);
  let ics='BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Denizli Guide//EN\n';
  let idx=0;
  for(let d=1; d<=days; d++){
    const dayPlan=lastPlan.slice(idx, idx+perDay); idx+=perDay;
    if(!dayPlan.length) break;
    dayPlan.forEach((p,i)=>{
      const date=new Date(); date.setDate(date.getDate()+d-1);
      const y=date.toISOString().slice(0,10).replace(/-/g,'');
      ics+=`BEGIN:VEVENT\nDTSTART:${y}T080000Z\nSUMMARY:Day ${d}: ${p.name}\nDESCRIPTION:${p.desc}\nEND:VEVENT\n`;
    });
  }
  ics+='END:VCALENDAR';
  const blob=new Blob([ics],{type:'text/calendar'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='denizli-itinerary.ics'; a.click(); URL.revokeObjectURL(url);
}
function generatePackingList(){
  const season=new Date().getMonth(); // 0-11
  const isSummer=season>=5 && season<=8;
  const hasNature=lastPlan?.some(p=>p.cat==='Nature') || false;
  const hasAncient=lastPlan?.some(p=>p.cat==='Ancient') || false;
  const hasWater=lastPlan?.some(p=>['pam','kar','cleo','civ','kak'].includes(p.id)) || false;
  const items={
    essentials:['Passport/ID','Phone + charger','Power bank','Travel insurance','Cash (TRY) + card','Medications'],
    clothing: isSummer? ['Light shirts/shorts','Sun hat','Sunglasses','Swimwear','Sandals','Light jacket (evenings)'] : ['Warm layers','Waterproof jacket','Closed shoes','Long pants','Scarf/gloves'],
    nature: hasNature? ['Hiking shoes','Daypack (20L)','Water bottle','Snacks','Sunscreen','Basic first aid'] : [],
    ancient: hasAncient? ['Comfortable walking shoes','Hat','Sunscreen','Water','Camera','Notebook'] : [],
    water: hasWater? ['Swimwear','Quick-dry towel','Water shoes','Waterproof bag','Change of clothes'] : [],
    tech:['Phone','Camera','Portable charger','Adapter (Type C/F)'],
    optional:['Turkish phrasebook','Binoculars','Journal','Playing cards','Reusable bag']
  };
  let html='';
  for(const [cat, list] of Object.entries(items)){
    if(!list.length) continue;
    const label={'essentials':'⚡ Essentials','clothing':isSummer?'☀️ Summer Clothing':'❄️ Winter Clothing','nature':'🌿 Nature/Hiking','ancient':'🏛 Ancient Sites','water':'💧 Water Activities','tech':'🔌 Tech','optional':'✨ Optional'}[cat];
    html+=`<div style="margin-bottom:12px"><div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#9aa0c2;font-weight:800;margin-bottom:6px">${label}</div><div style="display:flex;flex-wrap:wrap;gap:6px">${list.map(x=>`<label style="display:flex;align-items:center;gap:6px;padding:6px 10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:8px;font-size:12px;cursor:pointer"><input type="checkbox" style="accent-color:#0e7490"> ${x}</label>`).join('')}</div></div>`;
  }
  document.getElementById('packingOut').innerHTML=html||'<div style="color:#94a3b8;padding:12px">Generate a plan first to get a tailored list</div>';
}
function exportPackingCSV(){
  const checks=[...document.querySelectorAll('#packingOut input[type=checkbox]:checked')];
  if(!checks.length){ alert('Generate checklist and tick items first'); return; }
  let csv='Category,Item\n';
  checks.forEach(c=>{ const label=c.closest('div').textContent.trim(); csv+=`Packing,${label}\n`; });
  const blob=new Blob([csv],{type:'text/csv'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='denizli-packing.csv'; a.click(); URL.revokeObjectURL(url);
}
function openMaps(id){
  const p=places.find(x=>x.id===id); if(!p) return;
  const url=`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lon}`;
  window.open(url,'_blank');
}
function renderTimeline(){
  const el=document.getElementById('timeline'); if(!el) return;
  el.innerHTML=timeline.map(t=>`<div style="display:flex;gap:12px;padding:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:12px;backdrop-filter:blur(6px)"><b style="min-width:70px;color:#06b6d4">${t.year}</b><div><b style="color:#f1f3ff">${t.title}</b><div style="font-size:12px;color:#9aa0c2">${t.desc}</div></div></div>`).join('');
}
const climate=[6,7,10,15,20,24,27,27,23,17,12,8];
function renderClimate(){
  const grid=document.getElementById('climateGrid'); if(!grid) return;
  grid.innerHTML='';
  const months=['J','F','M','A','M','J','J','A','S','O','N','D'];
  climate.forEach((t,i)=>{
    const h=8 + (t/30)*28;
    const div=document.createElement('div');
    div.className='climate-bar';
    div.innerHTML=`<div class="climate-fill" style="height:${h}px"></div><div style="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);font-size:8px;color:#7a819c">${months[i]}</div><div style="position:absolute;top:2px;left:50%;transform:translateX(-50%);font-size:9px;font-weight:700">${t}°</div>`;
    div.style.position='relative';
    grid.appendChild(div);
  });
}
const transcripts={
  tr: `Merhaba, Pamukkale'ye hoş geldiniz. Burası sadece bir doğa harikası değil, iki bin yıllık bir antik kentin kalbi. Beyaz travertenler, yeraltından gelen termal suların kalsiyumu bırakmasıyla oluştu. Her gün binlerce litre su, yamaçtan süzülerek bu pamuk kaleyi yaratıyor. Travertenlerde yalınayak yürüyün, suyun sıcaklığı otuz beş derece. Yukarıda, Hierapolis antik kenti sizi bekliyor. Roma döneminde şifa merkeziydi. Tiyatrosu, nekropolü ve Apollon tapınağı hala ayakta. Cleopatra Havuzu'nda, antik sütunlar arasında yüzebilirsiniz. Suyun içindeki sütunlar, bir depremle yıkılan bir yapının kalıntıları. İpucu: Gün doğumunda gelin, kalabalık yok, ışık travertenlerde altın gibi parlıyor.`,
  en: `Welcome to Pamukkale — Cotton Castle. These white terraces are not snow, but calcium left by thermal waters flowing for thousands of years. Every day, hot springs carry minerals down the slope, building this natural castle. Walk barefoot — the water is 35 degrees, warm year-round. Above the terraces lies Hierapolis, a Roman spa city. Its theatre, necropolis and Apollo temple still stand. Swim in Cleopatra's Pool among fallen ancient columns — they collapsed in an earthquake centuries ago. Tip: Come at sunrise. No crowds, the travertines glow gold. For official hours and prices, check denizli.bel.tr. Enjoy Pamukkale, and please leave no trace.`
};
function switchAudio(lang){
  const audio=document.getElementById('audioPlayer');
  const trans=document.getElementById('transcript');
  const btnTr=document.getElementById('btnTr'), btnEn=document.getElementById('btnEn');
  if(!audio) return;
  const src= lang==='tr' ? 'audio/pamukkale_tr.mp3' : 'audio/pamukkale_en.mp3';
  audio.src=src;
  audio.load();
  if(trans) trans.textContent=transcripts[lang];
  if(btnTr&&btnEn){
    btnTr.classList.toggle('active', lang==='tr');
    btnEn.classList.toggle('active', lang==='en');
  }
}
document.addEventListener('DOMContentLoaded',()=>{
  // audio default
  setTimeout(()=> switchAudio('tr'), 300);
  initMap(); renderPlaces(); renderFood(); renderTimeline(); renderClimate(); renderRoutePicks(); renderPlanFocus();
  // load plan from URL if present
  const urlParams=new URLSearchParams(window.location.search);
  if(urlParams.has('plan')){
    const ids=urlParams.get('plan').split(',');
    const days=parseInt(urlParams.get('days'))||2;
    const pace=urlParams.get('pace')||'balanced';
    document.getElementById('pDays').value=days;
    document.getElementById('pPace').value=pace;
    if(urlParams.has('focus')){
      const focus=urlParams.get('focus').split(',');
      setTimeout(()=>{
        document.querySelectorAll('#pFocus button').forEach(b=>{ if(focus.includes(b.textContent)) b.classList.add('active'); });
        generateSmartPlan();
      }, 200);
    } else {
      generateSmartPlan();
    }
  }
  ['history','nature','beach','food','balloon'].forEach(i=>{
    const el=document.getElementById('pInterests');
    if(el){
      const label=document.createElement('label');
      label.style.cssText='font-size:12px;display:flex;gap:4px;align-items:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);padding:6px 10px;border-radius:999px;cursor:pointer;color:#f1f3ff';
      label.innerHTML=`<input type="checkbox" value="${i}"> ${i}`;
      el.appendChild(label);
    }
  });
});
