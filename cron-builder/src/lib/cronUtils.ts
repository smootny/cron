import { SectionValue } from "@/types/cron"

export function sectionToString(value: SectionValue): string {
  switch (value.type) {
    case "every":
      return "*"
    case "range":
      return `${value.from}-${value.to}`
    case "step":
      return `*/${value.step}`
    case "specific":
      return value.values.sort((a: number, b: number) => a - b).join(",")
    default:
      return "*"
  }
}
