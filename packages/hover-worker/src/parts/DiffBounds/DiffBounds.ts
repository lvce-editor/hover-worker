import type { HoverState } from '../HoverState/HoverState.ts'

export const isEqual = (oldState: HoverState, newState: HoverState): boolean => {
  return oldState.x === newState.x && oldState.y === newState.y && oldState.width === newState.width && oldState.height === newState.height
}
