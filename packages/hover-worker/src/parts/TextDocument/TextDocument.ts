import * as Assert from '../Assert/Assert.ts'

export const offsetAt = (textDocument: any, positionRowIndex: number, positionColumnIndex: number) => {
  Assert.object(textDocument)
  Assert.number(positionRowIndex)
  Assert.number(positionColumnIndex)

  // TODO
  return 0
}
