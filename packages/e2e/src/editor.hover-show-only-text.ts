import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-show-only-text'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  // arrange
  const url = new URL('../fixtures/editor.hover-show-only-text', import.meta.url).toString()
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
