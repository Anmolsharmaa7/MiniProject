function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-md">

      <h1 className="text-3xl font-bold text-red-500">
        bookMyShow
      </h1>

      <input
        type="text"
        placeholder="Search for Movies, Events, Plays..."
        className="border px-4 py-2 w-1/2 rounded"
      />

      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Sign In
      </button>

    </div>
  );
}

export default Navbar;