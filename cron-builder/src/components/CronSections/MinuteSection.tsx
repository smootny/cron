import { SectionValue } from "@/types/cron"
import { MultiSelect } from "@/components/ui/MultiSelect"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"

const range = Array.from({ length: 60 }, (_, i) => i)

type Props = {
  value: SectionValue
  onChange: (val: SectionValue) => void
}

export function MinuteSection({ value, onChange }: Props) {
  const options = range.map((val) => ({
    label: val.toString(),
    value: val,
  }))

  const renderSelectPopover = (
    current: number,
    onSelect: (val: number) => void,
    disabled: boolean
  ) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[80px] w-full justify-between"
          disabled={disabled}
        >
          {current}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-h-[300px] overflow-y-auto p-0">
        <Command>
          <CommandGroup>
            {options.map((opt) => (
              <CommandItem
                key={opt.value}
                value={opt.label}
                onSelect={() => onSelect(opt.value)}
              >
                {opt.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
      <p className="font-medium mb-2">Minuta</p>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          checked={value.type === "every"}
          onChange={() => onChange({ type: "every" })}
        />
        Każda minuta
      </label>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={value.type === "range"}
            onChange={() => onChange({ type: "range", from: 0, to: 5 })}
          />
          Co minutę między
        </label>
        <div className="flex gap-2">
          {renderSelectPopover(value.type === "range" ? value.from : 0, (val) =>
            value.type === "range" && onChange({ ...value, from: val }), value.type !== "range")} 
            <p className="flex items-center"> - </p>
          {renderSelectPopover(value.type === "range" ? value.to : 5, (val) =>
            value.type === "range" && onChange({ ...value, to: val }), value.type !== "range")}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={value.type === "step"}
            onChange={() => onChange({ type: "step", step: 1 })}
          />
          Co */X minut
        </label>
        <div>{renderSelectPopover(value.type === "step" ? value.step : 1, (val) =>
          value.type === "step" && onChange({ type: "step", step: val }), value.type !== "step")}</div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={value.type === "specific"}
            onChange={() => onChange({ type: "specific", values: [] })}
          />
          Określona minuta (wybierz jedną lub więcej)
        </label>
        <MultiSelect
          options={options}
          selectedValues={value.type === "specific" ? value.values : []}
          onChange={(newValues) =>
            onChange({ type: "specific", values: newValues })
          }
          disabled={value.type !== "specific"}
          placeholder="Wybierz minuty"
        />
      </div>
    </div>
  )
}
