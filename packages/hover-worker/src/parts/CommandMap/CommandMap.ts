import * as Close from '../Close/Close.ts'
import * as WrapCommand from '../HoverStates/HoverStates.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as FocusFirst from '../EditorHoverFocusFirst/EditorHoverFocusFirst.ts'
import * as FocusIndex from '../EditorHoverFocusIndex/EditorHoverFocusIndex.ts'
import * as EditorHoverFocusNext from '../EditorHoverFocusNext/EditorHoverFocusNext.ts'
import * as EditorHoverFocusPrevious from '../EditorHoverFocusPrevious/EditorHoverFocusPrevious.ts'
import * as EditorHoverOpenDetails from '../EditorHoverOpenDetails/EditorHoverOpenDetails.ts'
import * as SelectCurrent from '../EditorHoverSelectCurrent/EditorHoverSelectCurrent.ts'
import * as SelectIndex from '../EditorHoverSelectIndex/EditorHoverSelectIndex.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleEditorDeleteLeft from '../HandleEditorDeleteLeft/HandleEditorDeleteLeft.ts'
import * as HandleEditorType from '../HandleEditorType/HandleEditorType.ts'
import * as HandleWheel from '../HandleWheel/HandleWheel.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'Hovers.close': WrapCommand.wrapCommand(Close.close),
  'Hovers.create': Create.create,
  'Hovers.diff2': Diff2.diff2,
  'Hovers.dispose': Dispose.dispose,
  'Hovers.focusFirst': WrapCommand.wrapCommand(FocusFirst.focusFirst),
  'Hovers.focusIndex': WrapCommand.wrapCommand(FocusIndex.focusIndex),
  'Hovers.focusNext': WrapCommand.wrapCommand(EditorHoverFocusNext.focusNext),
  'Hovers.focusPrevious': WrapCommand.wrapCommand(EditorHoverFocusPrevious.focusPrevious),
  'Hovers.getCommandIds': GetCommandIds.getCommandIds,
  'Hovers.getKeyBindings': GetKeyBindings.getKeyBindings,
  'Hovers.handleEditorDeleteLeft': WrapCommand.wrapCommand(HandleEditorDeleteLeft.handleEditorDeleteLeft),
  'Hovers.handleEditorType': WrapCommand.wrapCommand(HandleEditorType.handleEditorType),
  'Hovers.handleWheel': WrapCommand.wrapCommand(HandleWheel.handleWheel),
  'Hovers.initialize': Initialize.initialize,
  'Hovers.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'Hovers.openDetails': WrapCommand.wrapCommand(EditorHoverOpenDetails.openDetails),
  'Hovers.render2': Render2.render2,
  'Hovers.selectCurrent': WrapCommand.wrapCommand(SelectCurrent.selectCurrent),
  'Hovers.selectIndex': WrapCommand.wrapCommand(SelectIndex.selectIndex),
  'Hovers.terminate': Terminate.terminate,
}
