const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(50)
    return {
      text: 'signature',
      documentation: longText,
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
