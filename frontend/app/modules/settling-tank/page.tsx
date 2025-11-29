"use client";

import { useState } from "react";
import { calculateSettlingTank } from "@/lib/api";
import ModuleSidebar from "@/components/modules/ModuleSidebar";
import ModuleTopBar from "@/components/modules/ModuleTopBar";
import SettlingTankResultsSection from "@/components/modules/SettlingTankResultsSection";
import EquationsSection from "@/components/modules/EquationsSection";

interface SettlingTankInput {
  Q: number;
  Q_unit: string;
  U_o?: number;
  alpha?: number;
  H_0?: number;
  W?: number;
  alpha_safety?: number;
}

export default function SettlingTankPage() {
  const [formData, setFormData] = useState<SettlingTankInput>({
    Q: 0.00579,
    Q_unit: "m3/s",
    U_o: 0.00025,
    alpha: 60,
    H_0: 0.9,
    W: 0.05,
    alpha_safety: 1.05,
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
      const response = await calculateSettlingTank(formData);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra khi tính toán");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof SettlingTankInput, value: string | number) => {
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
              Module 4: Settling Tank Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal max-w-3xl">
              Calculate area, volume and settling efficiency according to TCVN 7222:2002, TCVN 33-2006
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
                    htmlFor="settling-velocity"
                  >
                    Settling velocity U_o (m/s)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="settling-velocity"
                    name="settling-velocity"
                    type="number"
                    value={formData.U_o || 0.00025}
                    onChange={(e) => handleInputChange("U_o", parseFloat(e.target.value) || 0)}
                    placeholder="0.00025"
                    min={0.0001}
                    step={0.00001}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="inclined-angle"
                  >
                    Inclined angle α (°)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="inclined-angle"
                    name="inclined-angle"
                    type="number"
                    value={formData.alpha || 60}
                    onChange={(e) => handleInputChange("alpha", parseFloat(e.target.value) || 0)}
                    placeholder="60"
                    min={0}
                    max={90}
                    step={1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="actual-height"
                  >
                    Actual height H₀ (m)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="actual-height"
                    name="actual-height"
                    type="number"
                    value={formData.H_0 || 0.9}
                    onChange={(e) => handleInputChange("H_0", parseFloat(e.target.value) || 0)}
                    placeholder="0.9"
                    min={0.1}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="settling-pipe-width"
                  >
                    Settling pipe width W (m)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="settling-pipe-width"
                    name="settling-pipe-width"
                    type="number"
                    value={formData.W || 0.05}
                    onChange={(e) => handleInputChange("W", parseFloat(e.target.value) || 0)}
                    placeholder="0.05"
                    min={0.01}
                    step={0.01}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="safety-factor"
                  >
                    Safety factor α
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="safety-factor"
                    name="safety-factor"
                    type="number"
                    value={formData.alpha_safety || 1.05}
                    onChange={(e) => handleInputChange("alpha_safety", parseFloat(e.target.value) || 0)}
                    placeholder="1.05"
                    min={1.0}
                    step={0.01}
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

            <SettlingTankResultsSection result={result} />

            <EquationsSection />
          </main>
        </div>
      </main>
      </div>
    </div>
  );
}
