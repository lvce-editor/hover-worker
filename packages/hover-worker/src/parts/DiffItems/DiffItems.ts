import type { HoverState } from '../HoverState/HoverState.ts'

export const isEqual = (oldState: HoverState, newState: HoverState): boolean => {
  return oldState.leadingWord === newState.leadingWord
}
