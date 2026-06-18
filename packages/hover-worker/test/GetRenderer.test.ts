import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import { getRenderer } from '../src/parts/GetRenderer/GetRenderer.ts'

test('getRenderer should return RenderBounds for RenderBounds diff type', () => {
  const result = getRenderer(DiffType.RenderBounds)

  expect(typeof result).toBe('function')
})

test('getRenderer should return RenderContent for RenderContent diff type', () => {
  const result = getRenderer(DiffType.RenderContent)

  expect(typeof result).toBe('function')
})

test('getRenderer should return RenderEventListeners for RenderEventListeners diff type', () => {
  const result = getRenderer(DiffType.RenderEventListeners)

  expect(typeof result).toBe('function')
})

test('getRenderer should return RenderFocusContext for RenderFocusContext diff type', () => {
  const result = getRenderer(DiffType.RenderFocusContext)

  expect(typeof result).toBe('function')
})

test('getRenderer should return renderItems for RenderItems diff type', () => {
  const result = getRenderer(DiffType.RenderItems)

  expect(typeof result).toBe('function')
})

test('getRenderer should return RenderUid for RenderUid diff type', () => {
  const result = getRenderer(DiffType.RenderUid)

  expect(typeof result).toBe('function')
})

test('getRenderer should throw error for unknown diff type', () => {
  expect(() => getRenderer(999)).toThrow('unknown renderer')
  expect(() => getRenderer(-1)).toThrow('unknown renderer')
  expect(() => getRenderer(0)).toThrow('unknown renderer')
})
