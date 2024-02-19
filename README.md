# Vite Plugin Devtools Outline

A dead-simple Vite plugin that adds a hotkey to toggle red outlines around every element during dev only.

> During build, this module will be an empty string, making it dev-only.

## Usage

Install the package

npm

```bash
npm i -D vite-plugin-devtools-outline
```

pnpm

```bash
pnpm i -D vite-plugin-devtools-outline
```

In `vite.config.ts`

```typescript
import { presetColumns } from "vite-plugin-devtools-outline";

export default defineConfig({
  // ...
  plugins: [devtoolsOutline()],
  // ...
});
```

And in your `main.ts` or anywhere else in your code:

```javascript
import "virtual:devtools-outline";
```

Then you can use ctrl+O or shift+O to toggle outlines.
