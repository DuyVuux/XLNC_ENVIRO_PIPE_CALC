"use client";

import { useState } from "react";
import { calculateSprayAeration } from "@/lib/api";
import ModuleSidebar from "@/components/modules/ModuleSidebar";
import ModuleTopBar from "@/components/modules/ModuleTopBar";
import SprayAerationResultsSection from "@/components/modules/SprayAerationResultsSection";
import EquationsSection from "@/components/modules/EquationsSection";

interface SprayAerationInput {
  Q: number;
  Q_unit: string;
  t: number;
  C_Fe2_plus: number;
  C_H2S: number;
  A: number;
  eta: number;
}

export default function SprayAerationPage() {
  const [formData, setFormData] = useState<SprayAerationInput>({
    Q: 0.00579,
    Q_unit: "m3/s",
    t: 25,
    C_Fe2_plus: 8.5,
    C_H2S: 2.3,
    A: 15,
    eta: 0.8,
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
      const response = await calculateSprayAeration(formData);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra khi tính toán");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof SprayAerationInput, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <ModuleTopBar />
      <div className="relative flex flex-1 w-full">
        <ModuleSidebar />

      <main className="flex-1 p-6 lg:p-10">
        <div className="w-full max-w-4xl mx-auto">
          <header className="flex flex-col gap-3 mb-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h1 className="text-gray-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">
              Module 2: Spray Aeration Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal max-w-3xl">
              Calculate saturated oxygen, required oxygen amount and spray efficiency according to TCVN 7222:2002
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
                    placeholder="Enter flow rate"
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
                    htmlFor="water-temp"
                  >
                    Water temperature t (°C)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="water-temp"
                    name="water-temp"
                    type="number"
                    value={formData.t}
                    onChange={(e) => handleInputChange("t", parseFloat(e.target.value) || 0)}
                    placeholder="e.g., 25"
                    min={0}
                    max={100}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="fe2-concentration"
                  >
                    Initial Fe²⁺ concentration (mg/L)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="fe2-concentration"
                    name="fe2-concentration"
                    type="number"
                    value={formData.C_Fe2_plus}
                    onChange={(e) => handleInputChange("C_Fe2_plus", parseFloat(e.target.value) || 0)}
                    placeholder="e.g., 10"
                    min={0}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="h2s-concentration"
                  >
                    Initial H₂S concentration (mg/L)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="h2s-concentration"
                    name="h2s-concentration"
                    type="number"
                    value={formData.C_H2S}
                    onChange={(e) => handleInputChange("C_H2S", parseFloat(e.target.value) || 0)}
                    placeholder="e.g., 5"
                    min={0}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="spray-area"
                  >
                    Spray area A (m²) <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="spray-area"
                    name="spray-area"
                    type="number"
                    value={formData.A}
                    onChange={(e) => handleInputChange("A", parseFloat(e.target.value) || 0)}
                    placeholder="Enter spray area"
                    required
                    min={0.1}
                    step={0.1}
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="spray-efficiency"
                  >
                    Spray efficiency η
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="spray-efficiency"
                    name="spray-efficiency"
                    type="number"
                    value={formData.eta}
                    onChange={(e) => handleInputChange("eta", parseFloat(e.target.value) || 0)}
                    placeholder="Enter a value between 0 and 1"
                    min={0}
                    max={1}
                    step={0.01}
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
                    Must be a numeric value between 0 and 1.
                  </p>
                </div>
                <div className="md:col-span-2 flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg w-full md:w-auto transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-gray-800"
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

            <SprayAerationResultsSection result={result} />

            <EquationsSection />
          </main>
        </div>
      </main>
      </div>
    </div>
  );
}



