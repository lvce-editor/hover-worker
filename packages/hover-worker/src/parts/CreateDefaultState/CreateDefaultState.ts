import type { HoverState } from '../HoverState/HoverState.ts'

export const createDefaultState = (): HoverState => {
  return {
    documentation: '',
    editorLanguageId: '',
    editorUid: 0,
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
    uid: 0,
    version: 0,
    width: 0,
    x: 0,
    y: 0,
  }
}
