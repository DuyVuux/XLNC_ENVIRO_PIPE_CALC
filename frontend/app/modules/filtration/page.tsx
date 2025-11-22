"use client";

import { useState } from "react";
import { calculateFiltration } from "@/lib/api";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultsDisplay from "@/components/ResultsDisplay";

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Module 5: Bể lọc / Filtration
          </h1>
          <p className="text-gray-600">
            Tính toán diện tích lọc, đường kính bể và chiều cao các lớp theo TCVN 33-2006
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
                label="Vận tốc lọc v"
                name="v"
                type="number"
                value={formData.v || 8.0}
                onChange={(value) => handleInputChange("v", value)}
                unit="m/h"
                min={6}
                max={10}
                step={0.1}
              />
              <InputField
                label="Cường độ rửa lọc q"
                name="q"
                type="number"
                value={formData.q || 13.5}
                onChange={(value) => handleInputChange("q", value)}
                unit="l/s·m²"
                min={12}
                max={15}
                step={0.1}
              />
              <InputField
                label="Thời gian rửa t_rửa"
                name="t_rua"
                type="number"
                value={formData.t_rua || 5.0}
                onChange={(value) => handleInputChange("t_rua", value)}
                unit="phút"
                min={1}
                step={0.5}
              />
              <InputField
                label="Số ngăn bể n"
                name="n"
                type="number"
                value={formData.n || 1}
                onChange={(value) => handleInputChange("n", value)}
                unit=""
                min={1}
                step={1}
              />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="h₁ (Bộ phận thu đáy)"
                  name="h1"
                  type="number"
                  value={formData.h1 || 0.40}
                  onChange={(value) => handleInputChange("h1", value)}
                  unit="m"
                  min={0.1}
                  step={0.1}
                />
                <InputField
                  label="h₂ (Bản lọc)"
                  name="h2"
                  type="number"
                  value={formData.h2 || 0.20}
                  onChange={(value) => handleInputChange("h2", value)}
                  unit="m"
                  min={0.1}
                  step={0.1}
                />
                <InputField
                  label="h₃ (Lớp đệm)"
                  name="h3"
                  type="number"
                  value={formData.h3 || 0.10}
                  onChange={(value) => handleInputChange("h3", value)}
                  unit="m"
                  min={0.05}
                  step={0.05}
                />
                <InputField
                  label="h₄ (Vật liệu lọc)"
                  name="h4"
                  type="number"
                  value={formData.h4 || 0.80}
                  onChange={(value) => handleInputChange("h4", value)}
                  unit="m"
                  min={0.5}
                  step={0.1}
                />
                <InputField
                  label="h₅ (Lớp nước)"
                  name="h5"
                  type="number"
                  value={formData.h5 || 0.50}
                  onChange={(value) => handleInputChange("h5", value)}
                  unit="m"
                  min={0.3}
                  step={0.1}
                />
                <InputField
                  label="h₆ (Bản đỉnh)"
                  name="h6"
                  type="number"
                  value={formData.h6 || 0.20}
                  onChange={(value) => handleInputChange("h6", value)}
                  unit="m"
                  min={0.1}
                  step={0.1}
                />
                <InputField
                  label="h₈ (Bảo vệ)"
                  name="h8"
                  type="number"
                  value={formData.h8 || 0.80}
                  onChange={(value) => handleInputChange("h8", value)}
                  unit="m"
                  min={0.5}
                  step={0.1}
                />
              </div>

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

