import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetLineInfoVirtualDom from '../GetLineInfoVirtualDom/GetLineInfoVirtualDom.ts'

export const getLineInfosVirtualDom = (lineInfos: readonly (readonly string[])[]): readonly VirtualDomNode[] => {
  const dom = lineInfos.flatMap(GetLineInfoVirtualDom.getLineInfoVirtualDom)
  return dom
}
