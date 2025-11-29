"use client";

import { useState } from "react";
import { calculateMixingReaction } from "@/lib/api";
import ModuleSidebar from "@/components/modules/ModuleSidebar";
import ModuleTopBar from "@/components/modules/ModuleTopBar";
import MixingReactionResultsSection from "@/components/modules/MixingReactionResultsSection";
import EquationsSection from "@/components/modules/EquationsSection";

interface MixingReactionInput {
  Q: number;
  Q_unit: string;
  t: number;
  t_unit: string;
  Fe2_plus_0: number;
  H2S_0: number;
  k_Fe: number;
  k_H2S: number;
  O2: number;
  ty_le_kich_thuoc: string;
}

export default function MixingReactionPage() {
  const [formData, setFormData] = useState<MixingReactionInput>({
    Q: 0.00579,
    Q_unit: "m3/s",
    t: 2,
    t_unit: "minute",
    Fe2_plus_0: 8.5,
    H2S_0: 2.3,
    k_Fe: 0.18,
    k_H2S: 0.25,
    O2: 6.59,
    ty_le_kich_thuoc: "L:W:H = 2:1:1",
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
      const response = await calculateMixingReaction(formData);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra khi tính toán");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof MixingReactionInput, value: string | number) => {
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
              Module 3: Rapid Mixing Reaction Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal max-w-3xl">
              Calculate mixing tank volume, reaction rate, and oxidation efficiency according to TCVN 7222:2002
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
                    htmlFor="mixing-time"
                  >
                    Mixing time t <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="mixing-time"
                    name="mixing-time"
                    type="number"
                    value={formData.t}
                    onChange={(e) => handleInputChange("t", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    required
                    min={0.1}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="time-unit"
                  >
                    Time unit <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="time-unit"
                    name="time-unit"
                    value={formData.t_unit}
                    onChange={(e) => handleInputChange("t_unit", e.target.value)}
                    required
                  >
                    <option value="second">Second</option>
                    <option value="minute">Minute</option>
                    <option value="hour">Hour</option>
                  </select>
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
                    value={formData.Fe2_plus_0}
                    onChange={(e) => handleInputChange("Fe2_plus_0", parseFloat(e.target.value) || 0)}
                    placeholder="0"
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
                    value={formData.H2S_0}
                    onChange={(e) => handleInputChange("H2S_0", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    min={0}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="k-fe"
                  >
                    Fe²⁺ reaction rate constant k_Fe (L/mg·s)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="k-fe"
                    name="k-fe"
                    type="number"
                    value={formData.k_Fe}
                    onChange={(e) => handleInputChange("k_Fe", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    min={0.01}
                    step={0.01}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="k-h2s"
                  >
                    H₂S reaction rate constant k_H2S (L/mg·s)
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="k-h2s"
                    name="k-h2s"
                    type="number"
                    value={formData.k_H2S}
                    onChange={(e) => handleInputChange("k_H2S", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    min={0.01}
                    step={0.01}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="o2-concentration"
                  >
                    Oxygen concentration O₂ (mg/L) <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="o2-concentration"
                    name="o2-concentration"
                    type="number"
                    value={formData.O2}
                    onChange={(e) => handleInputChange("O2", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    required
                    min={0.1}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="dimension-ratio"
                  >
                    Dimension ratio <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="dimension-ratio"
                    name="dimension-ratio"
                    type="text"
                    value={formData.ty_le_kich_thuoc}
                    onChange={(e) => handleInputChange("ty_le_kich_thuoc", e.target.value)}
                    placeholder="L:W:H = 2:1:1"
                    required
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

            <MixingReactionResultsSection result={result} />

            <EquationsSection />
          </main>
        </div>
      </main>
      </div>
    </div>
  );
}
