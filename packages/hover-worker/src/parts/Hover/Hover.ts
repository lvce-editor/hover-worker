import * as Assert from '../Assert/Assert.ts'
import * as ExtensionHostHover from '../ExtensionHostHover/ExtensionHostHover.ts'

interface HoverSuccessResult {
  readonly error: undefined
  readonly hover: any
}

interface HoverErrorResult {
  readonly error: unknown
  readonly hover: undefined
}

type HoverResult = HoverSuccessResult | HoverErrorResult

export const getHover = async (editorUid: number, editorLanguageId: string, offset: number): Promise<HoverResult> => {
  try {
    Assert.number(editorUid)
    Assert.number(offset)
    // TODO invoke extension host worker directly
    const hover = await ExtensionHostHover.executeHoverProvider(editorUid, editorLanguageId, offset)
    return {
      error: undefined,
      hover,
    }
  } catch (error) {
    return {
      error,
      hover: undefined,
    }
  }
}
