interface MixingReactionResultsSectionProps {
  result: any;
}

export default function MixingReactionResultsSection({
  result,
}: MixingReactionResultsSectionProps) {
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

      {/* Tank Dimensions */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Tank Dimensions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
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
          {outputs.L && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Length L
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.L)}
              </p>
            </div>
          )}
          {outputs.W && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Width W
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.W)}
              </p>
            </div>
          )}
          {outputs.H && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Height H
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.H)}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Reaction Rates */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Reaction Rates
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {outputs.r_Fe && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Fe²⁺ reaction rate r_Fe
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.r_Fe)}
              </p>
            </div>
          )}
          {outputs.r_H2S && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                H₂S reaction rate r_H2S
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.r_H2S)}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Final Concentrations */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Final Concentrations
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {outputs.Fe2_plus_t && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Fe²⁺ concentration after reaction
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.Fe2_plus_t)}
              </p>
            </div>
          )}
          {outputs.H2S_t && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                H₂S concentration after reaction
              </label>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.H2S_t)}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Oxidation Efficiency */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          Oxidation Efficiency
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {outputs.eta_Fe && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                Fe²⁺ oxidation efficiency η_Fe
              </label>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.eta_Fe)}
              </p>
            </div>
          )}
          {outputs.eta_H2S && (
            <div>
              <label className="block text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
                H₂S oxidation efficiency η_H2S
              </label>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md min-h-[44px]">
                {formatValue(outputs.eta_H2S)}
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
