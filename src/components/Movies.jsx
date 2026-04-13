const movies = [
  {
    name: "Dhurandhar: The Revenge",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7e/The_Revenge_2023_film_poster.jpg",
  },

  {
    name: "Jawan",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
  },

  {
    name: "Avengers: Endgame",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },

  {
    name: "Pathaan",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg",
  },

  {
    name: "KGF Chapter 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/K.G.F_Chapter_2.jpg",
  },

  {
    name: "RRR",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
  },

  {
    name: "Pushpa 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/08/Pushpa_2_The_Rule.jpg",
  },

  {
    name: "Animal",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Animal_film_poster.jpg",
  },
];

function Movies() {
  return (
    <div className="px-10 py-6">

      {/* SECTION TITLE */}
      <h2 className="text-2xl font-bold mb-6">
        Recommended Movies
      </h2>

      {/* MOVIES GRID */}
      <div className="grid grid-cols-4 gap-6">

        {movies.map((movie) => (
          <div
            key={movie.name}
            className="hover:scale-105 transition duration-300 text-center"
          >
            {/* MOVIE IMAGE */}
            <img
              src={movie.image}
              alt={movie.name}
              className="rounded-lg shadow-md h-72 w-full object-cover"
            />

            {/* MOVIE NAME */}
            <p className="mt-2 font-semibold">
              {movie.name}
            </p>

            {/* BOOK NOW BUTTON */}
            <button
              onClick={() => window.location.href = "/seats"}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Book Now
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Movies;