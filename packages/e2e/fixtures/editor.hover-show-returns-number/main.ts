import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-returns-number',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return 42 as unknown as HoverResult
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
