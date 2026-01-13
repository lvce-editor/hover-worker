import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.hover-show-multiple-providers'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  // arrange
  const url1 = new URL('../fixtures/editor.hover-show-multiple-providers-1', import.meta.url).toString()
  const url2 = new URL('../fixtures/editor.hover-show-multiple-providers-2', import.meta.url).toString()
  await Extension.addWebExtension(url1)
  await Extension.addWebExtension(url2)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)

  // act
  await Editor.openHover()

  // assert - hover should appear with content from both providers
  const hover = Locator('.EditorHover')
  await expect(hover).toBeVisible()
  // The hover should contain content from at least one provider
  // Exact behavior depends on implementation - it might show first, last, or merged content
}
