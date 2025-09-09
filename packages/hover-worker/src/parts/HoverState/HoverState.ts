type LineInfo = readonly string[]

export interface HoverState {
  readonly documentation: string
  readonly editorLanguageId: string
  readonly editorUid: number
  readonly fallbackDisplayStringLanguageId: string
  readonly focused: boolean
  readonly focusedIndex: number
  readonly height: number
  readonly hoverBorderLeft: number
  readonly hoverBorderRight: number
  readonly hoverDocumentationFontFamily: string
  readonly hoverDocumentationFontSize: number
  readonly hoverDocumentationLineHeight: string
  readonly hoverPaddingLeft: number
  readonly hoverPaddingRight: number
  readonly hovverFullWidth: number
  readonly leadingWord: string
  readonly lineInfos: readonly LineInfo[]
  readonly matchingDiagnostics: readonly any[]
  readonly uid: number
  readonly version: number
  readonly width: number
  readonly x: number
  readonly y: number
}
