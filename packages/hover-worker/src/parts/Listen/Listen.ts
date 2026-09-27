import { WebWorkerRpcClient } from '@lvce-editor/rpc'
import * as CommandMap from '../CommandMap/CommandMap.ts'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'
import * as InitializeExtensionManagementWorker from '../InitializeExtensionManagementWorker/InitializeExtensionManagementWorker.ts'

export const listen = async (): Promise<void> => {
  const rpc = await WebWorkerRpcClient.create({
    commandMap: CommandMap.commandMap,
  })
  EditorWorker.set(rpc)
  await InitializeExtensionManagementWorker.initializeExtensionManagementWorker()
}
