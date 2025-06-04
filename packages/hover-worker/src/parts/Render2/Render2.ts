import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as FindWidgetStates from '../HoverStates/HoverStates.ts'

export const render2 = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { oldState, newState } = FindWidgetStates.get(uid)
  FindWidgetStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}
