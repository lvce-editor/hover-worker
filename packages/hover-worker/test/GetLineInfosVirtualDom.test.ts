import { test, expect } from '@jest/globals'
import { getLineInfosVirtualDom } from '../src/parts/GetLineInfosVirtualDom/GetLineInfosVirtualDom.ts'

test('getLineInfosVirtualDom should return empty array for empty line infos', () => {
  const result = getLineInfosVirtualDom([])

  expect(Array.isArray(result)).toBe(true)
  expect(result).toHaveLength(0)
})

test('getLineInfosVirtualDom should handle line infos array', () => {
  const mockLineInfos = [['const x = 5', 'token1', 'console.log(x)', 'token2']]

  const result = getLineInfosVirtualDom(mockLineInfos)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})
