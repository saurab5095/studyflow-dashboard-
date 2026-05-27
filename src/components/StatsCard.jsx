import { motion } from "framer-motion"

function StatsCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-900 p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-gray-400">{title}</h2>

      <p className="text-4xl font-bold mt-3 text-cyan-400">
        {value}
      </p>
    </motion.div>
  )
}

export default StatsCard