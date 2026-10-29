import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
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
