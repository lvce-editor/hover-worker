import { test, expect } from '@jest/globals'
import { render2 } from '../src/parts/Render2/Render2.ts'

test('render2 should return empty array for any input', () => {
  const result = render2({} as any, {} as any)

  expect(Array.isArray(result)).toBe(true)
  expect(result).toHaveLength(0)
})

test('render2 should handle different state objects', () => {
  const state1 = { test: 'state1' }
  const state2 = { other: 'value', test: 'state2' }

  const result1 = render2(state1 as any, state2 as any)
  const result2 = render2(state2 as any, state1 as any)

  expect(Array.isArray(result1)).toBe(true)
  expect(Array.isArray(result2)).toBe(true)
  expect(result1).toHaveLength(0)
  expect(result2).toHaveLength(0)
})

test('render2 should handle null/undefined states', () => {
  const result1 = render2(null as any, null as any)
  const result2 = render2(undefined as any, undefined as any)

  expect(Array.isArray(result1)).toBe(true)
  expect(Array.isArray(result2)).toBe(true)
  expect(result1).toHaveLength(0)
  expect(result2).toHaveLength(0)
})
