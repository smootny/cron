export type SectionValue =
  | { type: "every" }
  | { type: "range"; from: number; to: number }
  | { type: "step"; step: number }
  | { type: "specific"; values: number[] }
