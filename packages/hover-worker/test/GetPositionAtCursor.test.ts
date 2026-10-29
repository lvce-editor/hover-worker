import { expect, jest, test } from '@jest/globals'
import { createMockRpc } from '@lvce-editor/rpc'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { getPositionAtCursor } from '../src/parts/GetPositionAtCursor/GetPositionAtCursor.ts'

test('getPositionAtCursor returns the editor position', async () => {
  const getPosition = jest.fn(() => ({ columnIndex: 5, rowIndex: 10, x: 100, y: 200 }))
  EditorWorker.set(createMockRpc({ commandMap: { 'Editor.getPositionAtCursor': getPosition } }))

  await expect(getPositionAtCursor(123)).resolves.toEqual({ columnIndex: 5, rowIndex: 10, x: 100, y: 200 })
  expect(getPosition).toHaveBeenCalledWith(123)
})

test('getPositionAtCursor passes the requested editor UID', async () => {
  const getPosition = jest.fn((editorUid: number) => ({ columnIndex: editorUid, rowIndex: 0, x: editorUid, y: 0 }))
  EditorWorker.set(createMockRpc({ commandMap: { 'Editor.getPositionAtCursor': getPosition } }))

  await expect(getPositionAtCursor(456)).resolves.toEqual({ columnIndex: 456, rowIndex: 0, x: 456, y: 0 })
  expect(getPosition).toHaveBeenCalledWith(456)
})
