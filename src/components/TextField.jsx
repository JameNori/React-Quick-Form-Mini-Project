export function TextField(props) {
  const {
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    error,
  } = props;
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-white-700">{label}</label>
      <input
        className="mt-1 block w-full rounded-md border-white-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
