import { test, expect } from '@jest/globals'
import { render2 } from '../src/parts/Render2/Render2.ts'

test.skip('render2 should return array for valid input', () => {
  const result = render2(123, [1, 2, 3])
  
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test.skip('render2 should handle different inputs', () => {
  const result1 = render2(456, [4, 5, 6])
  const result2 = render2(789, [7, 8, 9])
  
  expect(Array.isArray(result1)).toBe(true)
  expect(Array.isArray(result2)).toBe(true)
  expect(result1.length).toBeGreaterThan(0)
  expect(result2.length).toBeGreaterThan(0)
})
