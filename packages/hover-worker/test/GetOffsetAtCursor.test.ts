import { test, expect } from '@jest/globals'
import { getOffsetAtCursor } from '../src/parts/GetOffsetAtCursor/GetOffsetAtCursor.ts'

test('getOffsetAtCursor should return 0 for any editor UID', () => {
  const result1 = getOffsetAtCursor(123)
  const result2 = getOffsetAtCursor(456)
  const result3 = getOffsetAtCursor(0)

  expect(result1).toBe(0)
  expect(result2).toBe(0)
  expect(result3).toBe(0)
})

test('getOffsetAtCursor should handle string editor UIDs', () => {
  const result = getOffsetAtCursor('editor-123')

  expect(result).toBe(0)
})

test('getOffsetAtCursor should handle null/undefined editor UIDs', () => {
  const result1 = getOffsetAtCursor(null as any)
  const result2 = getOffsetAtCursor(undefined as any)

  expect(result1).toBe(0)
  expect(result2).toBe(0)
})
