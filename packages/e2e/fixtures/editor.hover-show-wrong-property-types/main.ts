import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-wrong-property-types',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 123 as unknown as string, // should be string
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
