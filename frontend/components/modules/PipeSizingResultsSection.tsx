import { PipeSizingOutput } from "@/types/api";

interface PipeSizingResultsSectionProps {
  result: PipeSizingOutput | null;
}

export default function PipeSizingResultsSection({
  result,
}: PipeSizingResultsSectionProps) {
  const formatValue = (value?: { value: number; unit: string; selected_standard?: string; note?: string }) => {
    if (!value || value.value === undefined) return "-";
    if (value.selected_standard) {
      return `${value.selected_standard} (${value.value.toFixed(4)} ${value.unit})`;
    }
    return `${value.value.toFixed(4)} ${value.unit}`;
  };

  const formatIntermediate = (value?: { value: number; unit: string; note?: string }) => {
    if (!value || value.value === undefined) return "-";
    return `${value.value.toFixed(6)} ${value.unit}`;
  };

  if (!result) {
    return (
      <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Calculation Results
        </h3>
        <div className="min-h-[200px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <p className="text-gray-500 dark:text-gray-400 text-center text-lg">
            Please enter your data in the above fields and click "Calculate" to see results.
          </p>
        </div>
      </section>
    );
  }

  const outputs = result.outputs || {};
  const intermediates = result.intermediates || {};
  const technicalReport = result.technical_report || {};

  return (
    <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Calculation Results
      </h3>

      {/* Main Results - Primary Outputs */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Primary Outputs
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
              Required diameter (Suction) D_h
            </label>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.D_h)}
            </p>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
              Required diameter (Discharge) D_d
            </label>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.D_d)}
            </p>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
              Flow velocity (Suction) v_h
            </label>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.v_h)}
            </p>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
              Flow velocity (Discharge) v_d
            </label>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.v_d)}
            </p>
          </div>
        </div>
      </div>

      {/* Head Loss Results */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Head Loss Analysis
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
              Friction head loss Htt
            </label>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.Htt)}
            </p>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
              Local head loss Hcb
            </label>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.Hcb)}
            </p>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
              Total head loss H1
            </label>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.H1)}
            </p>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
              Total required head H_total
            </label>
            <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.Hyc)}
            </p>
          </div>
        </div>
      </div>

      {/* Reynolds Numbers */}
      {(outputs.Re_hut || outputs.Re_day) && (
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
            Flow Characteristics
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {outputs.Re_hut && (
              <div>
                <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Reynolds number (Suction) Re_h
                </label>
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                  {outputs.Re_hut.value?.toLocaleString() || "-"} 
                  {outputs.Re_hut.flow_type && (
                    <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                      ({outputs.Re_hut.flow_type})
                    </span>
                  )}
                </p>
              </div>
            )}
            {outputs.Re_day && (
              <div>
                <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Reynolds number (Discharge) Re_d
                </label>
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                  {outputs.Re_day.value?.toLocaleString() || "-"}
                  {outputs.Re_day.flow_type && (
                    <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                      ({outputs.Re_day.flow_type})
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Intermediate Values */}
      {intermediates && Object.keys(intermediates).length > 0 && (
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
            Intermediate Calculations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {intermediates.Vn && (
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Kinematic viscosity Vn
                </label>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-2 rounded-md">
                  {formatIntermediate(intermediates.Vn)}
                </p>
              </div>
            )}
            {intermediates.alpha && (
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Relative roughness α
                </label>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-2 rounded-md">
                  {formatIntermediate(intermediates.alpha)}
                </p>
              </div>
            )}
            {intermediates.lambda && (
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Friction factor λ
                </label>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-2 rounded-md">
                  {formatIntermediate(intermediates.lambda)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Technical Report */}
      {technicalReport && (
        <div className="space-y-4">
          {technicalReport.summary && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md border-l-4 border-blue-500">
              <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">Summary</h4>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {technicalReport.summary.en || technicalReport.summary.vi}
              </p>
            </div>
          )}

          {technicalReport.assumptions && technicalReport.assumptions.length > 0 && (
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
              <h4 className="font-semibold text-base text-gray-800 dark:text-gray-200 mb-2">Assumptions</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {technicalReport.assumptions.map((assumption: string, index: number) => (
                  <li key={index}>{assumption}</li>
                ))}
              </ul>
            </div>
          )}

          {technicalReport.next_steps && technicalReport.next_steps.length > 0 && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
              <h4 className="font-semibold text-base text-gray-800 dark:text-gray-200 mb-2">Next Steps</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {technicalReport.next_steps.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {result.warnings && result.warnings.length > 0 && (
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-md border-l-4 border-yellow-500">
              <h4 className="font-semibold text-base text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Warnings</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
                {result.warnings.map((warning: string, index: number) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>
          )}

          {technicalReport.references && technicalReport.references.length > 0 && (
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
              <h4 className="font-semibold text-base text-gray-800 dark:text-gray-200 mb-2">References</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {technicalReport.references.map((ref: string, index: number) => (
                  <li key={index}>{ref}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
