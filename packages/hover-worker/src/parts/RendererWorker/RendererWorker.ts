import { RendererWorker as RegistryRendererWorker } from '@lvce-editor/rpc-registry'

export const invoke = (...args: Parameters<typeof RegistryRendererWorker.invoke>): ReturnType<typeof RegistryRendererWorker.invoke> =>
  RegistryRendererWorker.invoke(...args)
