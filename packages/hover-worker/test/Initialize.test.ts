import { expect, test } from '@jest/globals'
import { createMockRpc } from '@lvce-editor/rpc'
import { EditorWorker, RpcId } from '@lvce-editor/rpc-registry'
import * as RpcRegistry from '@lvce-editor/rpc-registry'
import { initialize } from '../src/parts/Initialize/Initialize.ts'

test('initialize', async () => {
  const mockEditorRpc = createMockRpc({
    commandMap: {
      'SendMessagePortToExtensionManagementWorker.sendMessagePortToExtensionManagementWorker': () => undefined,
    },
  })
  EditorWorker.set(mockEditorRpc)
  await initialize()
  const rpc = RpcRegistry.get(RpcId.ExtensionHostWorker)
  expect(rpc).toBeDefined()
  await rpc.dispose()
})
