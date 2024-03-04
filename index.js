import opentype from "opentype.js";

async function main() {
  opentype.load(
    "./fonts/Noto_Sans_JP/NotoSansJP-VariableFont_wght.ttf",
    function (err, font) {
      if (err) {
        console.error("Font could not be loaded: " + err);
      } else {
        // フォント名を取得
        var fontName = font.names.fontFamily.en;
        console.log("Font Name: " + fontName);
      }
    }
  );
}

await main();
