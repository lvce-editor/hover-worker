export const getWordBefore = (line: string, columnIndex: number) => {
  const before = line.slice(0, columnIndex)
  for (let i = before.length - 1; i >= 0; i--) {
    const char = before.codePointAt(i)
    if (!char) {
      continue
    }
    const isLetter = (char >= 97 && char <= 122) || (char >= 65 && char <= 90)
    const isDigit = char >= 48 && char <= 57
    const isDashOrUnderscore = char === 45 || char === 95
    if (!isLetter && !isDigit && !isDashOrUnderscore) {
      return before.slice(i + 1)
    }
  }
  return before
}
