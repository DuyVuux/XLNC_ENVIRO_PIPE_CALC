"use client";

import { PipeSizingOutput } from "@/types/api";
import { useState } from "react";

interface ResultsDisplayProps {
  result: PipeSizingOutput;
}

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  const [viewMode, setViewMode] = useState<"simple" | "engineering">("simple");

  const outputs = result.outputs;
  const safetyChecks = result.safety_checks || {};
  const technicalReport = result.technical_report || {};

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Kết quả Tính toán</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("simple")}
            className={`px-4 py-2 rounded-md ${
              viewMode === "simple"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Simple View
          </button>
          <button
            onClick={() => setViewMode("engineering")}
            className={`px-4 py-2 rounded-md ${
              viewMode === "engineering"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Engineering Full View
          </button>
        </div>
      </div>

      {viewMode === "simple" ? (
        <SimpleView outputs={outputs} safetyChecks={safetyChecks} technicalReport={technicalReport} />
      ) : (
        <EngineeringView result={result} />
      )}
    </div>
  );
}

function SimpleView({
  outputs,
  safetyChecks,
  technicalReport,
}: {
  outputs: PipeSizingOutput["outputs"];
  safetyChecks: Record<string, any>;
  technicalReport: PipeSizingOutput["technical_report"];
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Đường kính ống</h3>
          <p className="text-2xl font-bold text-blue-600">
            {outputs.D_d?.selected_standard || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            {outputs.D_d?.value ? `${(outputs.D_d.value * 1000).toFixed(1)} mm` : ""}
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Cột áp yêu cầu</h3>
          <p className="text-2xl font-bold text-green-600">
            {outputs.Hyc?.value ? `${outputs.Hyc.value.toFixed(2)} ${outputs.Hyc.unit}` : "N/A"}
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Vận tốc ống đẩy</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {outputs.v_d?.value ? `${outputs.v_d.value.toFixed(2)} ${outputs.v_d.unit}` : "N/A"}
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Tổng tổn thất</h3>
          <p className="text-2xl font-bold text-purple-600">
            {outputs.H1?.value ? `${outputs.H1.value.toFixed(2)} ${outputs.H1.unit}` : "N/A"}
          </p>
        </div>
      </div>

      {Object.keys(safetyChecks).length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-gray-700 mb-3">Kiểm tra An toàn</h3>
          <div className="space-y-2">
            {Object.entries(safetyChecks).map(([key, check]: [string, any]) => (
              <div
                key={key}
                className={`p-3 rounded-md ${
                  check.status === "PASS"
                    ? "bg-green-50 border border-green-200"
                    : "bg-yellow-50 border border-yellow-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      check.status === "PASS"
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {check.status}
                  </span>
                  <span className="text-sm text-gray-700">{check.note || key}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {technicalReport?.summary && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Hóa phàm</h3>
          <p className="text-gray-600">{technicalReport.summary.vi || technicalReport.summary.en}</p>
        </div>
      )}
    </div>
  );
}

function EngineeringView({ result }: { result: PipeSizingOutput }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-gray-700 mb-3">Inputs</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            {JSON.stringify(result.inputs, null, 2)}
          </pre>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700 mb-3">Outputs</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            {JSON.stringify(result.outputs, null, 2)}
          </pre>
        </div>
      </div>

      {result.intermediates && (
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Intermediate Values</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {JSON.stringify(result.intermediates, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {result.safety_checks && (
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Safety Checks</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {JSON.stringify(result.safety_checks, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {result.technical_report && (
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Technical Report</h3>
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            {result.technical_report.summary && (
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Summary</h4>
                <div className="space-y-2">
                  {result.technical_report.summary.en && (
                    <p className="text-sm text-gray-600">
                      <strong>EN:</strong> {result.technical_report.summary.en}
                    </p>
                  )}
                  {result.technical_report.summary.vi && (
                    <p className="text-sm text-gray-600">
                      <strong>VI:</strong> {result.technical_report.summary.vi}
                    </p>
                  )}
                </div>
              </div>
            )}
            {result.technical_report.assumptions && result.technical_report.assumptions.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Assumptions</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {result.technical_report.assumptions.map((assumption, idx) => (
                    <li key={idx}>{assumption}</li>
                  ))}
                </ul>
              </div>
            )}
            {result.technical_report.next_steps && result.technical_report.next_steps.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Next Steps</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {result.technical_report.next_steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="text-sm text-gray-500">
        <p>Calculation ID: {result.calculation_id}</p>
        <p>Confidence: {(result.confidence * 100).toFixed(1)}%</p>
        <p>Module Version: {result.module_version}</p>
        <p>Formula Set: {result.formula_set_version}</p>
      </div>
    </div>
  );
}

