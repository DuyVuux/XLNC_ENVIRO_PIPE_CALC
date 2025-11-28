"use client";

import { useState } from "react";
import { calculatePipeSizing } from "@/lib/api";
import { PipeSizingInput, PipeSizingOutput } from "@/types/api";
import ModuleSidebar from "@/components/modules/ModuleSidebar";
import PipeSizingResultsSection from "@/components/modules/PipeSizingResultsSection";
import EquationsSection from "@/components/modules/EquationsSection";

export default function PipeSizingPage() {
  const [formData, setFormData] = useState<PipeSizingInput>({
    Q: 0.00579,
    Q_unit: "m3/s",
    L: 120,
    t: 25,
    Hc: 5,
    epsilon: 0.0001,
    beta: 2.5,
    material: "PVC",
  });

  const [result, setResult] = useState<PipeSizingOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await calculatePipeSizing(formData);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra khi tính toán");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof PipeSizingInput, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative flex min-h-screen w-full">
      <ModuleSidebar />

      <main className="flex-1 p-6 lg:p-10">
        <div className="w-full max-w-4xl mx-auto">
          <header className="flex flex-col gap-3 mb-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h1 className="text-gray-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">
              Module 1: Pipeline Hydraulics Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal max-w-3xl">
              A tool for calculating pipeline hydraulics. This module provides calculations for
              various hydraulic parameters in pipelines. Input the required data to determine flow
              characteristics and pipe sizing.
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
                    htmlFor="pipe-length"
                  >
                    Pipe length L <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="pipe-length"
                    name="pipe-length"
                    type="number"
                    value={formData.L}
                    onChange={(e) => handleInputChange("L", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    required
                    min={0.1}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="height-diff"
                  >
                    Height difference Hc <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="height-diff"
                    name="height-diff"
                    type="number"
                    value={formData.Hc}
                    onChange={(e) => handleInputChange("Hc", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    required
                    min={0}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="water-temp"
                  >
                    Water temperature t
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="water-temp"
                    name="water-temp"
                    type="number"
                    value={formData.t}
                    onChange={(e) => handleInputChange("t", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    min={0}
                    max={100}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="pipe-roughness"
                  >
                    Pipe roughness ε
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="pipe-roughness"
                    name="pipe-roughness"
                    type="number"
                    value={formData.epsilon}
                    onChange={(e) => handleInputChange("epsilon", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    min={0.00001}
                    step={0.00001}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="loss-coefficient"
                  >
                    Local loss coefficient β
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="loss-coefficient"
                    name="loss-coefficient"
                    type="number"
                    value={formData.beta}
                    onChange={(e) => handleInputChange("beta", parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    min={0.1}
                    step={0.1}
                  />
                </div>
                <div>
                  <label
                    className="block text-base font-medium text-gray-600 dark:text-gray-400"
                    htmlFor="pipe-material"
                  >
                    Pipe material
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2 text-lg"
                    id="pipe-material"
                    name="pipe-material"
                    value={formData.material}
                    onChange={(e) => handleInputChange("material", e.target.value)}
                  >
                    <option value="PVC">PVC</option>
                    <option value="HDPE">HDPE</option>
                    <option value="Steel">Steel</option>
                    <option value="Cast Iron">Cast Iron</option>
                  </select>
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

            <PipeSizingResultsSection result={result} />

            <EquationsSection />
          </main>
        </div>
      </main>
    </div>
  );
}



