import type { HoverState } from '../HoverState/HoverState.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderBounds = (oldState: HoverState, newState: HoverState): readonly any[] => {
  const { x, y, width, height, uid } = newState
  return [RenderMethod.SetBounds, uid, x, y, width, height]
}
