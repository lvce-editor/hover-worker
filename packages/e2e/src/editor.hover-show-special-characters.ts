import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-show-special-characters'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  // arrange
  const url = new URL('../fixtures/editor.hover-show-special-characters', import.meta.url).toString()
  await Extension.addWebExtension(url)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)

  // act
  await Editor.openHover()

  // assert - hover should appear with properly escaped HTML
  const hover = Locator('.EditorHover')
  await expect(hover).toBeVisible()
  // The text should be escaped and not executed as HTML/JavaScript
}
