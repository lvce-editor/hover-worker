import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-returns-undefined',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return undefined
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
