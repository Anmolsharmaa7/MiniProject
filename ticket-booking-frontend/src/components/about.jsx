
function About() {
  return (
    <div className="bg-gray-900 text-gray-300 px-10 py-10 mt-10 text-sm">

      {/* TOP SECTION */}
      <div className="mb-8">
        <h2 className="text-white font-semibold mb-2">
          Movies Now Showing
        </h2>
        <p>
          Dhoom 4 | Pathaan 2 | Animal | Jawan | Dunki
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-white font-semibold mb-2">
          Upcoming Movies
        </h2>
        <p>
          Avengers Secret Wars | Pushpa 3 | KGF Chapter 3
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-white font-semibold mb-2">
          Movies by Genre
        </h2>
        <p>
          Action | Comedy | Horror | Thriller | Romance | Sci-Fi
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-white font-semibold mb-2">
          Events in Top Cities
        </h2>
        <p>
          Mumbai | Delhi | Bangalore | Hyderabad | Pune
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-white font-semibold mb-2">
          Sports Events
        </h2>
        <p>
          Cricket | Football | Kabaddi | Badminton
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-white font-semibold mb-2">
          Plays in Top Cities
        </h2>
        <p>
          Delhi Theatre | Mumbai Drama Shows | Bangalore Plays
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-white font-semibold mb-2">
          Activities
        </h2>
        <p>
          Trekking | Workshops | Stand-up Comedy | Night Events
        </p>
      </div>

      {/* HELP SECTION */}
      <div className="mb-8">
        <h2 className="text-white font-semibold mb-2">
          Help
        </h2>
        <p>
          About Us | Contact Us | FAQs | Terms & Conditions | Privacy Policy
        </p>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700 pt-5 text-center">
        <h1 className="text-white text-xl font-bold text-red-500">
          bookMyShow
        </h1>
        <p className="mt-2">
          © 2026 Ticket Booking Project | Made with ❤️ using React & Tailwind
        </p>
      </div>

    </div>
  );
}

export default About;