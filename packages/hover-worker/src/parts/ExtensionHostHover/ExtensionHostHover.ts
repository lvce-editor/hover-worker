import * as Assert from '../Assert/Assert.ts'
import * as ExtensionHostActivationEvent from '../ExtensionHostActivationEvent/ExtensionHostActivationEvent.ts'
import * as ExtensionHostCommandType from '../ExtensionHostCommandType/ExtensionHostCommandType.ts'
import * as ExtensionHostEditor from '../ExtensionHostEditor/ExtensionHostEditor.ts'

export const executeHoverProvider = async (editorUid: number, editorLanguageId: string, offset: number) => {
  Assert.number(editorUid)
  Assert.number(offset)
  return ExtensionHostEditor.execute({
    args: [offset],
    editorUid,
    event: ExtensionHostActivationEvent.OnHover,
    method: ExtensionHostCommandType.HoverExecute,
    noProviderFoundMessage: 'No hover provider found',
  })
}
