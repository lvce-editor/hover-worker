const provider = {
  languageId: 'xyz',
  async provideHover(textDocument, offset) {
    throw new Error('Async provider error')
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
