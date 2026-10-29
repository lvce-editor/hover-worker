import { EditorWorker } from '@lvce-editor/rpc-registry'

export const getLines = (...args: Parameters<typeof EditorWorker.getLines>): ReturnType<typeof EditorWorker.getLines> =>
  EditorWorker.getLines(...args)
export const getUri = (...args: Parameters<typeof EditorWorker.getUri>): ReturnType<typeof EditorWorker.getUri> => EditorWorker.getUri(...args)
export const getWordAtOffset2 = (...args: Parameters<typeof EditorWorker.getWordAtOffset2>): ReturnType<typeof EditorWorker.getWordAtOffset2> =>
  EditorWorker.getWordAtOffset2(...args)
export const getWordBefore = (...args: Parameters<typeof EditorWorker.getWordBefore>): ReturnType<typeof EditorWorker.getWordBefore> =>
  EditorWorker.getWordBefore(...args)
export const invoke = (...args: Parameters<typeof EditorWorker.invoke>): ReturnType<typeof EditorWorker.invoke> => EditorWorker.invoke(...args)
export const sendMessagePortToExtensionManagementWorker = (
  ...args: Parameters<typeof EditorWorker.sendMessagePortToExtensionManagementWorker>
): ReturnType<typeof EditorWorker.sendMessagePortToExtensionManagementWorker> => EditorWorker.sendMessagePortToExtensionManagementWorker(...args)
export const set = (...args: Parameters<typeof EditorWorker.set>): ReturnType<typeof EditorWorker.set> => EditorWorker.set(...args)
