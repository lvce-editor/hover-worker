const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'only text field',
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
