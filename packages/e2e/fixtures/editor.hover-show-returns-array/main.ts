import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-returns-array',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return ['invalid', 'data'] as unknown as HoverResult
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
