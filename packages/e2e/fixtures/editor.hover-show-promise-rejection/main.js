import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-promise-rejection',
  languageId: 'xyz',
  async provideHover(textDocument, offset) {
    throw new Error('Async provider error')
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
