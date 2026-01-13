const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return null
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
