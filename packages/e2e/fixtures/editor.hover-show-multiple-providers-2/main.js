import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
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
