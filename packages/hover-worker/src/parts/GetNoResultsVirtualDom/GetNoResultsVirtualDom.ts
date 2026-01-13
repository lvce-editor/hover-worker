import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as EditorStrings from '../EditorStrings/EditorStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const parentNode: VirtualDomNode = {
  childCount: 1,
  type: VirtualDomElements.Div,
}

export const getNoResultsVirtualDom = (): readonly VirtualDomNode[] => {
  return [parentNode, text(EditorStrings.noSuggestions())]
}
