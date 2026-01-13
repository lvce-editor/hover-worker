import type { Rectangle } from '../Rectangle/Rectangle.ts'

export interface HoverDetailState extends Rectangle {
  readonly borderSize: number
  readonly content: string
  readonly uid: number
}
