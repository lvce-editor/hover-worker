import { test, expect } from '@jest/globals'
import { getEditorHoverInfo } from '../src/parts/GetHoverInfo/GetHoverInfo.ts'

test('getEditorHoverInfo should return hover info structure', async () => {
  const result = await getEditorHoverInfo(123, 'typescript', 400, 10, 10, 1, 1, 'Arial', 14, '1.4', 'javascript')

  expect(result).toHaveProperty('documentation')
  expect(result).toHaveProperty('lineInfos')
  expect(result).toHaveProperty('matchingDiagnostics')
  expect(result).toHaveProperty('x')
  expect(result).toHaveProperty('y')
  expect(typeof result.documentation).toBe('string')
  expect(Array.isArray(result.lineInfos)).toBe(true)
  expect(Array.isArray(result.matchingDiagnostics)).toBe(true)
  expect(typeof result.x).toBe('number')
  expect(typeof result.y).toBe('number')
})

test('getEditorHoverInfo should handle different parameters', async () => {
  const result1 = await getEditorHoverInfo(456, 'javascript', 800, 20, 20, 2, 2, 'Monaco', 16, '1.5', 'typescript')

  expect(result1).toHaveProperty('documentation')
  expect(result1).toHaveProperty('lineInfos')
  expect(result1).toHaveProperty('matchingDiagnostics')
  expect(result1).toHaveProperty('x')
  expect(result1).toHaveProperty('y')
})
