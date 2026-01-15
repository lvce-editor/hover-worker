import { test, expect } from '@jest/globals'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'

test('renderItems should return empty array for any input', () => {
  const result = renderItems({} as any, {} as any)

  expect(Array.isArray(result)).toBe(true)
  expect(result).toHaveLength(0)
})

test('renderItems should handle different state objects', () => {
  const state1 = { test: 'state1' }
  const state2 = { other: 'value', test: 'state2' }

  const result1 = renderItems(state1 as any, state2 as any)
  const result2 = renderItems(state2 as any, state1 as any)

  expect(Array.isArray(result1)).toBe(true)
  expect(Array.isArray(result2)).toBe(true)
  expect(result1).toHaveLength(0)
  expect(result2).toHaveLength(0)
})

test('renderItems should handle null/undefined states', () => {
  const result1 = renderItems(null as any, null as any)
  const result2 = renderItems(undefined as any, undefined as any)

  expect(Array.isArray(result1)).toBe(true)
  expect(Array.isArray(result2)).toBe(true)
  expect(result1).toHaveLength(0)
  expect(result2).toHaveLength(0)
})
