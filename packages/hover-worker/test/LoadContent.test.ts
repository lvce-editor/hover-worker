import { expect, jest, test } from '@jest/globals'
import { createMockRpc } from '@lvce-editor/rpc'
import { EditorWorker, ExtensionHost } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

const configureRpc = (hover: unknown, diagnostics: readonly unknown[] = []) => {
  EditorWorker.set(
    createMockRpc({
      commandMap: {
        'ActivateByEvent.activateByEvent': () => undefined,
        'Editor.getDiagnostics': () => diagnostics,
        'Editor.getPositionAtCursor': () => ({ columnIndex: 5, rowIndex: 2, x: 12, y: 34 }),
        'Editor.getWordAtOffset2': () => 'leading',
        'Editor.getWordBefore2': () => 'word',
      },
    }),
  )
  ExtensionHost.set(createMockRpc({ commandMap: { 'ExtensionHostHover.execute': () => hover } }))
}

test('loadContent closes the widget when there is no hover content', async () => {
  const closeWidget = jest.fn()
  EditorWorker.set(
    createMockRpc({
      commandMap: {
        'ActivateByEvent.activateByEvent': () => undefined,
        'Editor.closeWidget2': closeWidget,
        'Editor.getDiagnostics': () => [],
        'Editor.getPositionAtCursor': () => ({ x: 12, y: 34 }),
        'Editor.getWordAtOffset2': () => 'leading',
        'Editor.getWordBefore2': () => 'word',
      },
    }),
  )
  ExtensionHost.set(createMockRpc({ commandMap: { 'ExtensionHostHover.execute': () => undefined } }))
  const state = createDefaultState()
  await expect(loadContent(state)).resolves.toBe(state)
  expect(closeWidget).toHaveBeenCalledTimes(1)
})

test('loadContent applies loaded hover content to the state', async () => {
  configureRpc({ documentation: 'docs' })
  const state = createDefaultState()
  await expect(loadContent(state)).resolves.toMatchObject({
    documentation: 'docs',
    leadingWord: 'leading',
    width: 300,
    x: 12,
    y: 34,
  })
})

test('loadContent keeps diagnostic-only hover details open', async () => {
  configureRpc({}, [{ code: 1, message: 'problem', rowIndex: 2, source: 'TypeScript' }])
  const state = createDefaultState()
  await expect(loadContent(state)).resolves.toMatchObject({
    documentation: '',
    matchingDiagnostics: [{ code: 1, message: 'problem', rowIndex: 2, source: 'TypeScript' }],
    width: 300,
  })
})
