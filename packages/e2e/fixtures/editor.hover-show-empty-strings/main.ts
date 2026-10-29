import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-empty-strings',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: '',
      documentation: '',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
