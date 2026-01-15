import { test, expect, beforeEach } from '@jest/globals'
import { jest } from '@jest/globals'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
import { getPositionAtCursor } from '../src/parts/GetPositionAtCursor/GetPositionAtCursor.ts'

const mockInvoke = jest.fn()
jest.mock('../src/parts/EditorWorker/EditorWorker.ts', () => ({
  ...jest.requireActual('../src/parts/EditorWorker/EditorWorker.ts'),
  invoke: mockInvoke,
}))

beforeEach(() => {
  jest.clearAllMocks()
  mockInvoke.mockResolvedValue({ columnIndex: 5, rowIndex: 10, x: 100, y: 200 })
})

test('getPositionAtCursor should return position from editor worker', async () => {
  const result = await getPositionAtCursor(123)

  expect(result).toEqual({ columnIndex: 5, rowIndex: 10, x: 100, y: 200 })
  expect(mockInvoke).toHaveBeenCalledWith('Editor.getPositionAtCursor', 123)
})

test('getPositionAtCursor should handle different editor UIDs', async () => {
  mockInvoke
    .mockResolvedValueOnce({ columnIndex: 3, rowIndex: 7, x: 50, y: 150 })
    .mockResolvedValueOnce({ columnIndex: 8, rowIndex: 12, x: 200, y: 300 })

  const result1 = await getPositionAtCursor(456)
  const result2 = await getPositionAtCursor(789)

  expect(result1).toEqual({ columnIndex: 3, rowIndex: 7, x: 50, y: 150 })
  expect(result2).toEqual({ columnIndex: 8, rowIndex: 12, x: 200, y: 300 })
  expect(mockInvoke).toHaveBeenCalledWith('Editor.getPositionAtCursor', 456)
  expect(mockInvoke).toHaveBeenCalledWith('Editor.getPositionAtCursor', 789)
})
