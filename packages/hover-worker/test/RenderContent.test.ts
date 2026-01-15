import { test, expect } from '@jest/globals'
import { renderContent } from '../src/parts/RenderContent/RenderContent.ts'

test('renderContent should return array for valid input', () => {
  const result = renderContent({ uid: 123 } as any, { uid: 456 } as any)
  
  expect(Array.isArray(result)).toBe(true)
  expect(result).toHaveLength(3)
  expect(result[0]).toBe('Viewlet.setDom2')
  expect(result[1]).toBe(456)
})

test('renderContent should handle different state objects', () => {
  const state1 = { uid: 111 }
  const state2 = { uid: 222 }
  
  const result1 = renderContent(state1 as any, state2 as any)
  const result2 = renderContent(state2 as any, state1 as any)
  
  expect(Array.isArray(result1)).toBe(true)
  expect(Array.isArray(result2)).toBe(true)
  expect(result1[1]).toBe(222)
  expect(result2[1]).toBe(111)
})
