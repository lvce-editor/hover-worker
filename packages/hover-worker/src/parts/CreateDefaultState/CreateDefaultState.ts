import type { HoverState } from '../HoverState/HoverState.ts'

export const createDefaultState = (): HoverState => {
  return {
    uid: 0,
    focusedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    focused: false,
    leadingWord: '',
    version: 0,
    editorUid: 0,
    editorLanguageId: '',
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
}
