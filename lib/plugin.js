import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const devtoolsOutline = (color = "red") => {
  const hotVirtualModuleId = 'virtual:devtools-outline'
  const hotResolvedVirtualModuleId = '\0' + hotVirtualModuleId
  let isDev = false

  return {
    name: "vite-plugin-devtools-outline",
    configureServer() {
      isDev = true
    },
    resolveId(id) {
      if (id === hotVirtualModuleId) {
        return hotResolvedVirtualModuleId
      }
    },
    async load(id, context) {
      if (id === hotResolvedVirtualModuleId) {
        if (!isDev || context?.ssr) { return '' }
        return await readFile(resolve(fileURLToPath(new URL('.', import.meta.url)), 'client.js'), 'utf-8')
      }
    },
  };
};
