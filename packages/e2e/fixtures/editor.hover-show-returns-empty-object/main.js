import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-returns-empty-object',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {}
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
