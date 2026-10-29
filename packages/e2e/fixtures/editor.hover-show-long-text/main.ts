import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
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
