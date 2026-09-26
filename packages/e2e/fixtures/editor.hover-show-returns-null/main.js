import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-returns-null',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return null
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
