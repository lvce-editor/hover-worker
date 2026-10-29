import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-only-documentation',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      documentation: 'only documentation field',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
