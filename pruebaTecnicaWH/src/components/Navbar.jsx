import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black px-6 py-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-xl">Marvel App</h1>

      <div className="flex gap-6">
        <Link to="/" className="text-gray-300 hover:text-white transition">
          Home
        </Link>

        <Link
          to="/create"
          className="bg-red-600 px-4 py-1.5 rounded-lg text-white hover:bg-red-700 transition"
        >
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
