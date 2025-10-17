import { terminate } from '@lvce-editor/viewlet-registry'
import * as Close from '../Close/Close.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import { handleSashPointerDown } from '../HandleSashPointerDown/HandleSashPointerDown.ts'
import { handleSashPointerMove } from '../HandleSashPointerMove/HandleSashPointerMove.ts'
import { handleSashPointerUp } from '../HandleSashPointerUp/HandleSashPointerUp.ts'
import * as WrapCommand from '../HoverStates/HoverStates.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'

export const commandMap = {
  'Hover.close': WrapCommand.wrapCommand(Close.close),
  'Hover.create': Create.create,
  'Hover.diff2': Diff2.diff2,
  'Hover.dispose': Dispose.dispose,
  'Hover.getCommandIds': GetCommandIds.getCommandIds,
  'Hover.getKeyBindings': GetKeyBindings.getKeyBindings,
  'Hover.initialize': Initialize.initialize,
  'Hover.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'Hover.render2': Render2.render2,
  'Hover.handleSashPointerUp': WrapCommand.wrapCommand(handleSashPointerUp),
  'Hover.handleSashPointerDown': WrapCommand.wrapCommand(handleSashPointerDown),
  'Hover.handleSashPointerMove': WrapCommand.wrapCommand(handleSashPointerMove),
  'Hover.terminate': terminate,
}
