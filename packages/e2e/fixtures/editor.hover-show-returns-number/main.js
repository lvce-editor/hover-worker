const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return 42
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
