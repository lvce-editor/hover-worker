const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    throw new Error('Provider error')
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
