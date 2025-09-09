import type { HoverState } from '../HoverState/HoverState.ts'
import * as FindWidgetStates from '../HoverStates/HoverStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number, editorUid: number, editorLanguageId: string): void => {
  const state: HoverState = {
    uid,
    focusedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    focused: false,
    leadingWord: '',
    version: 0,
    editorUid,
    editorLanguageId,
    fallbackDisplayStringLanguageId: 'typescript',
    hoverDocumentationFontSize: 15,
    hoverDocumentationFontFamily: 'Fira Code',
    hoverDocumentationLineHeight: '1.33333',
    hoverBorderLeft: 1,
    hoverBorderRight: 1,
    hoverPaddingLeft: 8,
    hoverPaddingRight: 8,
    hoverFullWidth: 400,
    documentation: '',
    lineInfos: [],
    matchingDiagnostics: [],
  }
  FindWidgetStates.set(uid, state, state)
}
