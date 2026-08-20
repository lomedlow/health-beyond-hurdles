import { Font } from "@react-pdf/renderer";
import path from "node:path";

let registered = false;

export function registerPdfFonts() {
  if (registered) return;
  registered = true;

  const dir = path.join(process.cwd(), "src/lib/pdf/fonts");

  Font.register({
    family: "Inter",
    fonts: [
      { src: path.join(dir, "Inter-Regular.woff"), fontWeight: 400 },
      { src: path.join(dir, "Inter-Medium.woff"), fontWeight: 500 },
      { src: path.join(dir, "Inter-SemiBold.woff"), fontWeight: 600 },
      { src: path.join(dir, "Inter-Bold.woff"), fontWeight: 700 },
    ],
  });

  Font.register({
    family: "Fraunces",
    fonts: [
      { src: path.join(dir, "Fraunces-Medium.woff"), fontWeight: 500 },
      { src: path.join(dir, "Fraunces-SemiBold.woff"), fontWeight: 600 },
      { src: path.join(dir, "Fraunces-MediumItalic.woff"), fontWeight: 500, fontStyle: "italic" },
    ],
  });

  Font.registerHyphenationCallback((word) => [word]);
}
