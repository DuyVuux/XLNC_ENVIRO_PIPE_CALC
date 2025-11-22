"use client";

import { useState } from "react";
import { calculatePipeSizing } from "@/lib/api";
import { PipeSizingInput, PipeSizingOutput } from "@/types/api";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultsDisplay from "@/components/ResultsDisplay";

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Module 1: Tính toán Đường ống / Pipeline Hydraulics
          </h1>
          <p className="text-gray-600">
            Tính toán đường kính ống, vận tốc, và cột áp yêu cầu theo TCVN 33-2006
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Thông số Đầu vào</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                label="Lưu lượng Q"
                name="Q"
                type="number"
                value={formData.Q}
                onChange={(value) => handleInputChange("Q", value)}
                unit=""
                required
                min={0.0001}
                step={0.0001}
              />
              <SelectField
                label="Đơn vị lưu lượng"
                name="Q_unit"
                value={formData.Q_unit}
                onChange={(value) => handleInputChange("Q_unit", value)}
                options={[
                  { value: "m3/s", label: "m³/s" },
                  { value: "m3/h", label: "m³/h" },
                  { value: "m3/day", label: "m³/ngày" },
                ]}
                required
              />
              <InputField
                label="Chiều dài ống L"
                name="L"
                type="number"
                value={formData.L}
                onChange={(value) => handleInputChange("L", value)}
                unit="m"
                required
                min={0.1}
                step={0.1}
              />
              <InputField
                label="Nhiệt độ nước t"
                name="t"
                type="number"
                value={formData.t}
                onChange={(value) => handleInputChange("t", value)}
                unit="°C"
                min={0}
                max={100}
                step={0.1}
              />
              <InputField
                label="Chênh lệch chiều cao Hc"
                name="Hc"
                type="number"
                value={formData.Hc}
                onChange={(value) => handleInputChange("Hc", value)}
                unit="m"
                required
                min={0}
                step={0.1}
              />
              <InputField
                label="Độ nhám ống ε"
                name="epsilon"
                type="number"
                value={formData.epsilon}
                onChange={(value) => handleInputChange("epsilon", value)}
                unit="m"
                min={0.00001}
                step={0.00001}
              />
              <InputField
                label="Hệ số tổn thất cục bộ β"
                name="beta"
                type="number"
                value={formData.beta}
                onChange={(value) => handleInputChange("beta", value)}
                unit=""
                min={0.1}
                step={0.1}
              />
              <SelectField
                label="Vật liệu ống"
                name="material"
                value={formData.material}
                onChange={(value) => handleInputChange("material", value)}
                options={[
                  { value: "PVC", label: "PVC" },
                  { value: "HDPE", label: "HDPE" },
                  { value: "Steel", label: "Thép" },
                  { value: "Cast Iron", label: "Gang" },
                ]}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Đang tính toán..." : "Tính toán"}
              </button>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            {result && <ResultsDisplay result={result} />}
            {!result && !loading && (
              <div className="bg-white rounded-lg shadow-lg p-6 text-center text-gray-500">
                <p>Nhập thông số và nhấn "Tính toán" để xem kết quả</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

