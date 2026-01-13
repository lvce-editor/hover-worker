const provider = {
  languageId: 'xyz',
  provideHover(textDocument, offset) {
    return {
      text: 'valid',
      documentation: 'valid doc',
      extraField: 'should be ignored',
      anotherField: 123,
      nested: { object: 'value' },
    }
  },
}

export const activate = () => {
  // @ts-ignore
  vscode.registerHoverProvider(provider)
}
