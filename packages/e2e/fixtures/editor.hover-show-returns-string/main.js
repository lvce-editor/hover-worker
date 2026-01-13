const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return 'invalid string response'
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
