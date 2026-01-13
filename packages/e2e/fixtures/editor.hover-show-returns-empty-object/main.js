const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {}
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
