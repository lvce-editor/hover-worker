import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-error-thrown',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    throw new Error('Provider error')
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
