export interface HoverItem {
  readonly flags: number
  readonly kind: number
  readonly label: string
  readonly matches: readonly number[]
}
