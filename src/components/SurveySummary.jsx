export function SurveySummary({ data, onReset }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <p>
        <strong>Username:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Favorite movie:</strong> {data.selectedMovie}
      </p>
      {data.comment && (
        <p>
          <strong>Comment:</strong> {data.comment}
        </p>
      )}
      <button
        onClick={onReset}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
}
