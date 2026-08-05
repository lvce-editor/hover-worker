import { test, expect } from '@jest/globals'
import { handleSashPointerDown } from '../src/parts/HandleSashPointerDown/HandleSashPointerDown.ts'

test('handleSashPointerDown should return the same state', () => {
  const mockState = { test: 'state' }
  const result = handleSashPointerDown(mockState as any, 100, 200)

  expect(result).toBe(mockState)
})

test('handleSashPointerDown should handle different event coordinates', () => {
  const mockState = { test: 'state' }

  const result1 = handleSashPointerDown(mockState as any, 50, 75)
  const result2 = handleSashPointerDown(mockState as any, 150, 250)
  const result3 = handleSashPointerDown(mockState as any, 0, 0)

  expect(result1).toBe(mockState)
  expect(result2).toBe(mockState)
  expect(result3).toBe(mockState)
})

test('handleSashPointerDown should handle null/undefined values', () => {
  const mockState = { test: 'state' }

  const result1 = handleSashPointerDown(mockState as any, null as any, null as any)
  const result2 = handleSashPointerDown(mockState as any, undefined as any, undefined as any)

  expect(result1).toBe(mockState)
  expect(result2).toBe(mockState)
})
