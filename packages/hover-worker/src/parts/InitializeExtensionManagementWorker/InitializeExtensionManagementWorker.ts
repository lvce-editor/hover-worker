import { LazyTransferMessagePortRpcParent } from '@lvce-editor/rpc'
import { ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import * as CommandMap from '../CommandMap/CommandMap.ts'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

const send = async (port: any): Promise<void> => {
  await EditorWorker.sendMessagePortToExtensionManagementWorker(port)
}

export const initializeExtensionManagementWorker = async (): Promise<void> => {
  const rpc = await LazyTransferMessagePortRpcParent.create({
    commandMap: CommandMap.commandMap,
    send,
  })
  ExtensionManagementWorker.set(rpc)
}
