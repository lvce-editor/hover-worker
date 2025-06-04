import type { HoverState } from '../HoverState/HoverState.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const renderFocusContext = (oldState: HoverState, newState: HoverState): readonly any[] => {
  return [/* method */ 'Viewlet.setFocusContext', WhenExpression.FocusEditorRename]
}
