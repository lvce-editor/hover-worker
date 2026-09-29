import { expect, jest, test } from '@jest/globals'
import { createMockRpc } from '@lvce-editor/rpc'
import { EditorWorker, ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import { text } from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

const configureRpc = (hover: unknown, diagnostics: readonly unknown[] = []) => {
  EditorWorker.set(
    createMockRpc({
      commandMap: {
        'Editor.getDiagnostics': () => diagnostics,
        'Editor.getLines2': () => ['const test = 1'],
        'Editor.getPositionAtCursor': () => ({ columnIndex: 5, rowIndex: 2, x: 12, y: 34 }),
        'Editor.getUri': () => 'file:///test.ts',
        'Editor.getWordAtOffset2': () => 'leading',
        'Editor.getWordBefore2': () => 'word',
        'Markdown.getVirtualDomFromMarkdown': () => [{ childCount: 1, type: VirtualDomElements.Div }, text('rendered docs')],
      },
    }),
  )
  ExtensionManagementWorker.set(createMockRpc({ commandMap: { 'Extensions.executeHoverProvider': () => hover } }))
}

test('loadContent closes the widget when there is no hover content', async () => {
  const closeWidget = jest.fn()
  EditorWorker.set(
    createMockRpc({
      commandMap: {
        'Editor.closeWidget2': closeWidget,
        'Editor.getDiagnostics': () => [],
        'Editor.getLines2': () => ['const test = 1'],
        'Editor.getPositionAtCursor': () => ({ x: 12, y: 34 }),
        'Editor.getUri': () => 'file:///test.ts',
        'Editor.getWordAtOffset2': () => 'leading',
        'Editor.getWordBefore2': () => 'word',
      },
    }),
  )
  ExtensionManagementWorker.set(createMockRpc({ commandMap: { 'Extensions.executeHoverProvider': () => undefined } }))
  const state = createDefaultState()
  await expect(loadContent(state)).resolves.toBe(state)
  expect(closeWidget).toHaveBeenCalledTimes(1)
})

test('loadContent applies loaded hover content to the state', async () => {
  configureRpc({ documentation: 'docs' })
  const state = createDefaultState()
  await expect(loadContent(state)).resolves.toMatchObject({
    documentation: 'docs',
    documentationVirtualDom: [{ childCount: 1, type: VirtualDomElements.Div }, text('rendered docs')],
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
