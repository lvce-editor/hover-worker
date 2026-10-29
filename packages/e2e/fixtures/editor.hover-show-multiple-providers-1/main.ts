import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'hover-multiple-1',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'first',
      documentation: 'First provider',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
