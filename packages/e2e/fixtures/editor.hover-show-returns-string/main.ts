import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-returns-string',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return 'invalid string response' as unknown as HoverResult
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
