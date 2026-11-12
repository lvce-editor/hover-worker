import * as MeasureTextHeight from '../MeasureTextHeight/MeasureTextHeight.ts'

export const getDiagnosticHeight = async (
  diagnostics: readonly unknown[],
  fontFamily: string,
  fontSize: number,
  lineHeight: string,
  width: number,
): Promise<number> => {
  const text = diagnostics
    .map((value) => {
      const diagnostic = value as { readonly code?: unknown; readonly message?: unknown; readonly source?: unknown }
      return `${diagnostic.message} ${diagnostic.source} (${diagnostic.code})`
    })
    .join('\n')
  const textHeight = await MeasureTextHeight.measureTextBlockHeight(text, fontFamily, fontSize, lineHeight, width)
  // Include the hover's two-pixel border; keep the widget's CSS minimum height.
  return Math.max(20, textHeight + 2)
}
