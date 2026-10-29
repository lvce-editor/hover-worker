import { defineConfig } from '@lvce-editor/test-with-playwright'

export default defineConfig({
  coverage: true,
  link: ['../../.tmp/dist'],
  onlyExtension: '.',
  testPath: '.',
})
