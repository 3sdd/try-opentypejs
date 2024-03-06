import { parse } from "opentype.js";
import fs from "node:fs";

async function main() {
  const fontData = await fs.promises.readFile(
    "./fonts/LanobePOPv2/LightNovelPOPv2.otf"
  );
  const font = parse(fontData.buffer);
  console.log(font.hasChar("鑠"));

  console.log(font.names.fontFamily);
  console.log(font.names.version);
  console.log(font.names.description);

  const supportedCharacters = [];
  for (let i = 0; i < font.glyphs.length; i++) {
    var glyph = font.glyphs.get(i);
    if (glyph.unicode) {
      supportedCharacters.push(String.fromCharCode(glyph.unicode));
    }
    //TODO: unicode undefinedの場合
  }
  console.log(supportedCharacters);

  // Font.getPath(text, x, y, fontSize, options)
  // Font.draw(ctx, text, x, y, fontSize, options)
  // Font.drawPoints(ctx, text, x, y, fontSize, options)
  // Font.drawMetrics(ctx, text, x, y, fontSize, options)
  // Font.stringToGlyphs(string)
  // Font.charToGlyph(char)
  // Font.getKerningValue(leftGlyph, rightGlyph)
  // Font.getAdvanceWidth(text, fontSize, options)
}

await main();
