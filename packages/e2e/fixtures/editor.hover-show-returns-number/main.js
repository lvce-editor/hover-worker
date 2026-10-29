import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-returns-number',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return 42
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
