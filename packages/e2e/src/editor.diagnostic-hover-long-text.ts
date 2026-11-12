import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'editor.diagnostic-hover-long-text'
export const skip = 1

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main }) => {
  const url = import.meta.resolve('../fixtures/editor.diagnostic-hover-long-text')
  await Extension.addWebExtension(url)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/src/test.xyz`, 'globalThis.AbortSignal.abort()')
  await Main.openUri(`${tmpDir}/src/test.xyz`)
  await Editor.setCursor(0, 11)

  await Editor.openHover()

  const hover = Locator('.EditorHover')
  const problemMessage = Locator('.HoverProblemMessage')
  await expect(hover).toBeVisible()
  await expect(hover).toHaveCSS('height', '300px')
  await expect(problemMessage).toContainText('wraps across many lines')
}
