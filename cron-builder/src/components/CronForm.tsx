import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { CronPopup } from "@/components/CronPopup"
import { X, Plus } from "lucide-react"

type CronFormValues = {
  name: string
  command: string
  cron: string
}

export function CronForm() {
  const { register, handleSubmit, setValue, watch } = useForm<CronFormValues>({
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow border p-6 space-y-6">

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">🗓 Harmonogram</h2>
        <div className="flex gap-2">
          <Button variant="outline" type="button">
            <X className="w-4 h-4 mr-1" />
            Zamknij
          </Button>
          <Button className="bg-blue-700 " type="submit">
            <Plus className="w-4 h-4 mr-1 " />
            Zapisz
          </Button>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Nazwa</label>
          <Input {...register("name")} placeholder="Harmonogram_1" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Komenda</label>
          <Input {...register("command")} placeholder="app:remove:cron:report" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Harmonogram</label>
        <Input
          disabled
          value={watch("cron") && watch("cron").trim() !== "" ? watch("cron") : "*****"}
        />
        <Button
          type="button"
          variant="outline"
          onClick={handleSetCron}
          className="mt-6"
        >
          Ustaw harmonogram
        </Button>
      </div>

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
