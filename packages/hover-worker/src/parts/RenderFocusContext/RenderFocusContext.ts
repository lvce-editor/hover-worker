import { ViewletCommand } from '@lvce-editor/constants'
import type { HoverState } from '../HoverState/HoverState.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const renderFocusContext = (oldState: HoverState, newState: HoverState): readonly any[] => {
  return [ViewletCommand.SetFocusContext, WhenExpression.FocusEditorRename]
}
