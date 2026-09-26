import { ExtensionHost } from '@lvce-editor/rpc-registry'

export const invoke = (...args: Parameters<typeof ExtensionHost.invoke>) => ExtensionHost.invoke(...args)
export const set = (...args: Parameters<typeof ExtensionHost.set>) => ExtensionHost.set(...args)
