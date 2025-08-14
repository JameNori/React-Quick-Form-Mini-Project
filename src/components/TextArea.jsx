export function TextArea(props) {
  const { label, value, onChange, name } = props;
  return (
    <div className="mb-4">
      <label className="block font-medium">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded p-2 w-full"
      />
    </div>
  );
}
