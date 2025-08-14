export function RadioGroup({ label, options, selected, onChange, error }) {
  const handleChange = (e) => {
    // Create a synthetic event with the correct name and value
    const syntheticEvent = {
      target: {
        name: "selectedMovie",
        value: e.target.value,
      },
    };
    onChange(syntheticEvent);
  };

  return (
    <div className="mb-4">
      <p className="font-medium mb-2">{label}</p>
      {options.map((option) => (
        <label key={option.id} className="block mb-1">
          <input
            type="radio"
            name="selectedMovie"
            value={option.id}
            checked={selected === option.id}
            onChange={handleChange}
            className="mr-2"
          />
          {option.title} ({option.year}) - {option.director}
        </label>
      ))}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
