import type { HoverState } from '../HoverState/HoverState.ts'
import { getHoverVirtualDom } from '../GetHoverVirtualDom/GetHoverVirtualDom.ts'

export const renderItems = (oldState: HoverState, newState: HoverState): readonly any[] => {
  const { documentation, lineInfos, matchingDiagnostics, uid } = newState
  const dom = getHoverVirtualDom(lineInfos, documentation, matchingDiagnostics)
  return [/* method */ 'Viewlet.setDom2', uid, dom]
}
