import type { HoverState } from '../HoverState/HoverState.ts'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'
import * as WidgetId from '../WidgetId/WidgetId.ts'

export const close = async (state: HoverState): Promise<HoverState> => {
  const { editorUid } = state
  // @ts-ignore
  await EditorWorker.invoke('Editor.closeWidget2', editorUid, WidgetId.Hover, 'Hovers', WhenExpression.FocusEditorHovers)
  return state
}
