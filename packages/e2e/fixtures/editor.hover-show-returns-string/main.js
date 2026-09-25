import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-returns-string',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return 'invalid string response'
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
