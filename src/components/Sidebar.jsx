import { FaBook, FaChartPie, FaStickyNote } from "react-icons/fa"

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 p-5 hidden md:block">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        StudyFlow
      </h1>

      <ul className="space-y-6">

        <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer">
          <FaChartPie />
          Dashboard
        </li>

        <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer">
          <FaBook />
          Tasks
        </li>

        <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer">
          <FaStickyNote />
          Notes
        </li>

      </ul>
    </div>
  )
}

export default Sidebar