export default function IndustriesSection() {
  const industries = [
    { icon: "water_drop", title: "Water Supply Plants" },
    { icon: "factory", title: "Industrial Wastewater" },
    { icon: "eco", title: "Environmental Consulting" },
    { icon: "engineering", title: "EPC Contractors" },
  ];

  return (
    <section id="industries" className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Serving Critical Industries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="p-6">
              <span className="material-icons text-5xl text-blue-900 mb-4 block">{industry.icon}</span>
              <h4 className="text-xl font-semibold">{industry.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
