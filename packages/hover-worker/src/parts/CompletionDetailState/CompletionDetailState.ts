import type { Rectangle } from '../Rectangle/Rectangle.ts'

export interface HoverDetailState extends Rectangle {
  readonly content: string
  readonly uid: number
  readonly borderSize: number
}
