import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-mixed-providers',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'mixed-provider signature',
      documentation: 'def',
      extraField: 'ignored',
    } as HoverResult
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
