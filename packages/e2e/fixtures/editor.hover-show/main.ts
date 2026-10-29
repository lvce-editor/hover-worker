import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'abc',
      documentation: 'def',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
