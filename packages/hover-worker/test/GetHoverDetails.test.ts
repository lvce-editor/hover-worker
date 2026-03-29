import { test, expect } from '@jest/globals'
import { getHoverDetails } from '../src/parts/GetHoverDetails/GetHoverDetails.ts'

test('getHoverDetails should return empty result when error is provided', async () => {
  const result = await getHoverDetails(null, new Error('test error'), 400, 10, 10, 1, 1, 'Arial', 14, '1.4', 'typescript')

  expect(result).toEqual({
    documentation: '',
    documentationHeight: 0,
    lineInfos: [],
  })
})

test('getHoverDetails should process hover data correctly', async () => {
  const mockHover = {
    displayString: 'const x = 5',
    displayStringLanguageId: 'typescript',
    documentation: 'This is a variable declaration',
  }

  const result = await getHoverDetails(mockHover, null, 400, 10, 10, 1, 1, 'Arial', 14, '1.4', 'typescript')

  expect(result).toHaveProperty('documentation')
  expect(result).toHaveProperty('documentationHeight')
  expect(result).toHaveProperty('lineInfos')
  expect(result.documentation).toBe('This is a variable declaration')
})

test('getHoverDetails should use fallback language when displayStringLanguageId is missing', async () => {
  const mockHover = {
    displayString: 'const x = 5',
    displayStringLanguageId: null,
    documentation: 'This is a variable declaration',
  }

  const result = await getHoverDetails(
    mockHover,
    null,
    400,
    10,
    10,
    1,
    1,
    'Arial',
    14,
    '1.4',
    'javascript', // fallback
  )

  expect(result.documentation).toBe('This is a variable declaration')
})

test('getHoverDetails should handle empty documentation', async () => {
  const mockHover = {
    displayString: 'const x = 5',
    displayStringLanguageId: 'typescript',
    documentation: '',
  }

  const result = await getHoverDetails(mockHover, null, 400, 10, 10, 1, 1, 'Arial', 14, '1.4', 'typescript')

  expect(result.documentation).toBe('')
})
