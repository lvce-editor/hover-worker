import { EditorWorker } from '@lvce-editor/rpc-registry'

// TODO add tests for this
export const activateByEvent = async (event: string): Promise<void> => {
  // @ts-ignore
  await EditorWorker.invoke('ActivateByEvent.activateByEvent', event)
}
