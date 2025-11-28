export default function FeaturesSection() {
  const features = [
    {
      icon: "calculate",
      title: "Accurate Engineering Calculations",
      description:
        "Reliable and precise results based on industry-standard formulas and best practices.",
    },
    {
      icon: "widgets",
      title: "Supports 5 Water Treatment Modules",
      description:
        "Comprehensive toolkit covering the core components of water treatment system design.",
    },
    {
      icon: "assignment",
      title: "Automatic Report Generation",
      description:
        "Instantly create professional PDF reports of your calculations and designs.",
    },
  ];

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-900 text-white p-4 rounded-full mb-4">
                <span className="material-icons text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

