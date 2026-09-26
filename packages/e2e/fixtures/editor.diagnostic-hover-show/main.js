import { activate as activateExtensionApi, registerDiagnosticProvider } from '@lvce-editor/api'

const diagnosticProvider = {
  id: 'editor-diagnostic-hover-show',
  languageId: 'xyz',
  provideDiagnostics(textDocument, offset) {
    return [
      {
        rowIndex: 0,
        columnIndex: 11,
        endRowIndex: 0,
        endColumnIndex: 22,
        message: 'error',
        source: 'hover-test',
        code: 'E001',
        type: 'error',
      },
    ]
  },
}

await activateExtensionApi()
registerDiagnosticProvider(diagnosticProvider)
