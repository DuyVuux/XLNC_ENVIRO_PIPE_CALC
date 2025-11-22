"use client";

import { useState } from "react";
import { calculateMixingReaction } from "@/lib/api";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultsDisplay from "@/components/ResultsDisplay";

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Module 3: Ngăn trộn Phản ứng / Rapid Mixing Reaction
          </h1>
          <p className="text-gray-600">
            Tính toán thể tích ngăn trộn, tốc độ phản ứng và hiệu suất oxy hóa theo TCVN 7222:2002
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
                label="Thời gian trộn t"
                name="t"
                type="number"
                value={formData.t}
                onChange={(value) => handleInputChange("t", value)}
                unit=""
                required
                min={0.1}
                step={0.1}
              />
              <SelectField
                label="Đơn vị thời gian"
                name="t_unit"
                value={formData.t_unit}
                onChange={(value) => handleInputChange("t_unit", value)}
                options={[
                  { value: "second", label: "Giây" },
                  { value: "minute", label: "Phút" },
                  { value: "hour", label: "Giờ" },
                ]}
                required
              />
              <InputField
                label="Nồng độ Fe²⁺ ban đầu"
                name="Fe2_plus_0"
                type="number"
                value={formData.Fe2_plus_0}
                onChange={(value) => handleInputChange("Fe2_plus_0", value)}
                unit="mg/L"
                min={0}
                step={0.1}
              />
              <InputField
                label="Nồng độ H₂S ban đầu"
                name="H2S_0"
                type="number"
                value={formData.H2S_0}
                onChange={(value) => handleInputChange("H2S_0", value)}
                unit="mg/L"
                min={0}
                step={0.1}
              />
              <InputField
                label="Hằng số tốc độ Fe²⁺ k_Fe"
                name="k_Fe"
                type="number"
                value={formData.k_Fe}
                onChange={(value) => handleInputChange("k_Fe", value)}
                unit="L/mg·s"
                min={0.01}
                step={0.01}
              />
              <InputField
                label="Hằng số tốc độ H₂S k_H2S"
                name="k_H2S"
                type="number"
                value={formData.k_H2S}
                onChange={(value) => handleInputChange("k_H2S", value)}
                unit="L/mg·s"
                min={0.01}
                step={0.01}
              />
              <InputField
                label="Nồng độ oxy O₂"
                name="O2"
                type="number"
                value={formData.O2}
                onChange={(value) => handleInputChange("O2", value)}
                unit="mg/L"
                required
                min={0.1}
                step={0.1}
              />
              <InputField
                label="Tỷ lệ kích thước"
                name="ty_le_kich_thuoc"
                type="text"
                value={formData.ty_le_kich_thuoc}
                onChange={(value) => handleInputChange("ty_le_kich_thuoc", value)}
                unit=""
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

