import { ExtensionHost } from '@lvce-editor/rpc-registry'

export const set = (...args: Parameters<typeof ExtensionHost.set>): ReturnType<typeof ExtensionHost.set> => ExtensionHost.set(...args)
