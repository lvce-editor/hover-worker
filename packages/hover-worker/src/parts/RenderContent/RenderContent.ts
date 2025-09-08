import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { HoverState } from '../HoverState/HoverState.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderContent = (oldState: HoverState, newState: HoverState): readonly any[] => {
  const { uid } = newState
  const dom: readonly VirtualDomNode[] = []
  return [RenderMethod.SetDom2, uid, dom]
}
