const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return ['invalid', 'data']
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
