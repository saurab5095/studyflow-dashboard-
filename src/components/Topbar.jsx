function Topbar() {
  return (
    <div className="flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mt-1">
          Stay productive today
        </p>
      </div>

      <button className="bg-cyan-500 px-5 py-2 rounded-xl hover:bg-cyan-600 transition">
        Add Task
      </button>

    </div>
  )
}

export default Topbar