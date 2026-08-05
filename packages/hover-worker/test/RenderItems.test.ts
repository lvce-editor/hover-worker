import { test, expect } from '@jest/globals'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'

test('renderItems should return array for valid input', () => {
  const result = renderItems({ documentation: '', lineInfos: [], matchingDiagnostics: [], uid: 123 } as any, { documentation: '', lineInfos: [], matchingDiagnostics: [], uid: 456 } as any)
  
  expect(Array.isArray(result)).toBe(true)
  expect(result).toHaveLength(3)
  expect(result[0]).toBe('Viewlet.setDom2')
  expect(result[1]).toBe(456)
})

test('renderItems should handle different state objects', () => {
  const state1 = { documentation: '', lineInfos: [], matchingDiagnostics: [], uid: 111 }
  const state2 = { documentation: 'test', lineInfos: [], matchingDiagnostics: [], uid: 222 }
  
  const result1 = renderItems(state1 as any, state2 as any)
  const result2 = renderItems(state2 as any, state1 as any)
  
  expect(Array.isArray(result1)).toBe(true)
  expect(Array.isArray(result2)).toBe(true)
  expect(result1[1]).toBe(222)
  expect(result2[1]).toBe(111)
})
