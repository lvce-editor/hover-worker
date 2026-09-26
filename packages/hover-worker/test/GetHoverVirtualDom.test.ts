import { expect, test } from '@jest/globals'
import { getHoverVirtualDom } from '../src/parts/GetHoverVirtualDom/GetHoverVirtualDom.ts'

test('getHoverVirtualDom omits empty content and renders each available section', () => {
  expect(getHoverVirtualDom([], '', [])).toEqual([])

  const diagnostics = [{ code: 7, message: 'problem', source: 'TypeScript' }]
  const dom = getHoverVirtualDom([['const x', 'keyword']], 'documentation', diagnostics)

  expect(dom.length).toBeGreaterThan(5)
  expect(dom.some((node) => node.text === 'problem')).toBe(true)
  expect(dom.some((node) => node.text === 'TypeScript (7)')).toBe(true)
  expect(dom.some((node) => node.text === 'documentation')).toBe(true)
})

test('getHoverVirtualDom renders diagnostics, line info, and documentation independently', () => {
  expect(getHoverVirtualDom([], '', [{ code: 1, message: 'message', source: 'source' }])).toHaveLength(7)
  expect(getHoverVirtualDom([['code', 'token']], '', [])).toHaveLength(6)
  expect(getHoverVirtualDom([], 'docs', [])).toHaveLength(4)
})
