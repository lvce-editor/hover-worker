import { expect, test } from '@jest/globals'
import { getHoverVirtualDom } from '../src/parts/GetHoverVirtualDom/GetHoverVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import { text } from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('getHoverVirtualDom omits empty content and renders each available section', () => {
  expect(getHoverVirtualDom([], [], [])).toEqual([])

  const diagnostics = [{ code: 7, message: 'problem', source: 'TypeScript' }]
  const documentation = [{ childCount: 1, type: VirtualDomElements.Div }, text('documentation')]
  const dom = getHoverVirtualDom([['const x', 'keyword']], documentation, diagnostics)

  expect(dom.length).toBeGreaterThan(5)
  expect(dom.some((node) => node.text === 'problem')).toBe(true)
  expect(dom.some((node) => node.text === 'TypeScript (7)')).toBe(true)
  expect(dom.some((node) => node.text === 'documentation')).toBe(true)
})

test('getHoverVirtualDom renders diagnostics, line info, and documentation independently', () => {
  expect(getHoverVirtualDom([], [], [{ code: 1, message: 'message', source: 'source' }])).toHaveLength(7)
  expect(getHoverVirtualDom([['code', 'token']], [], [])).toHaveLength(6)
  expect(getHoverVirtualDom([], [text('docs')], [])).toHaveLength(4)
})

test('getHoverVirtualDom wraps nested Markdown virtual DOM with the correct child count', () => {
  const documentation = [
    { childCount: 1, type: VirtualDomElements.Div },
    { childCount: 1, type: VirtualDomElements.Div },
    text('link'),
    { childCount: 1, type: VirtualDomElements.Div },
    { childCount: 1, type: VirtualDomElements.Div },
    text('code'),
  ]

  const dom = getHoverVirtualDom([], documentation, [])
  const documentationWrapper = dom[1]

  expect(documentationWrapper.childCount).toBe(2)
  expect(dom[2]).toBe(documentation[0])
})

test('getHoverVirtualDom counts diagnostics, signature, and documentation together', () => {
  const diagnostics = [{ code: 1, message: 'Unexpected console statement', source: 'no-console' }]
  const documentation = [text('The value may be undefined.')]

  const dom = getHoverVirtualDom([['const value: undefined']], documentation, diagnostics)

  expect(dom[0].childCount).toBe(4)
  expect(dom.map((node) => node.text).filter(Boolean)).toEqual([
    'Unexpected console statement',
    'no-console (1)',
    'const value: undefined',
    'The value may be undefined.',
  ])
})
