import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-hide'

export const skip = 1

export const test: Test = async ({ Command, FileSystem, Main, Editor, Locator, expect, Extension }) => {
  // arrange
  const url = new URL('../fixtures/editor.hover-show', import.meta.url).toString()
  await Extension.addWebExtension(url)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)
  await Editor.openHover()

  // act
  await Command.execute(`EditorHover.close`)

  // assert
  const hover = Locator('.EditorHover')
  await expect(hover).toBeHidden()
}
