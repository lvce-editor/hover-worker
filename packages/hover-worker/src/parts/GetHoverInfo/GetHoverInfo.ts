import { EditorWorker } from '@lvce-editor/rpc-registry'
import * as Assert from '../Assert/Assert.ts'
import * as EditorPosition from '../EditorCommand/EditorCommandPosition.ts'
import { getOffsetAtCursor } from '../GetOffsetAtCursor/GetOffsetAtCursor.ts'
import { getPositionAtCursor } from '../GetPositionAtCursor/GetPositionAtCursor.ts'
import * as Hover from '../Hover/Hover.ts'
import * as MeasureTextHeight from '../MeasureTextHeight/MeasureTextHeight.ts'
import * as TokenizeCodeBlock from '../TokenizeCodeBlock/TokenizeCodeBlock.ts'

const getMatchingDiagnostics = (diagnostics: any, rowIndex: number, columnIndex: number) => {
  const matching: any[] = []
  for (const diagnostic of diagnostics) {
    if (diagnostic.rowIndex === rowIndex) {
      matching.push(diagnostic)
    }
  }
  return matching
}

const getHoverPositionXy = (editor: any, rowIndex: number, wordStart: any, documentationHeight: any) => {
  const x = EditorPosition.x(editor, rowIndex, wordStart)
  const y = editor.height - EditorPosition.y(editor, rowIndex) + editor.y + 40
  return {
    x,
    y,
  }
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
  const { rowIndex, columnIndex } = await getPositionAtCursor(editorUid)
  const offset = getOffsetAtCursor(editorUid)
  const hover = await Hover.getHover(editorUid, editorLanguageId, offset)
  if (!hover) {
    return undefined
  }
  const { displayString, documentation, displayStringLanguageId } = hover

  const hoverDocumentationWidth = hoverFullWidth - hoverPaddingLeft - hoverPaddingRight - hoverBorderLeft - hoverBorderRight

  const tokenizerPath = ''
  const lineInfos = await TokenizeCodeBlock.tokenizeCodeBlock(
    displayString,
    displayStringLanguageId || fallbackDisplayStringLanguageId,
    tokenizerPath,
  )
  const wordPart = await EditorWorker.getWordBefore(editorUid, rowIndex, columnIndex)
  const wordStart = columnIndex - wordPart.length
  const documentationHeight = await MeasureTextHeight.measureTextBlockHeight(
    documentation,
    hoverDocumentationFontFamily,
    hoverDocumentationFontSize,
    hoverDocumentationLineHeight,
    hoverDocumentationWidth,
  )
  // TODO
  const editor = {}
  const { x, y } = getHoverPositionXy(editor, rowIndex, wordStart, documentationHeight)
  // @ts-ignore
  const diagnostics = editor.diagnostics || []
  const matchingDiagnostics = getMatchingDiagnostics(diagnostics, rowIndex, columnIndex)
  return {
    lineInfos,
    documentation,
    x,
    y,
    matchingDiagnostics,
  }
}
