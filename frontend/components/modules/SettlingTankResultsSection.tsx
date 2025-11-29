interface SettlingTankResultsSectionProps {
  result: any;
}

export default function SettlingTankResultsSection({
  result,
}: SettlingTankResultsSectionProps) {
  const formatValue = (value: any, unit?: string) => {
    if (value === undefined || value === null) return "-";
    if (typeof value === "object" && value.value !== undefined) {
      return `${value.value.toFixed(4)} ${value.unit || unit || ""}`;
    }
    if (typeof value === "number") {
      return `${value.toFixed(4)} ${unit || ""}`;
    }
    return String(value);
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

      {/* Flow Rate */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Flow Rate
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {outputs.Q1 && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Design flow rate Q₁
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.Q1)}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tank Dimensions */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Tank Dimensions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {outputs.F && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Settling area F
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.F)}
              </p>
            </div>
          )}
          {outputs.V && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Tank volume V
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.V)}
              </p>
            </div>
          )}
          {outputs.H && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Inclined height H
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.H)}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Settling Performance */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Settling Performance
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {outputs.v && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Surface settling velocity v
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.v)}
              </p>
            </div>
          )}
          {outputs.t_lang && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Settling time t_lắng
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.t_lang)}
              </p>
            </div>
          )}
          {outputs.eta && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Settling efficiency η
              </label>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.eta)}
              </p>
            </div>
          )}
        </div>
      </div>

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
