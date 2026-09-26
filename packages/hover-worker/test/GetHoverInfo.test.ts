import { expect, test } from '@jest/globals'
import { createMockRpc } from '@lvce-editor/rpc'
import { EditorWorker, ExtensionHost } from '@lvce-editor/rpc-registry'
import { getEditorHoverInfo } from '../src/parts/GetHoverInfo/GetHoverInfo.ts'

const args = [1, 'typescript', 400, 10, 10, 1, 1, 'Arial', 14, '1.4', 'javascript'] as const

const configureRpc = (hover: unknown, diagnostics: readonly unknown[] = []) => {
  EditorWorker.set(
    createMockRpc({
      commandMap: {
        'ActivateByEvent.activateByEvent': () => undefined,
        'Editor.getDiagnostics': () => diagnostics,
        'Editor.getPositionAtCursor': () => ({ columnIndex: 5, rowIndex: 2 }),
        'Editor.getWordBefore2': () => 'word',
      },
    }),
  )
  ExtensionHost.set(
    createMockRpc({
      commandMap: {
        'ExtensionHostHover.execute': () => hover,
      },
    }),
  )
}

test('getEditorHoverInfo filters diagnostics and returns matching diagnostics when no hover exists', async () => {
  const diagnostics = [
    { code: 1, rowIndex: 2 },
    { code: 2, rowIndex: 3 },
  ]
  configureRpc(undefined, diagnostics)
  const result = await getEditorHoverInfo(...args)
  expect(result?.matchingDiagnostics).toEqual([diagnostics[0]])
})

test('getEditorHoverInfo returns undefined when neither hover nor matching diagnostic exists', async () => {
  configureRpc(undefined, [{ code: 2, rowIndex: 3 }])
  await expect(getEditorHoverInfo(...args)).resolves.toBeUndefined()
})

test('getEditorHoverInfo returns hover documentation and matching diagnostics', async () => {
  configureRpc({ displayString: '', documentation: 'documentation' }, [{ code: 1, rowIndex: 2 }])
  const result = await getEditorHoverInfo(...args)
  expect(result?.documentation).toBe('documentation')
  expect(result?.matchingDiagnostics).toHaveLength(1)
})

test('getEditorHoverInfo omits empty hover details when no diagnostics match', async () => {
  configureRpc({})
  await expect(getEditorHoverInfo(...args)).resolves.toBeUndefined()
})
