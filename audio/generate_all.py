import asyncio, edge_tts, pathlib
base=pathlib.Path(__file__).parent
places={
 "hier_tr": "Hierapolis antik kenti, Pamukkale'nin üstünde kurulmuş bir Roma şifa merkezi. Tiyatrosu iki bin yıldır ayakta, nekropolü Anadolu'nun en büyüğü.",
 "hier_en": "Hierapolis, the Roman spa city above Pamukkale. Its theatre has stood for two thousand years, its necropolis is the largest in Anatolia.",
 "lao_tr": "Laodicea, antik dünyanın tekstil başkenti. Kiliseleri ve stadyumu, Ticaret kervanlarının izini taşır.",
 "lao_en": "Laodicea, the ancient textile capital. Its churches and stadium echo the trade caravans.",
 "kak_tr": "Kaklık Mağarası, yeraltındaki Pamukkale. Sarkıtlar ve traverten havuzuyla küçük ve serin.",
 "kak_en": "Kaklik Cave, Pamukkale underground. Stalactites and travertine pools, small and cool.",
 "hon_tr": "Honaz Dağı, Ege'nin en yükseği, iki bin beş yüz yetmiş bir metre. İlkbaharda çiçeklerle yürüyüş cenneti.",
 "hon_en": "Honaz Mountain, the highest in the Aegean at two thousand five hundred seventy one meters. A hiking paradise in spring.",
 "kar_tr": "Karahayıt, kırmızı termal suların aktığı şifa köyü. Suyun içindeki mineraller travertenleri kırmızıya boyar.",
 "kar_en": "Karahayit, the village of red thermal springs. Minerals paint the travertines red.",
 "bul_tr": "Buldan, tarihi evleri ve peshtemal tezgahlarıyla tekstilin kalbi. El dokuması havlular burada doğar.",
 "bul_en": "Buldan, historic houses and peshtemal looms — the heart of textiles. Hand-woven towels are born here.",
 "sar_tr": "Sarayköy, bağları ve eski tren istasyonuyla sakin bir kasaba.",
 "sar_en": "Saraykoy, quiet town of vineyards and old train station.",
 "cik_tr": "Işıklı Gölü, Çivril'de nilüferlerle kaplı bir kuş cenneti. Temmuz'da çiçekler açar, kayıkla gezilir.",
 "cik_en": "Isikli Lake in Civril, a bird paradise covered with lotuses. They bloom in July, best by boat.",
 "cam_tr": "Bağbaşı ve Teleferik, Denizli'yi bin dört yüz metreden izler. Gün batımında şehir altın olur.",
 "cam_en": "Bagbasi and Teleferik, Denizli from fourteen hundred meters. The city turns gold at sunset.",
 "for_tr": "Forum Çamlık, modern Denizli'nin buluşma noktası. Kafeler ve alışveriş.",
 "for_en": "Forum Camlik, modern Denizli's meeting point. Cafes and shopping.",
 "tri_tr": "Tripolis, Yenicekent'te Lidya ve Roma mozaikleriyle sessiz bir antik kent.",
 "tri_en": "Tripolis in Yenicekent, quiet ancient city with Lydian and Roman mosaics.",
 "aga_tr": "Ağlayan Kaya, Honaz eteklerinde Niobe efsanesinin taşı.",
 "aga_en": "Aglayan Kaya, Niobe's rock at the foot of Honaz.",
 "gun_tr": "Güney Şelalesi, yazın serin bir piknik ve şelale sesi.",
 "gun_en": "Guney Falls, cool picnic and waterfall sound in summer.",
 "bek_tr": "Bekilli, bağları ve Shiraz üzümleriyle şarap yolu.",
 "bek_en": "Bekilli, vineyards and Shiraz grapes — the wine route.",
}
async def gen(text, voice, out):
    comm=edge_tts.Communicate(text, voice)
    await comm.save(str(base/out))
    print(f"saved {out} {voice}")

async def main():
    for k, txt in places.items():
        lang=k.split('_')[1]
        voice="tr-TR-EmelNeural" if lang=="tr" else "en-US-JennyNeural"
        out=f"{k}.mp3"
        await gen(txt, voice, out)
        print(f"done {k}")

asyncio.run(main())
