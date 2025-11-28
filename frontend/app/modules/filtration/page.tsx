"use client";

import { useState } from "react";
import { calculateFiltration } from "@/lib/api";
import ModuleSidebar from "@/components/modules/ModuleSidebar";
import FiltrationResultsSection from "@/components/modules/FiltrationResultsSection";
import EquationsSection from "@/components/modules/EquationsSection";

interface FiltrationInput {
  Q: number;
  Q_unit: string;
  v?: number;
  q?: number;
  t_rua?: number;
  n?: number;
  h1?: number;
  h2?: number;
  h3?: number;
  h4?: number;
  h5?: number;
  h6?: number;
  h8?: number;
}

export default function FiltrationPage() {
  const [formData, setFormData] = useState<FiltrationInput>({
    Q: 0.00579,
    Q_unit: "m3/s",
    v: 8.0,
    q: 13.5,
    t_rua: 5.0,
    n: 1,
    h1: 0.40,
    h2: 0.20,
    h3: 0.10,
    h4: 0.80,
    h5: 0.50,
    h6: 0.20,
    h8: 0.80,
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await calculateFiltration(formData);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra khi tính toán");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof FiltrationInput, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative flex min-h-screen w-full">
      <ModuleSidebar />

      <main className="flex-1 p-6 lg:p-10">
        <div className="w-full max-w-4xl mx-auto">
          <header className="flex flex-col gap-3 mb-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h1 className="text-gray-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">
              Module 5: Filtration Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal max-w-3xl">
              Calculate filter area, tank diameter and layer heights according to TCVN 33-2006
            </p>
          </header>

          <main className="space-y-8">
            <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Input Parameters
              </h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="flow-rate"
                  >
                    Flow rate Q <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="flow-rate"
                    name="flow-rate"
                    type="number"
                    value={formData.Q}
                    onChange={(e) => handleInputChange("Q", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    required
                    min={0.0001}
                    step={0.0001}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="flow-rate-unit"
                  >
                    Flow rate unit <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="flow-rate-unit"
                    name="flow-rate-unit"
                    value={formData.Q_unit}
                    onChange={(e) => handleInputChange("Q_unit", e.target.value)}
                    required
                  >
                    <option value="m3/s">m³/s</option>
                    <option value="m3/h">m³/h</option>
                    <option value="m3/day">m³/ngày</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="filtration-velocity"
                  >
                    Filtration velocity v (m/h)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="filtration-velocity"
                    name="filtration-velocity"
                    type="number"
                    value={formData.v || 8.0}
                    onChange={(e) => handleInputChange("v", parseFloat(e.target.value) || 0)}
                    placeholder="8.0"
                    min={6}
                    max={10}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="backwash-intensity"
                  >
                    Backwash intensity q (l/s·m²)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="backwash-intensity"
                    name="backwash-intensity"
                    type="number"
                    value={formData.q || 13.5}
                    onChange={(e) => handleInputChange("q", parseFloat(e.target.value) || 0)}
                    placeholder="13.5"
                    min={12}
                    max={15}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="backwash-time"
                  >
                    Backwash time t_rửa (minutes)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="backwash-time"
                    name="backwash-time"
                    type="number"
                    value={formData.t_rua || 5.0}
                    onChange={(e) => handleInputChange("t_rua", parseFloat(e.target.value) || 0)}
                    placeholder="5.0"
                    min={1}
                    step={0.5}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="number-of-cells"
                  >
                    Number of cells n
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="number-of-cells"
                    name="number-of-cells"
                    type="number"
                    value={formData.n || 1}
                    onChange={(e) => handleInputChange("n", parseInt(e.target.value) || 1)}
                    placeholder="1"
                    min={1}
                    step={1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="h1"
                  >
                    h₁ - Bottom collection height (m)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="h1"
                    name="h1"
                    type="number"
                    value={formData.h1 || 0.40}
                    onChange={(e) => handleInputChange("h1", parseFloat(e.target.value) || 0)}
                    placeholder="0.40"
                    min={0.1}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="h2"
                  >
                    h₂ - Filter plate height (m)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="h2"
                    name="h2"
                    type="number"
                    value={formData.h2 || 0.20}
                    onChange={(e) => handleInputChange("h2", parseFloat(e.target.value) || 0)}
                    placeholder="0.20"
                    min={0.1}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="h3"
                  >
                    h₃ - Support layer height (m)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="h3"
                    name="h3"
                    type="number"
                    value={formData.h3 || 0.10}
                    onChange={(e) => handleInputChange("h3", parseFloat(e.target.value) || 0)}
                    placeholder="0.10"
                    min={0.05}
                    step={0.05}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="h4"
                  >
                    h₄ - Filter media height (m)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="h4"
                    name="h4"
                    type="number"
                    value={formData.h4 || 0.80}
                    onChange={(e) => handleInputChange("h4", parseFloat(e.target.value) || 0)}
                    placeholder="0.80"
                    min={0.5}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="h5"
                  >
                    h₅ - Water layer height (m)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="h5"
                    name="h5"
                    type="number"
                    value={formData.h5 || 0.50}
                    onChange={(e) => handleInputChange("h5", parseFloat(e.target.value) || 0)}
                    placeholder="0.50"
                    min={0.3}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="h6"
                  >
                    h₆ - Top plate height (m)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="h6"
                    name="h6"
                    type="number"
                    value={formData.h6 || 0.20}
                    onChange={(e) => handleInputChange("h6", parseFloat(e.target.value) || 0)}
                    placeholder="0.20"
                    min={0.1}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="h8"
                  >
                    h₈ - Protection height (m)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="h8"
                    name="h8"
                    type="number"
                    value={formData.h8 || 0.80}
                    onChange={(e) => handleInputChange("h8", parseFloat(e.target.value) || 0)}
                    placeholder="0.80"
                    min={0.5}
                    step={0.1}
                  />
                </div>
                <div className="md:col-span-2 flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white font-bold py-3 px-12 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                  >
                    {loading ? "Calculating..." : "Calculate"}
                  </button>
                </div>
              </form>

              {error && (
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-red-800 dark:text-red-200 text-base">{error}</p>
                </div>
              )}
            </section>

            <FiltrationResultsSection result={result} />

            <EquationsSection />
          </main>
        </div>
      </main>
    </div>
  );
}
