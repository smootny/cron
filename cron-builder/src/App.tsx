import { CronForm } from "./components/CronForm"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Cron Builder</h1>
      <CronForm />
    </div>
  )
}