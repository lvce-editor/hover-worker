export interface EditorHoverInfo {
  readonly documentation: string
  readonly lineInfos: readonly any[]
  readonly matchingDiagnostics: readonly any[]
  readonly x: number
  readonly y: number
}
