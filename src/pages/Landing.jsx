import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />  {/* Reusable Navbar */}

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Plan Your Next Adventure with Ease 🌍
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Organize your trips, save itineraries, and explore the world without stress.
        </p>
        <a
          href="/planning"
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Start Planning
        </a>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 text-gray-600 text-sm">
        © {new Date().getFullYear()} Travel Planner. All rights reserved.
      </footer>
    </div>
  );
}
