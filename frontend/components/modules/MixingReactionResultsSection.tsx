interface MixingReactionResultsSectionProps {
  result: any;
}

export default function MixingReactionResultsSection({
  result,
}: MixingReactionResultsSectionProps) {
  if (!result) {
    return (
      <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Calculation Results
        </h3>
        <div className="min-h-[200px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Results will be displayed here after calculation.
          </p>
        </div>
      </section>
    );
  }

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

  const outputs = result.outputs || {};

  return (
    <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Calculation Results
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {outputs.V && (
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
              Tank volume V
            </label>
            <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.V)}
            </p>
          </div>
        )}
        {outputs.L && (
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
              Length L
            </label>
            <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.L)}
            </p>
          </div>
        )}
        {outputs.W && (
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
              Width W
            </label>
            <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.W)}
            </p>
          </div>
        )}
        {outputs.H && (
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
              Height H
            </label>
            <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.H)}
            </p>
          </div>
        )}
        {outputs.r_Fe && (
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
              Fe²⁺ reaction rate r_Fe
            </label>
            <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.r_Fe)}
            </p>
          </div>
        )}
        {outputs.r_H2S && (
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
              H₂S reaction rate r_H2S
            </label>
            <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.r_H2S)}
            </p>
          </div>
        )}
        {outputs.eta_Fe && (
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
              Fe²⁺ oxidation efficiency η_Fe
            </label>
            <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.eta_Fe)}
            </p>
          </div>
        )}
        {outputs.eta_H2S && (
          <div>
            <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
              H₂S oxidation efficiency η_H2S
            </label>
            <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
              {formatValue(outputs.eta_H2S)}
            </p>
          </div>
        )}
      </div>
      {result.technical_report?.summary && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Summary</h4>
          <p className="text-base text-gray-700 dark:text-gray-300">
            {result.technical_report.summary.vi || result.technical_report.summary.en}
          </p>
        </div>
      )}
    </section>
  );
}

