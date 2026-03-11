type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error: boolean;
  textarea?: boolean;
};

export default function InputField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  textarea = false,
}: InputFieldProps) {
  const baseStyle =
    "peer w-full border-b px-4 text-sm outline-none outline-none transition-all";

  const stateStyle = error
    ? "border-pink-500 text-pink-500"
    : "border-slate-200 focus:border-brown-darker";

  return (
    <div className="relative my-6">
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
          rows={5}
          aria-invalid={error}
          className={`${baseStyle} ${stateStyle} h-20`}
        />
      ) : (
        <input
          id={name === "email" ? "email" : "text"}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
          aria-invalid={error}
          className={`${baseStyle} ${stateStyle} h-10`}
        />
      )}
      <label
        htmlFor={name === "email" ? "email" : "text"}
        className={`absolute left-2 -top-2 z-10 px-2 text-xs transition-all ${
          error ? "text-pink-500" : "text-slate-400"
        }`}>
        {label}
      </label>
    </div>
  );
}
