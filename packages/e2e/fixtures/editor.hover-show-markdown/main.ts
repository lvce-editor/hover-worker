import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-markdown',
  languageId: 'xyz',
  provideHover() {
    return {
      text: 'signature',
      documentation: 'Read the [API guide](https://example.com/api).\n\n```ts\nconst answer = 42\n```',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
