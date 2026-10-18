# TAX INDIA React website

Responsive single-page React site inspired by the provided TAX INDIA reference and content brief.

## Run locally

```sh
npm install
npm run dev
```

Create a production bundle with `npm run build`.

## Project structure

- `src/components/` — one React component per file, including individual cards and forms
- `src/data/` — service catalog, FAQ, review and state data
- `src/styles/global.css` — responsive design system and page styling
- `src/utils/` — shared WhatsApp link helper
- `src/App.jsx` — page composition
- `src/main.jsx` — React entry point

Contact form submissions currently show an on-page acknowledgement; connect a backend or form service to receive and store leads.
