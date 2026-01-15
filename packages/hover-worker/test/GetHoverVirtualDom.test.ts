import { test, expect } from '@jest/globals'
import { getHoverVirtualDom } from '../src/parts/GetHoverVirtualDom/GetHoverVirtualDom.ts'

test('getHoverVirtualDom should return array for empty inputs', () => {
  const result = getHoverVirtualDom([], null, [])
  
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('getHoverVirtualDom should handle line infos', () => {
  const mockLineInfos = [
    ['const x = 5', 'token1']
  ]
  
  const result = getHoverVirtualDom(mockLineInfos, null, [])
  
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('getHoverVirtualDom should handle documentation', () => {
  const result = getHoverVirtualDom([], 'This is documentation', [])
  
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('getHoverVirtualDom should handle diagnostics', () => {
  const mockDiagnostics = [
    { message: 'Error message', source: 'TypeScript', code: '123' }
  ]
  
  const result = getHoverVirtualDom([], null, mockDiagnostics)
  
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('getHoverVirtualDom should handle all inputs', () => {
  const mockLineInfos = [['const x = 5', 'token1']]
  const mockDiagnostics = [
    { message: 'Error message', source: 'TypeScript', code: '123' }
  ]
  
  const result = getHoverVirtualDom(mockLineInfos, 'Documentation', mockDiagnostics)
  
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})
