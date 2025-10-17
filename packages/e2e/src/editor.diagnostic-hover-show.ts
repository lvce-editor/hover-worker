import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.diagnostic-hover-show'

export const skip = 1

export const test: Test = async ({ FileSystem, Main, Editor, Locator, expect, Extension }) => {
  // arrange
  const url = new URL('../fixtures/editor.diagnostic-hover-show', import.meta.url).toString()
  await Extension.addWebExtension(url)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)

  // act
  await Editor.openHover()

  // assert
  const hover = Locator('.EditorHover')
  await expect(hover).toBeVisible()
  await expect(hover).toHaveText('def')
}
