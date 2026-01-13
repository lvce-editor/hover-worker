import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as KeyModifier from '../KeyModifier/KeyModifier.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'
import * as WidgetId from '../WidgetId/WidgetId.ts'

const getCommand = (shortId: string): any => {
  return {
    args: ['Hovers', `Hovers.${shortId}`, 0, WidgetId.Hover],
    command: 'Editor.executeWidgetCommand',
  }
}

export const getKeyBindings = (): readonly any[] => {
  return [
    {
      key: KeyCode.DownArrow,
      ...getCommand('focusNext'),
      when: WhenExpression.FocusEditorHovers,
    },
    {
      key: KeyCode.UpArrow,
      ...getCommand('focusPrevious'),
      when: WhenExpression.FocusEditorHovers,
    },
    {
      key: KeyCode.Enter,
      ...getCommand('selectCurrent'),
      when: WhenExpression.FocusEditorHovers,
    },
    {
      key: KeyCode.End,
      ...getCommand('focusLast'),
      when: WhenExpression.FocusEditorHovers,
    },
    {
      key: KeyCode.Home,
      ...getCommand('focusFirst'),
      when: WhenExpression.FocusEditorHovers,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Space,
      ...getCommand('toggleDetails'),
      when: WhenExpression.FocusEditorHovers,
    },
    {
      key: KeyCode.Escape,
      ...getCommand('close'),
      when: WhenExpression.FocusEditorHovers,
    },
  ]
}
