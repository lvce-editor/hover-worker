import { test, expect } from '@jest/globals'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

test.skip('loadContent should return state for valid input', async () => {
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

test.skip('loadContent should handle null input', async () => {
  const result = await loadContent(null as any)

  expect(result).toBeDefined()
})
