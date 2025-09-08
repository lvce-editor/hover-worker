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
  }
}
