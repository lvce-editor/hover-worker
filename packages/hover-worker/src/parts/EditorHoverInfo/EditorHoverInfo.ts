export interface EditorHoverInfo {
  readonly lineInfos: readonly any[]
  readonly documentation: string
  readonly x: number
  readonly y: number
  readonly matchingDiagnostics: readonly any[]
}
