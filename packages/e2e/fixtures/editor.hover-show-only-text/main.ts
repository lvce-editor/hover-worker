import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-only-text',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'only text field',
      documentation: 'only text field',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
