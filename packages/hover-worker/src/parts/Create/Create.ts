import type { HoverState } from '../HoverState/HoverState.ts'
import * as FindWidgetStates from '../HoverStates/HoverStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number, editorUid: number, editorLanguageId: string): void => {
  const state: HoverState = {
    uid,
    items: [],
    itemHeight: 20,
    maxHeight: 150,
    minLineY: 0,
    maxLineY: 0,
    focusedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    deltaY: 0,
    finalDeltaY: 0,
    focused: false,
    headerHeight: 0,
    leadingWord: '',
    unfilteredItems: [],
    version: 0,
    editorUid,
    editorLanguageId,
    maxItems: 8,
  }
  FindWidgetStates.set(uid, state, state)
}
