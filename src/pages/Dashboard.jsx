import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import StatsCard from "../components/StatsCard"
import TaskSection from "../components/TaskSection"

function Dashboard() {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      
      <Sidebar />

      <div className="flex-1 p-6">

        <Topbar />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <StatsCard title="Total Tasks" value="12" />
          <StatsCard title="Completed" value="8" />
          <StatsCard title="Study Hours" value="5h" />
        </div>

        <TaskSection />

      </div>
    </div>
  )
}

export default Dashboard