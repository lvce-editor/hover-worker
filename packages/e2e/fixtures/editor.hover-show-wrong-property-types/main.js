import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-wrong-property-types',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 123, // should be string
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
