import { EditorWorker } from '@lvce-editor/rpc-registry'

export const sendMessagePortToExtensionHostWorker = async (port: any): Promise<void> => {
  // @ts-ignore
  await EditorWorker.sendMessagePortToExtensionHostWorker(port)
}
