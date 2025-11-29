interface FiltrationResultsSectionProps {
  result: any;
}

export default function FiltrationResultsSection({
  result,
}: FiltrationResultsSectionProps) {
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
  const technicalReport = result.technical_report || {};

  return (
    <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Calculation Results
      </h3>

      {/* Filter Area */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Filter Area
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {outputs.f1 && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Total filter area f₁
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.f1)}
              </p>
            </div>
          )}
          {outputs.f1_prime && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Area per cell f₁'
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.f1_prime)}
              </p>
            </div>
          )}
          {outputs.F1 && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Actual filter area F₁
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.F1)}
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
          {outputs.D && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Tank diameter D
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.D)}
              </p>
            </div>
          )}
          {outputs.H && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Total filter height H
              </label>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.H)}
              </p>
            </div>
          )}
          {outputs.h7 && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Backwash tank height h₇
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.h7)}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Filtration Performance */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Filtration Performance
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {outputs.v_thuc && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Actual filtration velocity v_thực
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.v_thuc)}
              </p>
            </div>
          )}
          {outputs.Q_rua && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Backwash flow rate Q_rửa
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.Q_rua)}
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
