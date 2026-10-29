import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-mixed-providers',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'mixed-provider signature',
      documentation: 'def',
      extraField: 'ignored',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
