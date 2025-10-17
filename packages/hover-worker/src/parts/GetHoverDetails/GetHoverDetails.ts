import * as MeasureTextHeight from '../MeasureTextHeight/MeasureTextHeight.ts'
import * as TokenizeCodeBlock from '../TokenizeCodeBlock/TokenizeCodeBlock.ts'

interface HoverDetails {
  readonly lineInfos: readonly any[]
  readonly documentation: string
  readonly documentationHeight: number
}

export const getHoverDetails = async (
  hover: any,
  error: any,
  hoverFullWidth: number,
  hoverPaddingLeft: number,
  hoverPaddingRight: number,
  hoverBorderLeft: number,
  hoverBorderRight: number,
  hoverDocumentationFontFamily: string,
  hoverDocumentationFontSize: number,
  hoverDocumentationLineHeight: string,
  fallbackDisplayStringLanguageId: string,
): Promise<HoverDetails> => {
  if (error) {
    return {
      lineInfos: [],
      documentation: '',
      documentationHeight: 0,
    }
  }

  const { displayString, documentation, displayStringLanguageId } = hover

  const hoverDocumentationWidth = hoverFullWidth - hoverPaddingLeft - hoverPaddingRight - hoverBorderLeft - hoverBorderRight

  const tokenizerPath = ''
  const lineInfos = await TokenizeCodeBlock.tokenizeCodeBlock(
    displayString,
    displayStringLanguageId || fallbackDisplayStringLanguageId,
    tokenizerPath,
  )

  const documentationHeight = await MeasureTextHeight.measureTextBlockHeight(
    documentation,
    hoverDocumentationFontFamily,
    hoverDocumentationFontSize,
    hoverDocumentationLineHeight,
    hoverDocumentationWidth,
  )
  return {
    lineInfos,
    documentation,
    documentationHeight,
  }
}
