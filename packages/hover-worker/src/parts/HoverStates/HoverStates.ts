import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { HoverState } from '../HoverState/HoverState.ts'

export const { dispose, get, set, wrapCommand } = ViewletRegistry.create<HoverState>()
