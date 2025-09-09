import type { PositionAtCursor } from '../PositionAtCursor/PositionAtCursor.ts'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const getPositionAtCursor = async (editorUid: number): Promise<PositionAtCursor> => {
  const position = await EditorWorker.invoke('Editor.getPositionAtCursor', editorUid)
  return position
}
