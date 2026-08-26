import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'hover-whitespace-only',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: '   ',
      documentation: '\n\t  \n',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
