import type { HoverState } from '../HoverState/HoverState.ts'
import * as GetHoverInfo from '../GetHoverInfo/GetHoverInfo.ts'

export const loadHoverContent = async (state: HoverState): Promise<HoverState> => {
  // TODO
  const position = undefined
  const hoverInfo = await GetHoverInfo.getEditorHoverInfo(state.editorUid, state.editorLanguageId, position)
  if (!hoverInfo) {
    return state
  }
  const { lineInfos, documentation, x, y, matchingDiagnostics } = hoverInfo
  return {
    ...state,
    // @ts-ignore
    lineInfos,
    documentation,
    x,
    y,
    width: 600,
    diagnostics: matchingDiagnostics,
  }
}
