import * as ExtensionHostActivationEvent from '../ExtensionHostActivationEvent/ExtensionHostActivationEvent.ts'
import * as ExtensionHostCommandType from '../ExtensionHostCommandType/ExtensionHostCommandType.ts'
import * as ExtensionHostEditor from '../ExtensionHostEditor/ExtensionHostEditor.ts'

const combineResults = (results: any) => {
  return results[0] ?? []
}

export const executeHoverProvider = async (editorUid: number, editorLanguageId: string, offset: number) => {
  return ExtensionHostEditor.execute({
    args: [offset],
    combineResults,
    editorLanguageId,
    editorUid,
    event: ExtensionHostActivationEvent.OnHover,
    method: ExtensionHostCommandType.HoverExecute,
    noProviderFoundMessage: 'no hover provider found',
    noProviderFoundResult: [],
  })
}
