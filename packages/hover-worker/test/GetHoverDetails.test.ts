import { expect, test } from '@jest/globals'
import { getHoverDetails } from '../src/parts/GetHoverDetails/GetHoverDetails.ts'

const options = [400, 10, 10, 1, 1, 'Arial', 14, '1.4', 'javascript'] as const

test('getHoverDetails returns empty details for a provider error', async () => {
  await expect(getHoverDetails({}, new Error('failed'), ...options)).resolves.toEqual({
    documentation: '',
    documentationHeight: 0,
    lineInfos: [],
  })
})

test('getHoverDetails selects valid code, documentation text, and language fallbacks', async () => {
  const result = await getHoverDetails(
    {
      displayString: 'const value = 1',
      displayStringLanguageId: '',
      documentation: '  ',
      text: '  Hover text  ',
    },
    undefined,
    ...options,
  )
  expect(result.documentation).toBe('  Hover text  ')
  expect(result.lineInfos).toEqual([])
})

test('getHoverDetails ignores invalid display strings and uses documentation when present', async () => {
  const result = await getHoverDetails({ displayString: 1, displayStringLanguageId: 2, documentation: ' docs ', text: 'fallback' }, null, ...options)
  expect(result.documentation).toBe(' docs ')
  expect(result.lineInfos).toEqual([])
})

test('getHoverDetails uses empty strings when optional text is missing', async () => {
  const result = await getHoverDetails({}, null, ...options)
  expect(result.documentation).toBe('')
  expect(result.lineInfos).toEqual([])
})
