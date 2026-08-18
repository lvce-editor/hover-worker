import { build } from 'esbuild'
import { join } from 'node:path'
import { root } from './root.ts'

const extensionNames = [
  'editor.hover-show-long-text',
  'editor.hover-show-multiple-providers-1',
  'editor.hover-show-multiple-providers-2',
  'editor.hover-show-special-characters',
  'editor.hover-show-whitespace-only',
] as const

const buildE2eExtension = async (extensionName: string): Promise<void> => {
  const extensionPath = join(root, 'packages', 'e2e', 'fixtures', extensionName)
  await build({
    bundle: true,
    entryPoints: [join(extensionPath, 'main.js')],
    external: ['electron', 'node:*'],
    format: 'esm',
    outfile: join(extensionPath, 'dist', 'main.js'),
    platform: 'browser',
    target: 'esnext',
  })
}

export const buildE2eExtensions = async (): Promise<void> => {
  await Promise.all(extensionNames.map(buildE2eExtension))
}
