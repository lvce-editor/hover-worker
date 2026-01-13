import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-show-returns-undefined'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  // arrange
  const url = new URL('../fixtures/editor.hover-show-returns-undefined', import.meta.url).toString()
  await Extension.addWebExtension(url)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)

  // act
  await Editor.openHover()

  // assert - hover should not appear when extension returns undefined
  const hover = Locator('.EditorHover')
  await expect(hover).toBeHidden()
}
