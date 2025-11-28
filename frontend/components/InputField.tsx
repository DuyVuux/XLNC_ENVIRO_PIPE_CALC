interface InputFieldProps {
  label: string;
  name: string;
  type?: "text" | "number";
  value: string | number;
  onChange: (value: string | number) => void;
  unit?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
}

export default function InputField({
  label,
  name,
  type = "number",
  value,
  onChange,
  unit,
  placeholder,
  min,
  max,
  step,
  required = false,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => {
            const val = type === "number" ? parseFloat(e.target.value) || 0 : e.target.value;
            onChange(val);
          }}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          required={required}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {unit && (
          <span className="text-sm text-gray-500 whitespace-nowrap">{unit}</span>
        )}
      </div>
    </div>
  );
}



