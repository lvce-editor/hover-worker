import type { HoverState } from '../HoverState/HoverState.ts'
import * as FindWidgetStates from '../HoverStates/HoverStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number, editorUid: number, editorLanguageId: string): void => {
  const state: HoverState = {
    documentation: '',
    editorLanguageId,
    editorUid,
    fallbackDisplayStringLanguageId: 'typescript',
    focused: false,
    focusedIndex: -1,
    height: 0,
    hoverBorderLeft: 1,
    hoverBorderRight: 1,
    hoverDocumentationFontFamily: 'Fira Code',
    hoverDocumentationFontSize: 15,
    hoverDocumentationLineHeight: '1.33333',
    hoverFullWidth: 400,
    hoverPaddingLeft: 8,
    hoverPaddingRight: 8,
    leadingWord: '',
    lineInfos: [],
    matchingDiagnostics: [],
    uid,
    version: 0,
    width: 0,
    x: 0,
    y: 0,
  }
  FindWidgetStates.set(uid, state, state)
}
