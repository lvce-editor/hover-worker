import { activate as activateExtensionApi, registerHoverProvider } from '@lvce-editor/api'

const provider = {
  id: 'hover-special-characters',
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: '<script>alert("xss")</script>',
      documentation: 'Test & <b>HTML</b> "quotes" \'apostrophes\' <img src=x onerror=alert(1)>',
    }
  },
}

await activateExtensionApi()
registerHoverProvider(provider)
