import { test, expect } from '@jest/globals'
import { handleSashPointerMove } from '../src/parts/HandleSashPointerMove/HandleSashPointerMove.ts'

test('handleSashPointerMove should return the same state', () => {
  const mockState = { test: 'state' }
  const result = handleSashPointerMove(mockState as any, 100, 200)

  expect(result).toBe(mockState)
})

test('handleSashPointerMove should handle different coordinates', () => {
  const mockState = { test: 'state' }

  const result1 = handleSashPointerMove(mockState as any, 50, 75)
  const result2 = handleSashPointerMove(mockState as any, 150, 250)
  const result3 = handleSashPointerMove(mockState as any, 0, 0)

  expect(result1).toBe(mockState)
  expect(result2).toBe(mockState)
  expect(result3).toBe(mockState)
})

test('handleSashPointerMove should handle null/undefined values', () => {
  const mockState = { test: 'state' }

  const result1 = handleSashPointerMove(mockState as any, null as any, null as any)
  const result2 = handleSashPointerMove(mockState as any, undefined as any, undefined as any)

  expect(result1).toBe(mockState)
  expect(result2).toBe(mockState)
})
