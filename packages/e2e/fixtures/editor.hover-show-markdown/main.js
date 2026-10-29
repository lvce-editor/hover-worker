const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'signature',
      documentation: 'Read the [API guide](https://example.com/api).\n\n```ts\nconst answer = 42\n```',
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
