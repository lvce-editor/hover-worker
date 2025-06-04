import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { HoverState } from '../HoverState/HoverState.ts'

export const { get, set, wrapCommand, dispose } = ViewletRegistry.create<HoverState>()
