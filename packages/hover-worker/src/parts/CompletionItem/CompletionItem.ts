export interface HoverItem {
  readonly label: string
  readonly kind: number
  readonly flags: number
  readonly matches: readonly number[]
}
