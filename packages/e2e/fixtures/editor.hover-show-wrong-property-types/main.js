const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 123, // should be string
      documentation: ['array', 'instead', 'of', 'string'], // should be string
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
