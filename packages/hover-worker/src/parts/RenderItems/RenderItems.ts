import type { HoverState } from '../HoverState/HoverState.ts'
import { getHoverVirtualDom } from '../GetHoverVirtualDom/GetHoverVirtualDom.ts'

export const renderItems = (oldState: HoverState, newState: HoverState): readonly any[] => {
  const { uid } = newState
  const dom = getHoverVirtualDom([], {}, {})
  return [/* method */ 'Viewlet.setDom2', uid, dom]
}
