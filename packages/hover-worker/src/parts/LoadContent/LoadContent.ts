import type { HoverState } from '../HoverState/HoverState.ts'

export const loadContent = async (state: HoverState): Promise<HoverState> => {
  return {
    ...state,
  }
}
