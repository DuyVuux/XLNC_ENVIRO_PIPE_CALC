export default function WhyChooseSection() {
  const benefits = [
    {
      title: "Accuracy You Can Trust",
      description:
        "Our calculations are rigorously tested and validated against established engineering principles.",
    },
    {
      title: "Intuitive & Usable Interface",
      description:
        "A clean, logical interface that reduces learning curves and maximizes productivity.",
    },
    {
      title: "Unwavering Reliability",
      description:
        "Built on a secure and stable platform to ensure your work is always safe and accessible.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              alt="Engineer working on a tablet in an industrial setting"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX7Zp2Uph53b_n0eOzzGUJQsNSGLGIkVeGehzRfbyO_EImE8yePRiupRBc8FRoIMO5Oao5fO1VD89435IhxdtBLBN3GnYEN3PfCyRlTuxmiznyWPt6IwC-SFKEATlku4aBFP6isSNf14BqFDGp7FQEyzksbv2irPGm3oEUgcKzTD6HHesNjc_nJHe83A8X5ljarWYVwehsCggGcmj4j7sq8fnxRW7jDXcxaxSmNrqCRnxZ8F_H5-mxS19jN7vU53ooTXySR10_CrPn"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose XLNC?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              XLNC provides a robust, user-friendly platform designed by engineers, for engineers.
              We streamline your workflow so you can focus on what matters most: delivering
              excellent results.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="material-icons text-blue-900 mt-1 mr-3">check_circle</span>
                  <div>
                    <h4 className="font-semibold text-lg">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
