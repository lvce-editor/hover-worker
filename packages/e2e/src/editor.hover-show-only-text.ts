import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-show-only-text'

export const skip = 1

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  // arrange
  const url = import.meta.resolve('../fixtures/editor.hover-show-only-text')
  await Extension.addWebExtension(url)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)

  // act
  await Editor.openHover()

  // assert - hover may or may not appear depending on if documentation is required
  const hover = Locator('.EditorHover')
  // This test will reveal if documentation field is optional
  await expect(hover).toBeVisible()
  await expect(hover).toHaveText('only text field')
}
