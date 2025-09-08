import type { HoverState } from '../HoverState/HoverState.ts'

export interface Renderer {
  (oldState: HoverState, newState: HoverState): readonly any[]
}
