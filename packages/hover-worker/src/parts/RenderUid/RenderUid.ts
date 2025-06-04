import type { HoverState } from '../HoverState/HoverState.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderUid = (oldState: HoverState, newState: HoverState): readonly any[] => {
  const { uid, editorUid } = newState
  return [RenderMethod.SetUid, uid, editorUid]
}
