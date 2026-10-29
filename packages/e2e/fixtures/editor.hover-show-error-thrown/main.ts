import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-error-thrown',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    throw new Error('Provider error')
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
