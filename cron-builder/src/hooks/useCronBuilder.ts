import { useMemo } from "react"
import { SectionValue } from "@/types/cron"
import { sectionToString } from "@/lib/cronUtils"

type UseCronBuilderInput = {
  minute: SectionValue
  hour: SectionValue
  day: SectionValue
  month: SectionValue
  weekday: SectionValue
}

export function useCronBuilder({ minute, hour, day, month, weekday }: UseCronBuilderInput) {
  return useMemo(() => {
    const pattern = [
      sectionToString(minute),
      sectionToString(hour),
      sectionToString(day),
      sectionToString(month),
      sectionToString(weekday),
    ].join(" ")

    return pattern
  }, [minute, hour, day, month, weekday])
}
