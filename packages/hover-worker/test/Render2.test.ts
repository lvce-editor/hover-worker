import { beforeEach, expect, test } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HoverStates from '../src/parts/HoverStates/HoverStates.ts'
import { render2 } from '../src/parts/Render2/Render2.ts'

beforeEach(() => {
  HoverStates.dispose(123)
  HoverStates.dispose(456)
})

test('render2 applies the requested renderer to the latest state', () => {
  const oldState = { ...createDefaultState(), uid: 123 }
  const newState = { ...oldState, documentation: 'updated' }
  HoverStates.set(123, oldState, newState)

  expect(render2(123, [DiffType.RenderItems])).toEqual([['Viewlet.setDom2', 123, []]])
  expect(HoverStates.get(123)).toMatchObject({ oldState: newState, newState })
})

test('render2 keeps state for independent widget identifiers', () => {
  const firstState = { ...createDefaultState(), uid: 123 }
  const secondState = { ...createDefaultState(), uid: 456 }
  HoverStates.set(123, firstState, firstState)
  HoverStates.set(456, secondState, secondState)

  expect(render2(456, [DiffType.RenderItems])).toEqual([['Viewlet.setDom2', 456, []]])
  expect(HoverStates.get(123)).toMatchObject({ oldState: firstState, newState: firstState })
})
