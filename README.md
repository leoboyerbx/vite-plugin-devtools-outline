# Unocss Preset columns

A dead-simple uno preset that adds a new unit to unocss, the "c" unit, that is equal to the size of a column.

For example, if your design has 14 columns, `px-1c` will generate the following styles:

```css
.px-1c {
  padding-left: 7.1428571429vw; /* 1/14 * 100vw */
  padding-right: 7.1428571429vw;
}
```

The following features are supported:

- `width` with `w-Xc`
- `height` with `h-Xc`

- `max-width` with `max-w-Xc`
- `max-height` with `max-h-Xc`

- `padding-left` with `pl-Xc`
- `padding-top` with `pt-Xc`
- `padding-right` with `pr-Xc`
- `padding-bottom` with `pb-Xc`
- `padding-left", "padding-right` with `px-Xc`
- `padding-top", "padding-bottom` with `py-Xc`
- `padding` with `p-Xc`

- `margin-left` with `ml-Xc`
- `margin-top` with `mt-Xc`
- `margin-right` with `mr-Xc`
- `margin-bottom` with `mb-Xc`
- `margin-left", "margin-right` with `mx-Xc`
- `margin-top", "margin-bottom` with `my-Xc`
- `margin` with `m-Xc`

- `left` with `left-Xc`
- `top` with `top-Xc`
- `right` with `right-Xc`
- `bottom` with `bottom-Xc`
- `left", "right", "top", "bottom` with `inset-Xc`

- `flex-basis` with `basis-Xc`

- `gap` with `gap-Xc`
- `column-gap` with `gap-x-Xc`
- `row-gap` with `gap-y-Xc`

- `text-indent` with `indent-Xc`

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
