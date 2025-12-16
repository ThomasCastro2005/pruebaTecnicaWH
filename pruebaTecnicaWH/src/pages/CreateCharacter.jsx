import { useState } from "react";
import { createCharacter } from "../services/characters.service";

const CreateCharacter = () => {
  const imgBg =
    "https://orgoglionerd.it/wp-content/uploads/2022/08/avengers-endgame.webp";

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCharacter(form);
      alert("Character created!");
      setForm({ name: "", description: "", image: "" });
    } catch (error) {
      console.error(error);
      alert("Error creating character");
    }
  };

  return (
    <div
      className="relative min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imgBg})` }}
    >
      <div className="absolute inset-0 bg-red-600/70"></div>

      <div className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          New character
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCharacter;
