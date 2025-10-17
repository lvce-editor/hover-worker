import * as EditorPosition from '../EditorCommand/EditorCommandPosition.ts'

export const getHoverPositionXy = (editor: any, rowIndex: number, wordStart: any, documentationHeight: any) => {
  const x = EditorPosition.x(editor, rowIndex, wordStart)
  const y = editor.height - EditorPosition.y(editor, rowIndex) + editor.y + 40
  return {
    x,
    y,
  }
}
