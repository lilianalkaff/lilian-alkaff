import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

/**
 * The Void Body award page (lilianalkaff.art) gets its own copy of index.html,
 * so links to it show the right title, description and image when shared.
 */
const voidBodyShareCard = (): Plugin => ({
  name: "void-body-share-card",
  apply: "build",
  writeBundle(options) {
    const outDir = options.dir ?? "dist";
    const title = "Void Body · Lilian Alkaff";
    const description =
      "Void Body (2023–2024): thirteen series of drawings by Lilian Alkaff, and the story behind them.";
    const image = "https://lilianalkaff.com/og-void-body.jpg";
    let html = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
    html = html
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
      .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`)
      .replace(/(<meta property="og:image" content=")[^"]*/, `$1${image}`)
      .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${title}`)
      .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${description}`)
      .replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${image}`);
    fs.mkdirSync(path.join(outDir, "void-body-story"), { recursive: true });
    fs.writeFileSync(path.join(outDir, "void-body-story", "index.html"), html);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), voidBodyShareCard()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
