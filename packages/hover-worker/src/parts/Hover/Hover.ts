import * as Assert from '../Assert/Assert.ts'
import * as ExtensionHostHover from '../ExtensionHostHover/ExtensionHostHover.ts'

interface HoverSuccessResult {
  readonly hover: any
  readonly error: undefined
}

interface HoverErrorResult {
  readonly hover: undefined
  readonly error: unknown
}

type HoverResult = HoverSuccessResult | HoverErrorResult

export const getHover = async (editorUid: number, editorLanguageId: string, offset: number): Promise<HoverResult> => {
  try {
    Assert.number(editorUid)
    Assert.number(offset)
    // TODO invoke extension host worker directly
    const hover = await ExtensionHostHover.executeHoverProvider(editorUid, editorLanguageId, offset)
    return {
      hover,
      error: undefined,
    }
  } catch (error) {
    return {
      hover: undefined,
      error,
    }
  }
}
