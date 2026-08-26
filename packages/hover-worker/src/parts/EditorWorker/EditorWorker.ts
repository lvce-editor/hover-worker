import { EditorWorker } from '@lvce-editor/rpc-registry'

export const { getWordAtOffset2, getWordBefore, invoke, sendMessagePortToExtensionHostWorker, set } = EditorWorker
