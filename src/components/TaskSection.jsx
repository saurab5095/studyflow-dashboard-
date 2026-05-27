const tasks = [
  "Complete React project",
  "Study DBMS",
  "Prepare for exam",
]

function TaskSection() {
  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-5">
        Today's Tasks
      </h2>

      <div className="space-y-4">

        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-slate-900 p-5 rounded-2xl flex justify-between items-center"
          >
            <p>{task}</p>

            <button className="bg-green-500 px-4 py-2 rounded-xl">
              Done
            </button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default TaskSection