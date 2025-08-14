export function SurveySummary({ data, onReset }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">สรุปข้อมูล</h2>
      <p>
        <strong>ชื่อ:</strong> {data.name}
      </p>
      <p>
        <strong>อีเมล:</strong> {data.email}
      </p>
      <p>
        <strong>หนังที่ชอบ:</strong> {data.selectedMovie}
      </p>
      {data.comment && (
        <p>
          <strong>ความคิดเห็น:</strong> {data.comment}
        </p>
      )}
      <button
        onClick={onReset}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        ทำแบบสำรวจใหม่
      </button>
    </div>
  );
}
