import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { CronPopup } from "@/components/CronPopup"

type CronFormValues = {
  name: string
  command: string
  cron: string
}

export function CronForm() {
  const { register, handleSubmit, setValue } = useForm<CronFormValues>({
    defaultValues: {
      name: "",
      command: "",
      cron: "",
    },
  })

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const onSubmit = (data: CronFormValues) => {
    console.log("Submit:", data)
  }

  const handleSetCron = () => {
    setIsPopupOpen(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4 mt-10">
      <div className="space-y-2">
        <label className="block font-medium">Nazwa</label>
        <Input {...register("name" as const)} />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Komenda</label>
        <Input {...register("command" as const)} />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Harmonogram</label>
        <Input {...register("cron" as const)} disabled />
        <Button type="button" variant="outline" onClick={handleSetCron}>
          Ustaw harmonogram
        </Button>
      </div>

      <Button type="submit">Zapisz</Button>

      <CronPopup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={(cronString) => {
          setValue("cron", cronString)
          setIsPopupOpen(false)
        }}
      />
    </form>
  )
}