const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      documentation: 'only documentation field',
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
