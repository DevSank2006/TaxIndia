import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";
import react from "@vitejs/plugin-react";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(root, "dist");

await build({
  configFile: false,
  root,
  base: "./",
  resolve: { preserveSymlinks: true },
  plugins: [react()],
  build: {
    outDir: outputDirectory,
    emptyOutDir: true,
    rollupOptions: {
      input: path.join(root, "src", "main.jsx"),
      output: {
        entryFileNames: "assets/site.js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});

const assets = await readdir(path.join(outputDirectory, "assets"));
const script = assets.find((file) => file === "site.js");
const stylesheet = assets.find((file) => file.endsWith(".css"));
if (!script)
  throw new Error("The production JavaScript entry was not emitted.");

const stylesheetLink = stylesheet
  ? `    <link rel="stylesheet" href="./assets/${stylesheet}" />\n`
  : "";
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#071d37" />
    <meta name="description" content="Tax India online tax and business services. GST, ITR, registrations and business banking with no advance payment." />
    <title>TAX INDIA | Tax &amp; Business Services</title>
${stylesheetLink}  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/${script}"></script>
  </body>
</html>
`;
await writeFile(path.join(outputDirectory, "index.html"), html, "utf8");
console.log(`Production site written to ${outputDirectory}`);
