import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const measureTextBlockHeight = async (
  text: string,
  fontFamily: string,
  fontSize: number,
  lineHeight: number | string,
  width: number,
): Promise<number> => {
  return RendererWorker.invoke('MeasureTextHeight.measureTextBlockHeight', text, fontFamily, fontSize, lineHeight, width)
}
