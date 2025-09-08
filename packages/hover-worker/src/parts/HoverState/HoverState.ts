export interface HoverState {
  readonly uid: number
  readonly focusedIndex: number
  readonly focused: boolean
  readonly leadingWord: string
  readonly version: number
  readonly editorUid: number
  readonly editorLanguageId: string
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
}
