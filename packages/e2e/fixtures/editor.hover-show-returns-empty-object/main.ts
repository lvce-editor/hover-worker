import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-returns-empty-object',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {}
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
