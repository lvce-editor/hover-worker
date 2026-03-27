import { EditorWorker } from '@lvce-editor/rpc-registry'

export const getWordBefore = async (editorUid: number, rowIndex: number, columnIndex: number): Promise<string> => {
  return EditorWorker.invoke('Editor.getWordBefore2', editorUid, rowIndex, columnIndex)
}
