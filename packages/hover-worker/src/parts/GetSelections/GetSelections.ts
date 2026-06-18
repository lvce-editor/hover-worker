import { EditorWorker } from '@lvce-editor/rpc-registry'

export const getSelections = async (editorUid: number): Promise<readonly number[]> => {
  const selections = await EditorWorker.invoke('Editor.getSelections2', editorUid)
  return selections
}
