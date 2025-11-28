export default function EquationsSection() {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Equations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-md flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400 italic">Formula display area</p>
        </div>
        <div className="text-gray-800 dark:text-gray-200">
          <h4 className="font-semibold text-xl mb-4">Notes & Definitions</h4>
          <ul className="space-y-3 text-base">
            <li>
              <span className="font-semibold w-8 inline-block">Q:</span> Water Flow Rate (m³/s)
            </li>
            <li>
              <span className="font-semibold w-8 inline-block">D:</span> Pipe Inner Diameter (m)
            </li>
            <li>
              <span className="font-semibold w-8 inline-block">V:</span> Water Velocity (m/s)
            </li>
            <li>
              <span className="font-semibold w-8 inline-block">L:</span> Pipe Length (m)
            </li>
            <li>
              <span className="font-semibold w-8 inline-block">Hf:</span> Head Loss (m)
            </li>
            <li>
              <span className="font-semibold w-8 inline-block">ρ:</span> Density of water (kg/m³)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

