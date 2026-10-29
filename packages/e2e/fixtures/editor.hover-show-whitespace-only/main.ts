import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'hover-whitespace-only',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: '   ',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
