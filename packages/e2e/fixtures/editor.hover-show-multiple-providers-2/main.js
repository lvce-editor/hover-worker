const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'second',
      documentation: 'Second provider',
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
