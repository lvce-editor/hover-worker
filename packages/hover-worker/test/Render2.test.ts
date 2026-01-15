import { test, expect, beforeEach } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import * as HoverStates from '../src/parts/HoverStates/HoverStates.ts'
import { render2 } from '../src/parts/Render2/Render2.ts'

beforeEach(() => {
  const mockRpc = MockRpc.create({
    invoke: () => Promise.resolve(undefined),
    commandMap: {},
  })
  EditorWorker.registerMockRpc(mockRpc)
  
  // Set up mock state for HoverStates
  const mockState = { uid: 123 } as any
  HoverStates.set(123, mockState, mockState)
})

test('render2 should return array for valid input', () => {
  const result = render2(123, [1, 2, 3])

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('render2 should handle different inputs', () => {
  const mockState1 = { uid: 456 } as any
  const mockState2 = { uid: 789 } as any
  HoverStates.set(456, mockState1, mockState1)
  HoverStates.set(789, mockState2, mockState2)
  
  const result1 = render2(456, [4, 5, 6])
  const result2 = render2(789, [7, 8, 9])

  expect(Array.isArray(result1)).toBe(true)
  expect(Array.isArray(result2)).toBe(true)
  expect(result1.length).toBeGreaterThan(0)
  expect(result2.length).toBeGreaterThan(0)
})
