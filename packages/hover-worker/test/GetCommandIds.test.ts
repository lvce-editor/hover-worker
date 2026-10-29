import { test, expect } from '@jest/globals'
import { getCommandIds } from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('getCommandIds should return an array of command IDs', () => {
  const result = getCommandIds()
  expect(Array.isArray(result)).toBe(true)
})

test('getCommandIds should return readonly array of strings', () => {
  const result = getCommandIds()
  expect(result.every((id: string) => typeof id === 'string')).toBe(true)
})

test('getCommandIds should return consistent results across calls', () => {
  const result1 = getCommandIds()
  const result2 = getCommandIds()
  expect(result1).toEqual(result2)
})
