import { SectionValue } from "@/types/cron"
import { MultiSelect } from "@/components/ui/MultiSelect"

const generateOptions = (min: number, max: number) =>
  Array.from({ length: max - min + 1 }, (_, i) => ({
    label: String(min + i),
    value: min + i,
  }))

const range = { min: 1, max: 31 }
const options = generateOptions(range.min, range.max)

type Props = {
  value: SectionValue
  onChange: (val: SectionValue) => void
}

export function DaySection({ value, onChange }: Props) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm space-y-3">
      <p className="font-medium mb-2">Dzień miesiąca</p>
      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={value.type === "every"}
            onChange={() => onChange({ type: "every" })}
          />
          Każdy dzień miesiąca
        </label>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={value.type === "specific"}
              onChange={() =>
                onChange({ type: "specific", values: [range.min] })
              }
            />
            Określony dzień miesiąca (wybierz jeden lub więcej)
          </label>

          <MultiSelect
            options={options}
            selectedValues={value.type === "specific" ? value.values : []}
            onChange={(newValues) =>
              onChange({ type: "specific", values: newValues })
            }
            disabled={value.type !== "specific"}
            placeholder="Wybierz dni miesiąca"
          />
        </div>
      </div>
    </div>
  )
}
