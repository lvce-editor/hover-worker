import * as Assert from '../Assert/Assert.ts'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { getHoverDetails } from '../GetHoverDetails/GetHoverDetails.ts'
import { getHoverPositionXy } from '../GetHoverPositionXy/GetHoverPositionXy.ts'
import { getOffsetAtCursor } from '../GetOffsetAtCursor/GetOffsetAtCursor.ts'
import { getPositionAtCursor } from '../GetPositionAtCursor/GetPositionAtCursor.ts'
import * as Hover from '../Hover/Hover.ts'

const getMatchingDiagnostics = (diagnostics: any, rowIndex: number, columnIndex: number) => {
  const matching: any[] = []
  for (const diagnostic of diagnostics) {
    if (diagnostic.rowIndex === rowIndex) {
      matching.push(diagnostic)
    }
  }
  return matching
}

export const getEditorHoverInfo = async (
  editorUid: number,
  editorLanguageId: string,
  hoverFullWidth: number,
  hoverPaddingLeft: number,
  hoverPaddingRight: number,
  hoverBorderLeft: number,
  hoverBorderRight: number,
  hoverDocumentationFontFamily: string,
  hoverDocumentationFontSize: number,
  hoverDocumentationLineHeight: string,
  fallbackDisplayStringLanguageId: string,
) => {
  Assert.number(editorUid)
  const { columnIndex, rowIndex } = await getPositionAtCursor(editorUid)
  const offset = getOffsetAtCursor(editorUid)

  // @ts-ignore
  const diagnostics = await EditorWorker.invoke('Editor.getDiagnostics', editorUid)

  const wordPart = await EditorWorker.getWordBefore(editorUid, rowIndex, columnIndex)
  const wordStart = columnIndex - wordPart.length

  // TODO
  const editor = {}
  const { x, y } = getHoverPositionXy(editor, rowIndex, wordStart)
  // @ts-ignore
  const matchingDiagnostics = getMatchingDiagnostics(diagnostics, rowIndex, columnIndex)

  const { error, hover } = await Hover.getHover(editorUid, editorLanguageId, offset)
  if (!hover) {
    return {
      documentation: '',
      lineInfos: [],
      matchingDiagnostics,
      x,
      y,
    }
  }

  const { documentation, lineInfos } = await getHoverDetails(
    hover,
    error,
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

  return {
    documentation,
    lineInfos,
    matchingDiagnostics,
    x,
    y,
  }
}
