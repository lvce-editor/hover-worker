const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: '',
      documentation: '',
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
