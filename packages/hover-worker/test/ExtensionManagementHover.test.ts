import { expect, test } from '@jest/globals'
import { EditorWorker, ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import { executeHoverProvider } from '../src/parts/ExtensionManagementHover/ExtensionManagementHover.ts'

const textDocument = {
  documentId: 1,
  languageId: 'typescript',
  text: 'const test = 1',
  uri: 'file:///test.ts',
}

test('executeHoverProvider sends document context and offset to extension management worker', async () => {
  const mockEditorRpc = EditorWorker.registerMockRpc({
    'Editor.getLines2': () => ['const test = 1'],
    'Editor.getUri': () => 'file:///test.ts',
  })
  const mockExtensionManagementRpc = ExtensionManagementWorker.registerMockRpc({
    'Extensions.executeHoverProvider': () => ({ contents: ['test hover'] }),
  })

  await expect(executeHoverProvider(1, 'typescript', 10)).resolves.toEqual({ contents: ['test hover'] })

  expect(mockEditorRpc.invocations).toEqual([
    ['Editor.getLines2', 1],
    ['Editor.getUri', 1],
  ])
  expect(mockExtensionManagementRpc.invocations).toEqual([['Extensions.executeHoverProvider', textDocument, 10]])
})

test('executeHoverProvider returns undefined when there is no matching provider', async () => {
  EditorWorker.registerMockRpc({
    'Editor.getLines2': () => ['const test = 1'],
    'Editor.getUri': () => 'file:///test.ts',
  })
  ExtensionManagementWorker.registerMockRpc({
    'Extensions.executeHoverProvider': () => undefined,
  })

  await expect(executeHoverProvider(1, 'typescript', 10)).resolves.toBeUndefined()
})

test('executeHoverProvider propagates provider errors', async () => {
  EditorWorker.registerMockRpc({
    'Editor.getLines2': () => ['const test = 1'],
    'Editor.getUri': () => 'file:///test.ts',
  })
  ExtensionManagementWorker.registerMockRpc({
    'Extensions.executeHoverProvider': () => {
      throw new Error('hover provider failed')
    },
  })

  await expect(executeHoverProvider(1, 'typescript', 10)).rejects.toThrow('hover provider failed')
})
