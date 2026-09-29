import type { HoverState } from '../HoverState/HoverState.ts'
import { getHoverVirtualDom } from '../GetHoverVirtualDom/GetHoverVirtualDom.ts'

export const renderItems = (oldState: HoverState, newState: HoverState): readonly any[] => {
  const { documentationVirtualDom, lineInfos, matchingDiagnostics, uid } = newState
  const dom = getHoverVirtualDom(lineInfos, documentationVirtualDom, matchingDiagnostics)
  return [/* method */ 'Viewlet.setDom2', uid, dom]
}
