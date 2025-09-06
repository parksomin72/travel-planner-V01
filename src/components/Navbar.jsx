import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plan", path: "/planning" },
    { name: "Profile", path: "/profile" },
  ];

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-500";

  // 🔹 Framer Motion Variants for staggered animation
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Travel Planner
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay + Sliding Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Drawer */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-16 left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-lg z-50"
            >
              {/* 🔹 Apply staggered animation to links */}
              <motion.ul
                className="flex flex-col space-y-4 px-6 py-6 font-medium"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.path} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className={linkClass(link.path)}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
