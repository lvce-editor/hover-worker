import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-show-mixed-providers'

export const skip = 1

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  // arrange - add failing provider first, then working provider
  const failingUrl = import.meta.resolve('../fixtures/editor.hover-show-mixed-providers')
  const workingUrl = import.meta.resolve('../fixtures/editor.hover-show')
  await Extension.addWebExtension(failingUrl)
  await Extension.addWebExtension(workingUrl)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)

  // act
  await Editor.openHover()

  // assert - hover should still appear from the working provider
  const hover = Locator('.EditorHover')
  await expect(hover).toBeVisible()
  await expect(hover).toHaveText('def')
}
