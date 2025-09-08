import * as Close from '../Close/Close.ts'
import * as WrapCommand from '../HoverStates/HoverStates.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'Hovers.close': WrapCommand.wrapCommand(Close.close),
  'Hovers.create': Create.create,
  'Hovers.diff2': Diff2.diff2,
  'Hovers.dispose': Dispose.dispose,
  'Hovers.getCommandIds': GetCommandIds.getCommandIds,
  'Hovers.getKeyBindings': GetKeyBindings.getKeyBindings,
  'Hovers.initialize': Initialize.initialize,
  'Hovers.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'Hovers.render2': Render2.render2,
  'Hovers.terminate': Terminate.terminate,
}
