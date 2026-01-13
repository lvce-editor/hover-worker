const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: '<script>alert("xss")</script>',
      documentation: 'Test & <b>HTML</b> "quotes" \'apostrophes\' <img src=x onerror=alert(1)>',
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
