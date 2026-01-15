import type { Change } from '../Change/Change.ts'
import { EditorWorker } from '@lvce-editor/rpc-registry'

export const applyEdit = async (editorUid: number, changes: readonly Change[]): Promise<void> => {
  // @ts-ignore
  await EditorWorker.invoke('Editor.applyEdit2', editorUid, changes)
}
