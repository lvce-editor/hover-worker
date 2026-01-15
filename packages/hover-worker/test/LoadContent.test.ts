import { test, expect, beforeEach } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

beforeEach(() => {
  const mockRpc = MockRpc.create({
    invoke: () => Promise.resolve(undefined),
    commandMap: {
      'Editor.getPositionAtCursor': () => Promise.resolve({ columnIndex: 5, rowIndex: 10, x: 100, y: 200 }),
      'Editor.getDiagnostics': () => Promise.resolve([]),
      'Editor.getWordBefore': () => Promise.resolve('const'),
      'Editor.getWordAtOffset2': () => Promise.resolve('test'),
    }
  })
  EditorWorker.registerMockRpc(mockRpc)
})

test('loadContent should return state for valid input', async () => {
  const mockState = {
    editorLanguageId: 'typescript',
    editorUid: 123,
    fallbackDisplayStringLanguageId: 'javascript',
    hoverBorderLeft: 1,
    hoverBorderRight: 1,
    hoverDocumentationFontFamily: 'Arial',
    hoverDocumentationFontSize: 14,
  }

  const result = await loadContent(mockState as any)

  expect(result).toBeDefined()
  expect(result).toHaveProperty('documentation')
  expect(result).toHaveProperty('lineInfos')
  expect(result).toHaveProperty('matchingDiagnostics')
  expect(result).toHaveProperty('x')
  expect(result).toHaveProperty('y')
})

test('loadContent should handle null input', async () => {
  const result = await loadContent(null as any)

  expect(result).toBeDefined()
})
