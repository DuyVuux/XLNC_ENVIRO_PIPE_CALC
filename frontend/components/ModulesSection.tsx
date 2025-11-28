import Link from "next/link";

export default function ModulesSection() {
  const modules = [
    {
      icon: "linear_scale",
      title: "Pipe Sizing",
      description: "Calculate optimal pipe diameters for various flow rates and materials.",
      href: "/modules/pipe-sizing",
    },
    {
      icon: "water",
      title: "Spray Aeration",
      description: "Design effective aeration systems for gas exchange and purification.",
      href: "/modules/spray-aeration",
    },
    {
      icon: "sync",
      title: "Mixing Reaction",
      description: "Model and size chemical mixing tanks for efficient reactions.",
      href: "/modules/mixing-reaction",
    },
    {
      icon: "layers",
      title: "Settling Tank",
      description: "Engineer sedimentation basins for effective solids removal.",
      href: "/modules/settling-tank",
    },
    {
      icon: "filter_alt",
      title: "Filtration",
      description: "Design media filters for removing suspended particles from water.",
      href: "/modules/filtration",
    },
  ];

  return (
    <section id="modules" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">XLNC Modules</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Powerful, intuitive modules for every stage of your water treatment engineering project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {modules.map((module, index) => (
            <Link
              key={index}
              href={module.href}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <span className="material-icons text-5xl text-blue-900 mb-4">{module.icon}</span>
              <h4 className="text-lg font-semibold mb-2">{module.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {module.description}
              </p>
              <span className="text-blue-900 font-semibold hover:underline">
                Open Module →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

