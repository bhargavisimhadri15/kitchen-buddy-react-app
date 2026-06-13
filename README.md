# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Data & Storage

- **Recipe data**: Stored locally in JSON files under `src/data/` (e.g. `breakfast.json`, `lunch.json`, etc.). The app loads these files as the primary recipe dataset.
- **User recipes**: Saved to `localStorage` under the key `kitchenRecipes`. New recipes submitted via the upload form are persisted locally — no backend required.
- **Videos**: Use YouTube links for recipe videos. The app will embed YouTube videos when a valid link is provided. Local video files are supported only as previews; prefer YouTube links for sharing.
- **Images**: Provide an image URL or upload a local file for a preview only. Images are not uploaded to a server — they remain client-side (object URL or external URL).
- **Backend**: Not required. This project is intentionally client-side only and persists user content in `localStorage`.
