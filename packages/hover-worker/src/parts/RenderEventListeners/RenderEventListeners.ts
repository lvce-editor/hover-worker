import type { HoverState } from '../HoverState/HoverState.ts'
import { getEventListeners } from '../GetEventListeners/GetEventListeners.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderEventListeners = (state: HoverState): readonly any[] => {
  const { uid } = state
  const eventListeners = getEventListeners()
  return [RenderMethod.SetEventListeners, uid, eventListeners]
}
