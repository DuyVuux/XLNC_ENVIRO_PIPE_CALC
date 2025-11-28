import { PipeSizingOutput } from "@/types/api";

interface PipeSizingResultsSectionProps {
  result: PipeSizingOutput | null;
}

export default function PipeSizingResultsSection({
  result,
}: PipeSizingResultsSectionProps) {
  const formatValue = (value?: { value: number; unit: string; selected_standard?: string }) => {
    if (!value || value.value === undefined) return "-";
    if (value.selected_standard) {
      return `${value.selected_standard} (${value.value.toFixed(4)} ${value.unit})`;
    }
    return `${value.value.toFixed(4)} ${value.unit}`;
  };

  return (
    <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Calculation Results
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
            Required diameter D
          </label>
          <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
            {formatValue(result?.outputs.D_d || result?.outputs.D_h)}
          </p>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
            Flow velocity V
          </label>
          <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
            {formatValue(result?.outputs.v_d || result?.outputs.v_h)}
          </p>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
            Head loss Hf
          </label>
          <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
            {formatValue(result?.outputs.Htt || result?.outputs.H1)}
          </p>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-600 dark:text-gray-400">
            Total required head H_total
          </label>
          <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 p-3 rounded-md min-h-[44px]">
            {formatValue(result?.outputs.Hyc)}
          </p>
        </div>
      </div>
      {result && result.technical_report?.summary && (
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

