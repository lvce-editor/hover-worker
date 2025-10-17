import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const sendMessagePortToExtensionHostWorker = async (port: MessagePort): Promise<void> => {
  // @ts-ignore
  await EditorWorker.sendMessagePortToExtensionHostWorker(port)
}
