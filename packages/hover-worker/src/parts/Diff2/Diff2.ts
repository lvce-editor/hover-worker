import * as Diff from '../Diff/Diff.ts'
import * as HoverStates from '../HoverStates/HoverStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { oldState, newState } = HoverStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
