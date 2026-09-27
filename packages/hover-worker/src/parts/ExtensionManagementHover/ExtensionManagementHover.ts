import { EditorWorker, ExtensionManagementWorker } from '@lvce-editor/rpc-registry'

interface TextDocument {
  readonly documentId: number
  readonly languageId: string
  readonly text: string
  readonly uri: string
}

const getTextDocument = async (editorUid: number, languageId: string): Promise<TextDocument> => {
  const [lines, uri] = await Promise.all([EditorWorker.getLines(editorUid), EditorWorker.getUri(editorUid)])
  return {
    documentId: editorUid,
    languageId,
    text: lines.join('\n'),
    uri,
  }
}

export const executeHoverProvider = async (editorUid: number, editorLanguageId: string, offset: number): Promise<any> => {
  const textDocument = await getTextDocument(editorUid, editorLanguageId)
  return ExtensionManagementWorker.invoke('Extensions.executeHoverProvider', textDocument, offset)
}
