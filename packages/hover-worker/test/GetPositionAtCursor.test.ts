import { test, expect, beforeEach, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { getPositionAtCursor } from '../src/parts/GetPositionAtCursor/GetPositionAtCursor.ts'

let mockInvoke: any

beforeEach(() => {
  mockInvoke = jest.fn(() => Promise.resolve({ columnIndex: 5, rowIndex: 10, x: 100, y: 200 }))
  
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
  EditorWorker.set(mockRpc)
})

test('getPositionAtCursor should return position from editor worker', async () => {
  const result = await getPositionAtCursor(123)
  
  expect(result).toEqual({ columnIndex: 5, rowIndex: 10, x: 100, y: 200 })
  expect(mockInvoke).toHaveBeenCalledWith('Editor.getPositionAtCursor', 123)
})

test('getPositionAtCursor should handle different editor UIDs', async () => {
  mockInvoke.mockImplementation((method: string, uid: number) => {
    if (uid === 456) {
      return Promise.resolve({ columnIndex: 3, rowIndex: 7, x: 50, y: 150 })
    }
    if (uid === 789) {
      return Promise.resolve({ columnIndex: 8, rowIndex: 12, x: 200, y: 300 })
    }
    return Promise.resolve({ columnIndex: 5, rowIndex: 10, x: 100, y: 200 })
  })
  
  const result1 = await getPositionAtCursor(456)
  const result2 = await getPositionAtCursor(789)
  
  expect(result1).toEqual({ columnIndex: 3, rowIndex: 7, x: 50, y: 150 })
  expect(result2).toEqual({ columnIndex: 8, rowIndex: 12, x: 200, y: 300 })
  expect(mockInvoke).toHaveBeenCalledWith('Editor.getPositionAtCursor', 456)
  expect(mockInvoke).toHaveBeenCalledWith('Editor.getPositionAtCursor', 789)
})
