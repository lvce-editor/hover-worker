import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { diff } from '../src/parts/Diff/Diff.ts'

test('diff returns no changes for equal hover state', () => {
  const state = createDefaultState()
  expect(diff(state, { ...state })).toEqual([])
})

test('diff reports changes to rendered state', () => {
  const state = createDefaultState()
  expect(diff(state, { ...state, leadingWord: 'word' })).not.toEqual([])
  expect(diff(state, { ...state, x: 1 })).not.toEqual([])
  expect(diff(state, { ...state, width: 1 })).not.toEqual([])
  expect(diff(state, { ...state, version: 1 })).not.toEqual([])
})
