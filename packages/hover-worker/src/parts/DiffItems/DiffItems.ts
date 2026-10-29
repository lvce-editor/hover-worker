import type { HoverState } from '../HoverState/HoverState.ts'

export const isEqual = (oldState: HoverState, newState: HoverState): boolean => {
  return (
    oldState.documentation === newState.documentation &&
    oldState.leadingWord === newState.leadingWord &&
    oldState.x === newState.x &&
    oldState.y === newState.y
  )
}
