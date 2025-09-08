import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { dispose } from '../src/parts/Dispose/Dispose.ts'
import * as HoverStates from '../src/parts/HoverStates/HoverStates.ts'

test('dispose', async () => {
  const state = createDefaultState()
  HoverStates.set(123, state, state)
  dispose(123)
  expect(HoverStates.get(123)).toBeUndefined()
})
