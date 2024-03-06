import { parse } from "opentype.js";
import fs from "node:fs";

async function main() {
  const fontData = await fs.promises.readFile(
    "./fonts/LanobePOPv2/LightNovelPOPv2.otf"
  );
  const font = parse(fontData.buffer);
  console.log(font.hasChar("鑠"));
}

await main();
