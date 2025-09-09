//  @deprecated this doesn't work for variable width characters (unicode/emoji).
// Use position computation in renderer process instead

/*
 * @param {object} editor
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @returns
 */
export const x = (editor: any, rowIndex: number, columnIndex: number) => {
  const { columnWidth, x } = editor
  const offsetX = columnIndex * columnWidth + x
  return offsetX
}

export const y = (editor: any, rowIndex: number) => {
  const { rowHeight, y } = editor
  const offsetY = (rowIndex + 1) * rowHeight + y
  return offsetY
}
