import type { PositionAtCursor } from '../PositionAtCursor/PositionAtCursor.ts'
import { EditorWorker } from '@lvce-editor/rpc-registry'

export const getPositionAtCursor = async (editorUid: number): Promise<PositionAtCursor> => {
  const position = await EditorWorker.invoke('Editor.getPositionAtCursor', editorUid)
  return position
}
