import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 450_000

export const workerPath = join(root, '.tmp/dist/dist/hoverWorkerMain.js')

export const playwrightPath = new URL('../../../node_modules/playwright/index.mjs', import.meta.url).toString()
