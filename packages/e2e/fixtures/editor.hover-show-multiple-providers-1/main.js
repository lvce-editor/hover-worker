const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'first',
      documentation: 'First provider',
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
