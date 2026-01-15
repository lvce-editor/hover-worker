import { test, expect, beforeEach, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

beforeEach(() => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: jest.fn((...args: any[]) => {
      const method = args[0]
      switch (method) {
        case 'Editor.getPositionAtCursor':
          return Promise.resolve({ columnIndex: 5, rowIndex: 10, x: 100, y: 200 })
        case 'Editor.getDiagnostics':
          return Promise.resolve([])
        case 'Editor.getWordBefore':
          return Promise.resolve('const')
        case 'Editor.getWordAtOffset2':
          return Promise.resolve('test')
        default:
          return Promise.resolve(undefined)
      }
    }),
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
