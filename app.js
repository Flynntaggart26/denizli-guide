const places=[
  {id:'pam', name:'Pamukkale Travertines', cat:'Nature', lat:37.9249, lon:29.1214, desc:'White calcium terraces, UNESCO. Walk barefoot, swim in Cleopatra Pool.', tip:'Sunrise, no shoes.'},
  {id:'hier', name:'Hierapolis Ancient City', cat:'Ancient', lat:37.9255, lon:29.1260, desc:'Roman city above travertines, theatre and necropolis.', tip:'Combo ticket with Pamukkale.'},
  {id:'lao', name:'Laodicea', cat:'Ancient', lat:37.8371, lon:29.1079, desc:'Ancient trade city, churches and stadium.', tip:'10km from Denizli center.'},
  {id:'kak', name:'Kaklık Cave', cat:'Nature', lat:37.8360, lon:29.4340, desc:'Underground Pamukkale — travertine cave with pool.', tip:'30km east, less crowded.'},
  {id:'hon', name:'Honaz Mountain', cat:'Nature', lat:37.6810, lon:29.2760, desc:'Highest in Aegean (2571m), paragliding and hiking.', tip:'Spring wildflowers.'},
  {id:'kar', name:'Karahayıt Red Springs', cat:'Nature', lat:37.9630, lon:29.0740, desc:'Red thermal springs, spa hotels.', tip:'Stay for thermal.'},
  {id:'bul', name:'Buldan', cat:'City', lat:38.0450, lon:28.8290, desc:'Textile town, historic houses, peshtemal.', tip:'Buy Buldan cloth.'},
  {id:'sar', name:'Sarayköy', cat:'City', lat:37.9250, lon:28.9250, desc:'Vineyards and old train station.', tip:'Wine tasting.'},
  {id:'civ', name:'Işıklı Lake (Çivril)', cat:'Nature', lat:38.2240, lon:29.8900, desc:'Lotus lake, bird watching, boat tour.', tip:'July lotus bloom.'},
  {id:'cam', name:'Denizli Teleferik & Bağbaşı', cat:'Nature', lat:37.7420, lon:29.0710, desc:'Cable car to 1400m, city view.', tip:'Sunset ride.'},
  {id:'for', name:'Forum Çamlık', cat:'City', lat:37.7830, lon:29.0850, desc:'Modern center, cafes and shopping.', tip:'Evening walk.'},
  {id:'tri', name:'Tripolis (Yenicekent)', cat:'Ancient', lat:38.0500, lon:28.5800, desc:'Lydian-Roman city, mosaics.', tip:'North, near Buldan.'},
  {id:'aga', name:'Ağlayan Kaya', cat:'Nature', lat:37.8600, lon:29.3200, desc:'Mythological Niobe rock, Honaz foothills.', tip:'Hiking stop.'},
  {id:'gun', name:'Güney Falls', cat:'Nature', lat:38.1500, lon:29.0500, desc:'Waterfall and picnic, cool in summer.', tip:'Family picnic.'},
  {id:'bek', name:'Bekilli Vineyards', cat:'Food', lat:38.2300, lon:29.4200, desc:'Wine route, Shiraz and Boğazkere.', tip:'Autumn harvest.'},
];
const foods=[
  {name:'Denizli Kebab', desc:'Wood-fired tandir lamb, city specialty.', allergens:['meat'], price:'180-280 TRY', cat:'Meat'},
  {name:'Keşkek', desc:'Wheat and meat pounded for hours, wedding dish.', allergens:['gluten','meat'], price:'80-120 TRY', cat:'Meat'},
  {name:'Arap Aşı', desc:'Spicy chicken soup with dough, winter.', allergens:['gluten','meat'], price:'60-90 TRY', cat:'Soup'},
  {name:'Buldan Cookie', desc:'Walnut cookie, textile town sweet.', allergens:['nuts','gluten','dairy'], price:'40-60 TRY', cat:'Sweet'},
  {name:'Çal Vineyard Wine', desc:'Local Shiraz, Chateau-like.', allergens:[], price:'200-400 TRY', cat:'Drink'},
  {name:'Simit (Denizli)', desc:'Sesame ring, daily.', allergens:['gluten','sesame'], price:'15-25 TRY', cat:'Snack'},
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
}
function setLang(v){ lang=v; renderPlaces(); }
let map;
function initMap(){
  map=L.map('map').setView([37.85, 29.25], 9);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:18, attribution:'© OSM'}).addTo(map);
  places.forEach(p=> p._marker=L.marker([p.lat,p.lon]).addTo(map).bindPopup(`<b>${p.name}</b><br>${p.desc}`));
}
function renderPlaces(){
  const q=document.getElementById('q').value.toLowerCase();
  const cat=document.getElementById('fCat').value;
  const el=document.getElementById('places'); el.innerHTML='';
  places.filter(p=>{
    if(cat!=='all' && p.cat!==cat) return false;
    if(q && !(p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))) return false;
    return true;
  }).forEach(p=>{
    const div=document.createElement('div');
    div.style.cssText='background:#1e293b;border:1px solid #334155;border-radius:14px;padding:14px;cursor:pointer;box-shadow:0 6px 16px rgba(0,0,0,.28)';
    div.innerHTML=`<div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><b style="color:#f8fafc;font-size:15px;letter-spacing:-.01em">${p.name}</b><span style="font-size:10px;padding:4px 8px;border-radius:999px;background:#f59e0b;color:white;font-weight:800">${p.region}</span></div><div style="font-size:13px;color:#e2e8f0;margin-top:6px;font-weight:600;line-height:1.5">${p.desc}</div><div style="font-size:11px;color:#94a3b8;margin-top:6px;font-weight:600">${p.best} • Mid €${p.budget.mid}/day • ${p.tip}</div><div style="margin-top:8px;display:flex;gap:6px;align-items:center;flex-wrap:wrap"><button class="audio-mini" onclick="event.stopPropagation(); playPlace('${p.id}','tr')" style="padding:4px 8px;border-radius:999px;background:rgba(14,116,144,.18);border:1px solid rgba(14,116,144,.32);color:#5eead4;font-size:11px;font-weight:700;cursor:pointer">🇹🇷 TR</button><button class="audio-mini" onclick="event.stopPropagation(); playPlace('${p.id}','en')" style="padding:4px 8px;border-radius:999px;background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.22);color:#fde68a;font-size:11px;font-weight:700;cursor:pointer">🇬🇧 EN</button><audio id="audio-${p.id}" controls preload="none" style="flex:1;min-width:120px;height:28px;border-radius:8px"></audio></div>`;
    div.onclick=()=>{ try{ map.setView([p.lat,p.lon], 12); p._marker.openPopup(); }catch(e){ console.error(e); alert('Map not ready, try again'); } };
    el.appendChild(div);
  });
}
function findNearest(){
  if(!navigator.geolocation){ alert('No geolocation'); return; }
  navigator.geolocation.getCurrentPosition(pos=>{
    const {latitude,longitude}=pos.coords;
    const hav=(a,b,c,d)=>{const R=6371, dLat=(c-a)*Math.PI/180, dLon=(d-b)*Math.PI/180, e=Math.sin(dLat/2)**2+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(dLon/2)**2; return R*2*Math.asin(Math.sqrt(e));};
    let best=null, d0=Infinity; places.forEach(p=>{const d=hav(latitude,longitude,p.lat,p.lon); if(d<d0){d0=d;best=p;}}); if(best){alert(`Nearest: ${best.name} ${d0.toFixed(0)}km`); map.setView([best.lat,best.lon],12); best._marker.openPopup();}
  });
}
function playPlace(id, lang){
  const audio=document.getElementById(`audio-${id}`);
  if(!audio) return;
  const src=`audio/${id}_${lang}.mp3`;
  // toggle play/pause if same src
  if(audio.src.includes(src) && !audio.paused){
    audio.pause(); return;
  }
  audio.src=src;
  audio.load();
  audio.play().catch(()=> alert('Audio not found: '+src));
}
function speak(t){ if(!('speechSynthesis'in window))return; const u=new SpeechSynthesisUtterance(t); u.lang=lang==='tr'?'tr-TR':'en-US'; u.rate=0.9; speechSynthesis.cancel(); speechSynthesis.speak(u); }
function renderFood(){
  const chips=document.getElementById('foodChips');
  const grid=document.getElementById('foodGrid');
  if(!chips||!grid) return;
  const cats=[...new Set(foods.map(f=>f.cat))];
  chips.innerHTML=''; cats.forEach(c=>{
    const b=document.createElement('button');
    b.textContent=c; b.style.cssText='padding:6px 10px;border-radius:999px;border:1px solid #f0e6d9;background:white;color:#7a819c;font-weight:700;font-size:12px;cursor:pointer';
    b.onclick=()=>{ b.classList.toggle('active'); renderFoodFiltered(); };
    chips.appendChild(b);
  });
  renderFoodFiltered();
}
function renderFoodFiltered(){
  const active=[...document.querySelectorAll('#foodChips .active')].map(b=>b.textContent);
  const grid=document.getElementById('foodGrid'); grid.innerHTML='';
  foods.filter(f=> active.length===0 || active.includes(f.cat)).forEach(f=>{
    const div=document.createElement('div'); div.className='food-card';
    div.innerHTML=`<b>${f.name}</b><div style="font-size:12px;color:#4b5563">${f.desc}</div><div style="font-size:11px;color:#7a819c">${f.allergens.length? '⚠️ '+f.allergens.join(', '):'✅ No allergens'} • ${f.price}</div>`;
    grid.appendChild(div);
  });
}
let lastPlan=null;
function generatePlan(){
  const days=parseInt(document.getElementById('pDays').value);
  const picks=days===1? ['pam','hier'] : days===2? ['pam','hier','lao','kak'] : ['pam','hier','lao','kak','bul','cam'];
  const plan=picks.map(id=> places.find(p=>p.id===id));
  lastPlan=plan;
  const total=plan.length* 600;
  document.getElementById('planOut').innerHTML=`<div style="padding:12px;background:#f0fdfa;border:1px solid #a7f3d0;border-radius:12px"><b>${days}-day Denizli • ~${total} TRY/p (no hotel)</b><ol style="margin:8px 0 0 18px;font-size:13px">${plan.map((p,i)=>`<li><b>${p.name}</b> — ${p.desc}</li>`).join('')}</ol></div>`;
}
function calcBudget(){
  const trav=parseInt(document.getElementById('bTrav').value)||1;
  const days=parseInt(document.getElementById('bDays').value)||1;
  const tier=document.getElementById('bTier').value;
  const avg={budget:600, mid:1100, lux:1900}[tier];
  document.getElementById('budgetOut').innerHTML=`<b>~${avg*days*trav} TRY</b> for ${trav} × ${days} days (${tier})`;
}
function renderRoutePicks(){
  const el=document.getElementById('routePicks'); if(!el) return;
  el.innerHTML=''; places.forEach(p=>{
    const b=document.createElement('button');
    b.textContent=p.name; b.style.cssText='padding:6px 10px;border-radius:999px;border:1px solid #f0e6d9;background:white;font-size:12px;cursor:pointer';
    b.onclick=()=> b.classList.toggle('active');
    el.appendChild(b);
  });
}
function haversine(a,b,c,d){const R=6371, dLat=(c-a)*Math.PI/180, dLon=(d-b)*Math.PI/180, e=Math.sin(dLat/2)**2+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(dLon/2)**2; return R*2*Math.asin(Math.sqrt(e));}
function optimizeRoute(){
  const sel=[...document.querySelectorAll('#routePicks .active')].map(b=>b.textContent);
  const pts=sel.map(n=> places.find(p=>p.name===n)).filter(Boolean);
  if(pts.length<2){ alert('Pick 2+ places'); return; }
  let route=[pts[0]], rest=pts.slice(1);
  while(rest.length){ let best=0,d0=Infinity; rest.forEach((p,i)=>{const d=haversine(route[route.length-1].lat,route[route.length-1].lon,p.lat,p.lon); if(d<d0){d0=d;best=i;}}); route.push(rest.splice(best,1)[0]);}
  const total=route.slice(0,-1).reduce((s,_,i)=> s+haversine(route[i].lat,route[i].lon,route[i+1].lat,route[i+1].lon),0);
  document.getElementById('routeOut').innerHTML=`<div style="padding:10px;background:#fffbeb;border:1px solid #fde68a;border-radius:10px">${route.map((p,i)=> `${i+1}. ${p.name}`).join(' → ')}<br><b>${total.toFixed(0)} km</b></div>`;
  if(window.routeLine) map.removeLayer(window.routeLine);
  window.routeLine=L.polyline(route.map(p=>[p.lat,p.lon]),{color:'#0e7490'}).addTo(map);
  map.fitBounds(window.routeLine.getBounds(),{padding:[20,20]});
}
function clearRoute(){ document.querySelectorAll('#routePicks .active').forEach(b=>b.classList.remove('active')); document.getElementById('routeOut').innerHTML=''; if(window.routeLine) map.removeLayer(window.routeLine); }
function exportPlanICS(){
  if(!lastPlan){alert('Generate plan first');return;}
  let ics='BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Denizli//EN\n';
  lastPlan.forEach((p,i)=>{const d=new Date(); d.setDate(d.getDate()+i); const y=d.toISOString().slice(0,10).replace(/-/g,''); ics+=`BEGIN:VEVENT\nDTSTART:${y}T080000Z\nSUMMARY:${p.name}\nDESCRIPTION:${p.desc}\nEND:VEVENT\n`;});
  ics+='END:VCALENDAR'; const blob=new Blob([ics],{type:'text/calendar'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='denizli.ics'; a.click(); URL.revokeObjectURL(url);
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
  initMap(); renderPlaces(); renderFood(); renderTimeline(); renderClimate(); renderRoutePicks();
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
