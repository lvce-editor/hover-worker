/* eslint-disable unicorn/no-immediate-mutation */
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetLineInfosVirtualDom from '../GetLineInfosVirtualDom/GetLineInfosVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

interface Diagnostic {
  readonly code: number
  readonly message: string
  readonly source: string
}

const hoverClassName = MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.EditorHover)
const problemClassName = MergeClassNames.mergeClassNames(ClassNames.HoverDisplayString, ClassNames.HoverProblem)
const hoverDocumentationClassName = MergeClassNames.mergeClassNames(ClassNames.HoverDocumentation, 'Markdown')

const hoverProblemMessage: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.HoverProblemMessage,
  type: VirtualDomElements.Span,
}

const hoverProblemDetail: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.HoverProblemDetail,
  type: VirtualDomElements.Span,
}

const sash: VirtualDomNode = {
  childCount: 0,
  className: MergeClassNames.mergeClassNames('Sash', 'SashVertical', 'SashResize'),
  onPointerDown: DomEventListenerFunctions.HandleSashPointerDown,
  type: VirtualDomElements.Div,
}

const getChildCount = (
  lineInfos: readonly (readonly string[])[],
  documentationVirtualDom: readonly VirtualDomNode[],
  diagnostics: readonly Diagnostic[],
): number => {
  const diagnosticsCount = diagnostics && diagnostics.length > 0 ? 1 : 0
  const lineInfosCount = lineInfos.length > 0 ? 1 : 0
  const documentationCount = documentationVirtualDom.length > 0 ? 1 : 0
  return lineInfosCount + documentationCount + diagnosticsCount
}

const getDocumentationChildCount = (documentationVirtualDom: readonly VirtualDomNode[]): number => {
  let stack: VirtualDomNode[] = []
  for (let i = documentationVirtualDom.length - 1; i >= 0; i--) {
    const node = documentationVirtualDom[i]
    if (node.childCount > 0) {
      stack = stack.slice(node.childCount)
    }
    stack.unshift(node)
  }
  return stack.length
}

export const getHoverVirtualDom = (
  lineInfos: readonly (readonly string[])[],
  documentationVirtualDom: readonly VirtualDomNode[],
  diagnostics: readonly Diagnostic[],
): readonly VirtualDomNode[] => {
  if (lineInfos.length === 0 && documentationVirtualDom.length === 0 && diagnostics.length === 0) {
    return []
  }
  const dom: VirtualDomNode[] = []
  dom.push({
    childCount: getChildCount(lineInfos, documentationVirtualDom, diagnostics) + 1,
    className: hoverClassName,
    type: VirtualDomElements.Div,
  })
  if (diagnostics && diagnostics.length > 0) {
    dom.push({
      childCount: diagnostics.length * 2,
      className: problemClassName,
      type: VirtualDomElements.Div,
    })
    for (const diagnostic of diagnostics) {
      dom.push(hoverProblemMessage, text(diagnostic.message), hoverProblemDetail, text(`${diagnostic.source} (${diagnostic.code})`))
    }
  }

  if (lineInfos.length > 0) {
    const lineInfosDom = GetLineInfosVirtualDom.getLineInfosVirtualDom(lineInfos)
    dom.push(
      {
        childCount: lineInfos.length,
        className: ClassNames.HoverDisplayString,
        type: VirtualDomElements.Div,
      },
      ...lineInfosDom,
    )
  }

  if (documentationVirtualDom.length > 0) {
    dom.push(
      {
        childCount: getDocumentationChildCount(documentationVirtualDom),
        className: hoverDocumentationClassName,
        type: VirtualDomElements.Div,
      },
      ...documentationVirtualDom,
    )
  }

  dom.push(sash)

  return dom
}
