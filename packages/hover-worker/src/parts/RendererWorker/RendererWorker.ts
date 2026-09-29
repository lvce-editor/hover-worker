import { RendererWorker as RegistryRendererWorker } from '@lvce-editor/rpc-registry'

export const invoke = (...args: Parameters<typeof RegistryRendererWorker.invoke>) => RegistryRendererWorker.invoke(...args)
