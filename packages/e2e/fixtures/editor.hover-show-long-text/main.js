import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'hover-long-text',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(50)
    return {
      text: 'signature',
      documentation: longText,
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
