import * as Character from '../Character/Character.ts'

const RE_WORD_END = /[\w\-]+$/

export const getWordBefore = (line: string, columnIndex: number) => {
  const before = line.slice(0, columnIndex)
  const matchBefore = before.match(RE_WORD_END)
  if (matchBefore) {
    return matchBefore[0]
  }
  return Character.EmptyString
}
