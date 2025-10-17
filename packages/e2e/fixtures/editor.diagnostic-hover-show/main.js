const diagnosticProvider = {
  languageId: 'xyz',
  provideDiagnostics(textDocument, offset) {
    return [
      {
        rowIndex: 0,
        columnIndex: 11,
        endRowIndex: 0,
        endColumnIndex: 22,
        message: 'error',
        type: 'error',
      },
    ]
  },
}

export const activate = () => {
  vscode.registerDiagnosticProvider(diagnosticProvider)
}
