import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-returns-null',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return null as unknown as HoverResult
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
