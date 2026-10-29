import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'
import { text } from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('renderItems sends an empty virtual DOM when hover content is empty', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), uid: 456 }

  expect(renderItems(oldState, newState)).toEqual(['Viewlet.setDom2', 456, []])
})

test('renderItems includes virtual DOM for available hover content', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    documentationVirtualDom: [text('documentation')],
    uid: 222,
  }

  expect(renderItems(oldState, newState)).toEqual([
    'Viewlet.setDom2',
    222,
    expect.arrayContaining([expect.objectContaining({ text: 'documentation' })]),
  ])
})
