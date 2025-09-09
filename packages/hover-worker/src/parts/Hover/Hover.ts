import * as Assert from '../Assert/Assert.ts'
import * as ExtensionHostHover from '../ExtensionHostHover/ExtensionHostHover.ts'

export const getHover = async (editorUid: number, editorLanguageId: string, offset: number) => {
  Assert.number(editorUid)
  Assert.number(offset)
  // TODO invoke extension host worker directly
  const hover = await ExtensionHostHover.executeHoverProvider(editorUid, editorLanguageId, offset)
  return hover
}
