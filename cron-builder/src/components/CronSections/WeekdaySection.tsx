import { SectionValue } from "@/types/cron"
import { MultiSelect } from "@/components/ui/MultiSelect"

const weekdayOptions = [
  { label: "Pn", value: 1 },
  { label: "Wt", value: 2 },
  { label: "Śr", value: 3 },
  { label: "Cz", value: 4 },
  { label: "Pt", value: 5 },
  { label: "Sb", value: 6 },
  { label: "Nd", value: 0 },
]

type Props = {
  value: SectionValue
  onChange: (val: SectionValue) => void
}

export function WeekdaySection({ value, onChange }: Props) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm space-y-3">
      <p className="font-medium mb-2">Dzień tygodnia</p>

      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={value.type === "every"}
            onChange={() => onChange({ type: "every" })}
          />
          Każdy dzień tygodnia
        </label>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={value.type === "specific"}
              onChange={() => onChange({ type: "specific", values: [1] })}
            />
            Określony dzień tygodnia (wybierz jeden lub więcej)
          </label>

          <MultiSelect
            options={weekdayOptions}
            selectedValues={value.type === "specific" ? value.values : []}
            onChange={(newValues) => onChange({ type: "specific", values: newValues })}
            disabled={value.type !== "specific"}
            placeholder="Wybierz dni tygodnia"
          />
        </div>
      </div>
    </div>
  )
}
