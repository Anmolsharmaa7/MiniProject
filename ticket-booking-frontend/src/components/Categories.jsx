function Categories({ selected, setSelected }) {
  const categories = [
    "Movies",
    "Stream",
    "Events",
    "Plays",
    "Sports",
    "Activities",
  ];

  return (
    <div className="flex gap-8 px-10 py-3 bg-gray-100">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`font-medium ${
            selected === category
              ? "text-red-500 border-b-2 border-red-500"
              : "text-black"
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default Categories;