import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-promise-rejection',
  languageId: 'xyz',
  async provideHover(textDocument, offset) {
    throw new Error('Async provider error')
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
