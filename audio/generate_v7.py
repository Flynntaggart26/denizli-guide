import asyncio, edge_tts, pathlib
base = pathlib.Path(__file__).parent
places = {
  "cleo_tr": "Kleopatra Havuzu, Hierapolis'in kalbinde antik sütunlar arasında termal yüzme keyfi. Su otuz beş derece, yaz kış sıcaktır.",
  "cleo_en": "Cleopatra's Pool in Hierapolis. Swim among fallen Roman columns in thirty five degree thermal water, warm all year.",
  "philip_tr": "Aziz Filip Kilisesi ve Martiryumu, Hristiyanlığın en eski kutsal yerlerinden biri. Havari Filip'in mezarı buradadır.",
  "philip_en": "Saint Philip Church and Martyrium, one of Christianity's oldest holy sites. The tomb of Apostle Philip is here.",
  "museum_tr": "Hierapolis Arkeoloji Müzesi, Roma hamamında heykeller ve lahitler. Laodicea buluntuları da buradadır.",
  "museum_en": "Hierapolis Archaeology Museum inside the Roman baths. Statues, sarcophagi and finds from Laodicea.",
  "colossae_tr": "Colossae antik kenti, İncil'de adı geçen tarihi şehir. Honaz ovasında höyük ve kalıntılar sizi bekler.",
  "colossae_en": "Colossae, the biblical ancient city near Honaz. A historic mound and quiet ruins.",
  "beyce_tr": "Beycesultan Höyüğü, Denizli'nin ilk şehri. Milattan önce beş binden tunç çağına kırk katman.",
  "beyce_en": "Beycesultan Mound near Civril, Denizli's first city. Forty layers from five thousand B C to the Bronze Age.",
  "kaleici_tr": "Kaleiçi Çarşısı, yedi yüz yıllık kapalı çarşı. Tandır kebabı, bakır ve dokuma burada bulunur.",
  "kaleici_en": "Kaleici Bazaar, a seven hundred year old covered market. Famous for tandir kebab, copper and textiles.",
  "horoz_tr": "Denizli Horoz Heykeli, Delikliçınar'da şehrin simgesi. Dünyaca ünlü horoz otuz saniye öter.",
  "horoz_en": "Denizli Rooster Statue in Deliklicinar Square, the symbol of the city. The famous rooster crows up to thirty seconds.",
  "ataturk_tr": "Çınar'daki Atatürk Anıtı, resmi törenlerin yapıldığı ana meydan. Cumhuriyet coşkusu burada yaşanır.",
  "ataturk_en": "Ataturk Monument in Cinar Square, the main ceremony square. The heart of national celebrations.",
  "bayram_tr": "Bayramyeri Meydanı, on dokuz Mayıs bin dokuz yüz on dokuzda ilk direniş çağrısının yapıldığı yer. Müftü Ahmet Hulusi Efendi burada fetva verdi.",
  "bayram_en": "Bayramyeri Square, where the first resistance call was made in nineteen nineteen. Mufti Ahmet Hulusi gave his historic sermon here.",
  "server_tr": "Servergazi Türbesi, Selçuklu komutanının kabri ve şehitlik anıtı. Sessiz ve manevi bir ziyaret noktası.",
  "server_en": "Servergazi Tomb, the Seljuk commander's resting place and martyrs memorial. A quiet, spiritual stop.",
  "delikli_tr": "Delikliçınar Meydanı, modern Denizli'nin kalbi. Havuzlar, etkinlikler ve kafelerle yürüyüş başlangıcı.",
  "delikli_en": "Deliklicinar Square, the heart of modern Denizli. Fountains, events and cafes, start your walking tour here.",
}

async def gen(text, voice, out):
    comm = edge_tts.Communicate(text, voice)
    await comm.save(str(base / out))
    print(f"saved {out}")

async def main():
    for k, txt in places.items():
        lang = k.split("_")[1]
        voice = "tr-TR-EmelNeural" if lang == "tr" else "en-US-JennyNeural"
        await gen(txt, voice, f"{k}.mp3")
        print(f"done {k}")

asyncio.run(main())
