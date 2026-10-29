import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'editor-hover-show-extra-properties',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'valid',
      documentation: 'valid doc',
      extraField: 'should be ignored',
      anotherField: 123,
      nested: { object: 'value' },
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
