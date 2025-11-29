export default function ResourcesSection() {
  const resources = [
    {
      icon: "functions",
      title: "Technical Calculators",
      description: "Quick calculations for common engineering tasks.",
    },
    {
      icon: "science",
      title: "Water Quality Standards",
      description: "Reference key regulatory water quality parameters.",
    },
    {
      icon: "colorize",
      title: "Chemical Dosing Guide",
      description: "Guidelines for common water treatment chemicals.",
    },
    {
      icon: "speed",
      title: "Flow/Velocity Charts",
      description: "Handy charts for pipe flow and velocity analysis.",
    },
  ];

  return (
    <section id="resources" className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Engineering Resources</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Access a suite of tools and data to support your engineering decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href="#"
              className="block bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-left"
            >
              <span className="material-icons text-3xl text-blue-900 mb-3 block">{resource.icon}</span>
              <h4 className="font-bold text-lg">{resource.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
