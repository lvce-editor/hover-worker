import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-show-mixed-providers'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  // arrange - add providers with different content and extra fields
  const mixedUrl = import.meta.resolve('../fixtures/editor.hover-show-mixed-providers')
  const workingUrl = import.meta.resolve('../fixtures/editor.hover-show')
  await Extension.addWebExtension(workingUrl)
  await Extension.addWebExtension(mixedUrl)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)

  // act
  await Editor.openHover()

  // assert - at least one provider's documented result should appear
  const hover = Locator('.EditorHover')
  await expect(hover).toBeVisible()
  await expect(hover).toContainText('def')
}
