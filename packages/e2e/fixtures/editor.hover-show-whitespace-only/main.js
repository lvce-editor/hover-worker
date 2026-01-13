const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: '   ',
      documentation: '\n\t  \n',
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
