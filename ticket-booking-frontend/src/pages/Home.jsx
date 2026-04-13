import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Home() {

  const events = [
    {
      title: "Music Concert",
      location: "Delhi",
      date: "25 April",
    },
    {
      title: "Tech Conference",
      location: "Noida",
      date: "30 April",
    },
    {
      title: "Standup Comedy",
      location: "Gurgaon",
      date: "5 May",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold">
          Discover & Book Amazing Events 🎉
        </h1>

        <p className="mt-4 text-gray-600">
          Concerts • Workshops • Sports • Conferences
        </p>

        {/* SEARCH BAR */}

        <input
          placeholder="Search events..."
          className="mt-6 border px-6 py-3 rounded w-80"
        />
      </motion.div>


      {/* FEATURED EVENTS */}

      <div className="grid grid-cols-3 gap-6 px-10 mt-20">

        {events.map((event, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="shadow-lg rounded p-6"
          >

            <h2 className="text-xl font-bold">
              {event.title}
            </h2>

            <p className="text-gray-500">
              {event.location}
            </p>

            <p className="text-gray-500">
              {event.date}
            </p>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded">
              View Details
            </button>

          </motion.div>

        ))}

      </div>

    </>
  );
}

export default Home;