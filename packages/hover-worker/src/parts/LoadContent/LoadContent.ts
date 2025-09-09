import type { HoverState } from '../HoverState/HoverState.ts'
import * as GetPositionAtCursor from '../GetPositionAtCursor/GetPositionAtCursor.ts'
import * as GetWordAtOffset from '../GetWordAtOffset/GetWordAtOffset.ts'

export const loadContent = async (state: HoverState): Promise<HoverState> => {
  const { editorUid } = state
  const wordAtOffset = await GetWordAtOffset.getWordAtOffset(editorUid)
  const { x, y } = await GetPositionAtCursor.getPositionAtCursor(editorUid)

  return {
    ...state,
    leadingWord: wordAtOffset,
    x,
    y,
  }
}
