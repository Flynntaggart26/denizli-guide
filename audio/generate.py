import asyncio, edge_tts, pathlib
base=pathlib.Path(__file__).parent
tr = open(base/"pamukkale_tr.txt", encoding="utf-8").read().strip()
en = open(base/"pamukkale_en.txt", encoding="utf-8").read().strip()
async def gen(text, voice, out):
    comm = edge_tts.Communicate(text, voice)
    await comm.save(str(base/out))
    print(f"saved {out} with {voice}")
async def main():
    await gen(tr, "tr-TR-EmelNeural", "pamukkale_tr.mp3")
    await gen(en, "en-US-JennyNeural", "pamukkale_en.mp3")
    # also try German and Arabic for welcome-turkey if needed, but here just TR/EN
    print("done")
asyncio.run(main())
