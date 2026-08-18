import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
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
