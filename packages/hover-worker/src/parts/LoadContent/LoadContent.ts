import type { HoverState } from '../HoverState/HoverState.ts'
import { getEditorHoverInfo } from '../GetHoverInfo/GetHoverInfo.ts'
import * as GetPositionAtCursor from '../GetPositionAtCursor/GetPositionAtCursor.ts'
import * as GetWordAtOffset from '../GetWordAtOffset/GetWordAtOffset.ts'

export const loadContent = async (state: HoverState): Promise<HoverState> => {
  const { editorUid, editorLanguageId } = state
  const wordAtOffset = await GetWordAtOffset.getWordAtOffset(editorUid)
  const { x, y } = await GetPositionAtCursor.getPositionAtCursor(editorUid)

  const info = await getEditorHoverInfo(editorUid, editorLanguageId, undefined)
  if (!info) {
    return {
      ...state,
    }
  }
  const { documentation, lineInfos, matchingDiagnostics } = info
  return {
    ...state,
    leadingWord: wordAtOffset,
    x,
    y,
    documentation,
    lineInfos,
    matchingDiagnostics,
  }
}
