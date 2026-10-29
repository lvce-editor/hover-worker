import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-returns-undefined',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return undefined
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
