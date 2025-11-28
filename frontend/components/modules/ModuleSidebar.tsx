"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ModuleSidebar() {
  const pathname = usePathname();

  const modules = [
    {
      id: "pipe-sizing",
      name: "Pipeline Hydraulics",
      href: "/modules/pipe-sizing",
      icon: "water_drop",
    },
    {
      id: "spray-aeration",
      name: "Spray Aeration",
      href: "/modules/spray-aeration",
      icon: "scatter_plot",
    },
    {
      id: "mixing-reaction",
      name: "Mixing Reaction",
      href: "/modules/mixing-reaction",
      icon: "science",
    },
    {
      id: "settling-tank",
      name: "Settling Tank",
      href: "/modules/settling-tank",
      icon: "layers",
    },
    {
      id: "filtration",
      name: "Filtration",
      href: "/modules/filtration",
      icon: "tune",
    },
  ];

  return (
    <aside className="flex w-full max-w-[350px] flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 rounded-full size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-2xl">water_drop</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-900 dark:text-white text-xl font-medium leading-normal">
              Water Treatment Suite
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
              Technical Calculators
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          {modules.map((module) => {
            const isActive = pathname === module.href;
            return (
              <Link
                key={module.id}
                href={module.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600/10"
                    : "hover:bg-blue-600/10"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {module.icon}
                </span>
                <p
                  className={`text-base font-medium leading-normal ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-900 dark:text-gray-300"
                  }`}
                >
                  {module.name}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

