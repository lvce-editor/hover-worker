import { activate as activateExtensionApi, registerHoverProvider, type HoverProvider, type HoverResult } from '@lvce-editor/api'

const provider: HoverProvider = {
  id: 'editor-hover-show-extra-properties',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'valid',
      documentation: 'valid doc',
      extraField: 'should be ignored',
      anotherField: 123,
      nested: { object: 'value' },
    } as HoverResult
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
