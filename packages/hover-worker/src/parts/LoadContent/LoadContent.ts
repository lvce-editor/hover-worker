import type { HoverState } from '../HoverState/HoverState.ts'
import { getEditorHoverInfo } from '../GetHoverInfo/GetHoverInfo.ts'
import * as GetPositionAtCursor from '../GetPositionAtCursor/GetPositionAtCursor.ts'
import * as GetWordAtOffset from '../GetWordAtOffset/GetWordAtOffset.ts'

export const loadContent = async (state: HoverState): Promise<HoverState> => {
  const {
    editorLanguageId,
    editorUid,
    fallbackDisplayStringLanguageId,
    hoverBorderLeft,
    hoverBorderRight,
    hoverDocumentationFontFamily,
    hoverDocumentationFontSize,
    hoverDocumentationLineHeight,
    hoverFullWidth,
    hoverPaddingLeft,
    hoverPaddingRight,
  } = state
  const wordAtOffset = await GetWordAtOffset.getWordAtOffset(editorUid)
  const { x, y } = await GetPositionAtCursor.getPositionAtCursor(editorUid)

  const info = await getEditorHoverInfo(
    editorUid,
    editorLanguageId,
    hoverFullWidth,
    hoverPaddingLeft,
    hoverPaddingRight,
    hoverBorderLeft,
    hoverBorderRight,
    hoverDocumentationFontFamily,
    hoverDocumentationFontSize,
    hoverDocumentationLineHeight,
    fallbackDisplayStringLanguageId,
  )
  if (!info) {
    return {
      ...state,
    }
  }
  const { documentation, lineInfos, matchingDiagnostics } = info
  return {
    ...state,
    documentation,
    leadingWord: wordAtOffset,
    lineInfos,
    matchingDiagnostics,
    width: 300,
    x,
    y,
  }
}
