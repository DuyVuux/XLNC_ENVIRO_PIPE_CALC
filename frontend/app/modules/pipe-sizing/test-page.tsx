"use client";

import { useState } from "react";
import { calculatePipeSizing } from "@/lib/api";
import { PipeSizingInput } from "@/types/api";

export default function TestPage() {
  const [testResult, setTestResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    setTestResult("Testing API connection...\n");

    try {
      const testInput: PipeSizingInput = {
        Q: 0.00579,
        Q_unit: "m3/s",
        L: 120,
        t: 25,
        Hc: 5,
        epsilon: 0.0001,
        beta: 2.5,
        material: "PVC",
      };

      setTestResult((prev) => prev + "Sending request...\n");
      const result = await calculatePipeSizing(testInput);

      setTestResult((prev) => prev + "✅ API call successful!\n\n");
      setTestResult((prev) => prev + `Calculation ID: ${result.calculation_id}\n`);
      setTestResult((prev) => prev + `Module: ${result.module}\n`);
      setTestResult((prev) => prev + `Confidence: ${(result.confidence * 100).toFixed(1)}%\n\n`);

      if (result.outputs.D_d) {
        setTestResult(
          (prev) =>
            prev +
            `D_d: ${result.outputs.D_d.value} ${result.outputs.D_d.unit} (${result.outputs.D_d.selected_standard})\n`
        );
      }
      if (result.outputs.Hyc) {
        setTestResult(
          (prev) => prev + `Hyc: ${result.outputs.Hyc.value} ${result.outputs.Hyc.unit}\n`
        );
      }

      setTestResult((prev) => prev + "\n✅ Frontend-Backend integration working!");
    } catch (error) {
      setTestResult((prev) => prev + `\n❌ Error: ${error instanceof Error ? error.message : String(error)}\n`);
      setTestResult((prev) => prev + "\nPlease check:\n");
      setTestResult((prev) => prev + "1. Backend is running on http://localhost:8000\n");
      setTestResult((prev) => prev + "2. CORS is configured correctly\n");
      setTestResult((prev) => prev + "3. API endpoint is correct\n");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Frontend-Backend Integration Test</h1>
        <button
          onClick={testAPI}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed mb-4"
        >
          {loading ? "Testing..." : "Test API Connection"}
        </button>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Test Results:</h2>
          <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded border">
            {testResult || "Click 'Test API Connection' to start..."}
          </pre>
        </div>
      </div>
    </div>
  );
}




