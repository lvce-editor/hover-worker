import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-hide'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  // arrange
  const url = import.meta.resolve('../fixtures/editor.hover-show')
  await Extension.addWebExtension(url)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)
  await Editor.openHover()

  // act
  await FileSystem.writeFile(`${tmpDir}/src/other.txt`, 'another file')
  await Main.openUri(`${tmpDir}/src/other.txt`)

  // assert
  const hover = Locator('.EditorHover')
  await expect(hover).toBeHidden()
}
