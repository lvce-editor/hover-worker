import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-only-documentation',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      documentation: 'only documentation field',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
