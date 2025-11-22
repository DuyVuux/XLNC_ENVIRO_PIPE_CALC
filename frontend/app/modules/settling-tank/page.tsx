"use client";

import { useState } from "react";
import { calculateSettlingTank } from "@/lib/api";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultsDisplay from "@/components/ResultsDisplay";

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Module 4: Bể lắng / Settling Tank
          </h1>
          <p className="text-gray-600">
            Tính toán diện tích, thể tích và hiệu suất lắng theo TCVN 7222:2002, TCVN 33-2006
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
                label="Tốc độ lắng U_o"
                name="U_o"
                type="number"
                value={formData.U_o || 0.00025}
                onChange={(value) => handleInputChange("U_o", value)}
                unit="m/s"
                min={0.0001}
                step={0.00001}
              />
              <InputField
                label="Góc nghiêng α"
                name="alpha"
                type="number"
                value={formData.alpha || 60}
                onChange={(value) => handleInputChange("alpha", value)}
                unit="°"
                min={0}
                max={90}
                step={1}
              />
              <InputField
                label="Chiều cao thực tế H₀"
                name="H_0"
                type="number"
                value={formData.H_0 || 0.9}
                onChange={(value) => handleInputChange("H_0", value)}
                unit="m"
                min={0.1}
                step={0.1}
              />
              <InputField
                label="Chiều rộng ống lắng W"
                name="W"
                type="number"
                value={formData.W || 0.05}
                onChange={(value) => handleInputChange("W", value)}
                unit="m"
                min={0.01}
                step={0.01}
              />
              <InputField
                label="Hệ số an toàn α"
                name="alpha_safety"
                type="number"
                value={formData.alpha_safety || 1.05}
                onChange={(value) => handleInputChange("alpha_safety", value)}
                unit=""
                min={1.0}
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

