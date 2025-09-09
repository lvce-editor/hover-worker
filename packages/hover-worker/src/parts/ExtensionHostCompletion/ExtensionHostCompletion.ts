import * as ExtensionHostActivationEvent from '../ExtensionHostActivationEvent/ExtensionHostActivationEvent.ts'
import * as ExtensionHostCommandType from '../ExtensionHostCommandType/ExtensionHostCommandType.ts'
import * as ExtensionHostEditor from '../ExtensionHostEditor/ExtensionHostEditor.ts'

const combineResults = (results: any) => {
  return results[0] ?? []
}

export const executeHoverProvider = async (editorUid: number, editorLanguageId: string, offset: number) => {
  return ExtensionHostEditor.execute({
    editorUid,
    editorLanguageId,
    event: ExtensionHostActivationEvent.OnHover,
    method: ExtensionHostCommandType.HoverExecute,
    args: [offset],
    noProviderFoundMessage: 'no completion provider found',
    noProviderFoundResult: [],
    combineResults,
  })
}
