import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-returns-array',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return ['invalid', 'data']
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
