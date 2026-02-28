import { test, expect } from '@jest/globals'
import { getHover } from '../src/parts/Hover/Hover.ts'

test('getHover should handle valid inputs', async () => {
  const result = await getHover(123, 'typescript', 42)

  expect(result).toHaveProperty('error')
  expect(result).toHaveProperty('hover')
})

test('getHover should handle different language IDs', async () => {
  const result1 = await getHover(123, 'javascript', 42)
  const result2 = await getHover(456, 'python', 100)

  expect(result1).toHaveProperty('error')
  expect(result1).toHaveProperty('hover')
  expect(result2).toHaveProperty('error')
  expect(result2).toHaveProperty('hover')
})

test('getHover should handle different editor UIDs and offsets', async () => {
  const result1 = await getHover(0, 'typescript', 0)
  const result2 = await getHover(999, 'css', 999)

  expect(result1).toHaveProperty('error')
  expect(result1).toHaveProperty('hover')
  expect(result2).toHaveProperty('error')
  expect(result2).toHaveProperty('hover')
})
