import * as MeasureTextHeight from '../MeasureTextHeight/MeasureTextHeight.ts'
import * as TokenizeCodeBlock from '../TokenizeCodeBlock/TokenizeCodeBlock.ts'

interface HoverDetails {
  readonly documentation: string
  readonly documentationHeight: number
  readonly lineInfos: readonly any[]
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
      documentation: '',
      documentationHeight: 0,
      lineInfos: [],
    }
  }

  const displayString = typeof hover.displayString === 'string' ? hover.displayString : ''
  const hoverText = typeof hover.text === 'string' && hover.text.trim() ? hover.text : ''
  const documentation = typeof hover.documentation === 'string' && hover.documentation.trim() ? hover.documentation : hoverText
  const displayStringLanguageId = typeof hover.displayStringLanguageId === 'string' ? hover.displayStringLanguageId : ''

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
    documentation,
    documentationHeight,
    lineInfos,
  }
}
