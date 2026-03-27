import { EditorWorker } from '@lvce-editor/rpc-registry'

export const getLines = async (editorUid: number): Promise<readonly string[]> => {
  const lines = await EditorWorker.invoke('Editor.getLines2', editorUid)
  return lines
}
