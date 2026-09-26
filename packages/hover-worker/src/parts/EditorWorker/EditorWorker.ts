import { EditorWorker } from '@lvce-editor/rpc-registry'

export const getWordAtOffset2 = (...args: Parameters<typeof EditorWorker.getWordAtOffset2>) => EditorWorker.getWordAtOffset2(...args)
export const getWordBefore = (...args: Parameters<typeof EditorWorker.getWordBefore>) => EditorWorker.getWordBefore(...args)
export const invoke = (...args: Parameters<typeof EditorWorker.invoke>) => EditorWorker.invoke(...args)
export const sendMessagePortToExtensionManagementWorker = (...args: Parameters<typeof EditorWorker.sendMessagePortToExtensionManagementWorker>) =>
  EditorWorker.sendMessagePortToExtensionManagementWorker(...args)
export const set = (...args: Parameters<typeof EditorWorker.set>) => EditorWorker.set(...args)
