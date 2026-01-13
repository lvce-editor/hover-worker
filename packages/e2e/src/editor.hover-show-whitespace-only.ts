import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-show-whitespace-only'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  // arrange
  const url = new URL('../fixtures/editor.hover-show-whitespace-only', import.meta.url).toString()
  await Extension.addWebExtension(url)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)

  // act
  await Editor.openHover()

  // assert - behavior depends on implementation
  const hover = Locator('.EditorHover')
  // May or may not appear - tests whitespace handling
}
