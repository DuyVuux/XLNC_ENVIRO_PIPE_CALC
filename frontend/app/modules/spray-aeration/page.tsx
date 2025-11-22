"use client";

import { useState } from "react";
import { calculateSprayAeration } from "@/lib/api";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultsDisplay from "@/components/ResultsDisplay";

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Module 2: Giàn phun mưa / Spray Aeration
          </h1>
          <p className="text-gray-600">
            Tính toán oxy bão hòa, lượng oxy cần thiết và hiệu suất phun mưa theo TCVN 7222:2002
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
                label="Nồng độ Fe²⁺ ban đầu"
                name="C_Fe2_plus"
                type="number"
                value={formData.C_Fe2_plus}
                onChange={(value) => handleInputChange("C_Fe2_plus", value)}
                unit="mg/L"
                min={0}
                step={0.1}
              />
              <InputField
                label="Nồng độ H₂S ban đầu"
                name="C_H2S"
                type="number"
                value={formData.C_H2S}
                onChange={(value) => handleInputChange("C_H2S", value)}
                unit="mg/L"
                min={0}
                step={0.1}
              />
              <InputField
                label="Diện tích giàn phun A"
                name="A"
                type="number"
                value={formData.A}
                onChange={(value) => handleInputChange("A", value)}
                unit="m²"
                required
                min={0.1}
                step={0.1}
              />
              <InputField
                label="Hiệu suất phun mưa η"
                name="eta"
                type="number"
                value={formData.eta}
                onChange={(value) => handleInputChange("eta", value)}
                unit=""
                min={0.7}
                max={0.9}
                step={0.01}
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

