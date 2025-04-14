import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

type Option = {
  label: string
  value: number
}

type Props = {
  options: Option[]
  selectedValues: number[]
  onChange: (val: number[]) => void
  placeholder?: string
  disabled?: boolean
}

export function MultiSelect({
  options,
  selectedValues,
  onChange,
  placeholder = "Wybierz...",
  disabled = false,
}: Props) {
  const [open, setOpen] = useState(false)

  const toggleValue = (val: number) => {
    const isSelected = selectedValues.includes(val)
    const newValues = isSelected
      ? selectedValues.filter((v) => v !== val)
      : [...selectedValues, val]
    onChange(newValues)
  }

  const displayLabel =
    selectedValues.length === 0
      ? placeholder
      : options
          .filter((o) => selectedValues.includes(o.value))
          .map((o) => o.label)
          .join(", ")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between"
          disabled={disabled}
        >
          {displayLabel}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandList>
            <CommandGroup className="max-h-60 overflow-y-auto">
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => toggleValue(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedValues.includes(option.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
