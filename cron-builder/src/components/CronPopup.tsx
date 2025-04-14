import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useCronBuilder } from "@/hooks/useCronBuilder"
import { SectionValue } from "@/types/cron"
import { MinuteSection } from "@/components/CronSections/MinuteSection"
import { HourSection } from "@/components/CronSections/HourSection"
import { DaySection } from "@/components/CronSections/DaySection"
import { MonthSection } from "@/components/CronSections/MonthSection"
import { WeekdaySection } from "@/components/CronSections/WeekdaySection"

type CronPopupProps = {
  open: boolean
  onClose: () => void
  onConfirm: (cron: string) => void
}

export function CronPopup({ open, onClose, onConfirm }: CronPopupProps) {
  const [minute, setMinute] = useState<SectionValue>({ type: "every" })
  const [hour, setHour] = useState<SectionValue>({ type: "every" })
  const [day, setDay] = useState<SectionValue>({ type: "every" })
  const [month, setMonth] = useState<SectionValue>({ type: "every" })
  const [weekday, setWeekday] = useState<SectionValue>({ type: "every" })

  const cron = useCronBuilder({ minute, hour, day, month, weekday })

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-screen-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Harmonogram
          </DialogTitle>
        </DialogHeader>

        <div className="font-mono text-muted-foreground text-base">
          {cron}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MinuteSection value={minute} onChange={setMinute} />
          <HourSection value={hour} onChange={setHour} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DaySection value={day} onChange={setDay} />
          <MonthSection value={month} onChange={setMonth} />
          <WeekdaySection value={weekday} onChange={setWeekday} />
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>
            Anuluj
          </Button>
          <Button onClick={() => onConfirm(cron)}>Ustaw</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
