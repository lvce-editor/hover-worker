import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const sendMessagePortToExtensionHostWorker = async (port: any): Promise<void> => {
  // @ts-ignore
  await EditorWorker.sendMessagePortToExtensionHostWorker(port)
}
