import * as EditorPosition from '../EditorCommand/EditorCommandPosition.ts'

interface Xy {
  readonly x: number
  readonly y: number
}

export const getHoverPositionXy = (editor: any, rowIndex: number, wordStart: any): Xy => {
  const x = EditorPosition.x(editor, rowIndex, wordStart)
  const y = editor.height - EditorPosition.y(editor, rowIndex) + editor.y + 40
  return {
    x,
    y,
  }
}
