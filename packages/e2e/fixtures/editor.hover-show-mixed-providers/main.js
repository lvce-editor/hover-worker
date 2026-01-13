const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    throw new Error('First provider fails')
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
