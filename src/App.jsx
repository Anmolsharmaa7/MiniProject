import { useState } from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import About from "./components/About";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Movies");

  return (
    <div>

      <Navbar />

      <Categories
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />

      <Banner />

      {selectedCategory === "Movies" && <Movies />}

      {selectedCategory === "Stream" && (
        <h2 className="text-2xl px-10 py-10">
          Streaming Section Coming Soon 🎬
        </h2>
      )}

      {selectedCategory === "Events" && (
        <h2 className="text-2xl px-10 py-10">
          Events Section Coming Soon 🎤
        </h2>
      )}

      {selectedCategory === "Plays" && (
        <h2 className="text-2xl px-10 py-10">
          Plays Section Coming Soon 🎭
        </h2>
      )}

      {selectedCategory === "Sports" && (
        <h2 className="text-2xl px-10 py-10">
          Sports Section Coming Soon ⚽
        </h2>
      )}

      {selectedCategory === "Activities" && (
        <h2 className="text-2xl px-10 py-10">
          Activities Section Coming Soon 🎯
        </h2>
      )}

      {/* Footer About Section */}
      <About />

    </div>
  );
}

export default App;