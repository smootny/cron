import { SectionValue } from "@/types/cron"
import { MultiSelect } from "@/components/ui/MultiSelect"

const monthOptions = [
  { label: "Styczeń", value: 1 },
  { label: "Luty", value: 2 },
  { label: "Marzec", value: 3 },
  { label: "Kwiecień", value: 4 },
  { label: "Maj", value: 5 },
  { label: "Czerwiec", value: 6 },
  { label: "Lipiec", value: 7 },
  { label: "Sierpień", value: 8 },
  { label: "Wrzesień", value: 9 },
  { label: "Październik", value: 10 },
  { label: "Listopad", value: 11 },
  { label: "Grudzień", value: 12 },
]

type Props = {
  value: SectionValue
  onChange: (val: SectionValue) => void
}

export function MonthSection({ value, onChange }: Props) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm space-y-3">
      <p className="font-medium mb-2">Miesiąc roku</p>

      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={value.type === "every"}
            onChange={() => onChange({ type: "every" })}
          />
          Każdy miesiąc
        </label>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={value.type === "specific"}
              onChange={() => onChange({ type: "specific", values: [1] })}
            />
            Określony miesiąc roku (wybierz jeden lub więcej)
          </label>

          <MultiSelect
            options={monthOptions}
            selectedValues={value.type === "specific" ? value.values : []}
            onChange={(newValues) => onChange({ type: "specific", values: newValues })}
            disabled={value.type !== "specific"}
            placeholder="Wybierz miesiące"
          />
        </div>
      </div>
    </div>
  )
}