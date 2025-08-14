import { useState } from "react";
import { TextField } from "./components/TextField";
import { RadioGroup } from "./components/RadioGroup";
import { TextArea } from "./components/TextArea";
import { SurveySummary } from "./components/SurveySummary";
import { movies } from "./constants/Movies";
import { validateForm } from "./utility/validation";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedMovie: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", selectedMovie: "", comment: "" });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return <SurveySummary data={formData} onReset={handleReset} />;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter your username"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
        />
        <RadioGroup
          label="Select your favorite movie"
          options={movies}
          selected={formData.selectedMovie}
          onChange={handleChange}
          error={errors.selectedMovie}
        />
        <TextArea
          label="Comment (Optional)"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
// เผลอ merge ลง main ไปก่อนครับ