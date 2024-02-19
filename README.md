# Vite Plugin Devtools Outline

A dead-simple Vite plugin that adds a hotkey to toggle red outlines around every element during dev only.

> During build, this module will be an empty string, making it dev-only.

## Usage

Install the package

npm

```bash
npm i -D unocss-preset-columns
```

pnpm

```bash
pnpm i -D unocss-preset-columns
```

In `uno.config.ts`

```typescript
import { presetColumns } from "unocss-preset-columns";

export default defineConfig({
  // ...
  presets: [
    // ...
    presetColumns(14), // The parameter is the number of columns in your design
  ],
  // ...
});
```
