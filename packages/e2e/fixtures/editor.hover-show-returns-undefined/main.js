const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return undefined
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
