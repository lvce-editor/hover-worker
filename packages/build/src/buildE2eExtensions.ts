import { build } from 'esbuild'
import { join } from 'node:path'
import { root } from './root.ts'

const extensionNames = [
  'editor.diagnostic-hover-show',
  'editor.hover-show',
  'editor.hover-show-empty-strings',
  'editor.hover-show-error-thrown',
  'editor.hover-show-extra-properties',
  'editor.hover-show-long-text',
  'editor.hover-show-mixed-providers',
  'editor.hover-show-multiple-providers-1',
  'editor.hover-show-multiple-providers-2',
  'editor.hover-show-only-documentation',
  'editor.hover-show-only-text',
  'editor.hover-show-promise-rejection',
  'editor.hover-show-returns-array',
  'editor.hover-show-returns-empty-object',
  'editor.hover-show-returns-null',
  'editor.hover-show-returns-number',
  'editor.hover-show-returns-string',
  'editor.hover-show-returns-undefined',
  'editor.hover-show-special-characters',
  'editor.hover-show-whitespace-only',
  'editor.hover-show-wrong-property-types',
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
