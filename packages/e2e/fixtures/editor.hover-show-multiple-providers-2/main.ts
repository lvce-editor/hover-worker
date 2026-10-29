import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'hover-multiple-2',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'second',
      documentation: 'Second provider',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
