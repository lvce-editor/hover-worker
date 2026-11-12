import { activate as activateExtensionApi, registerDiagnosticProvider, type DiagnosticProvider } from '@lvce-editor/api'

const diagnosticProvider: DiagnosticProvider = {
  id: 'editor-diagnostic-hover-long-text',
  languageId: 'xyz',
  provideDiagnostics() {
    return [
      {
        rowIndex: 0,
        columnIndex: 11,
        endRowIndex: 0,
        endColumnIndex: 22,
        message: 'This diagnostic message is intentionally long and wraps across many lines. '.repeat(40),
        source: 'hover-test',
        code: 'E001',
        type: 'error',
      },
    ]
  },
}

await activateExtensionApi()
registerDiagnosticProvider(diagnosticProvider)
