import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BottomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        y: { stiffness: 1000 }
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed bottom-28 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 z-50"
          >
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl transition-colors ${
                    location.pathname === item.path
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center space-x-4 z-50 px-4">
        {/* Main navigation group */}
        <nav 
          className="rounded-full px-6 py-3 shadow-lg"
          style={{
            border: '1px solid var(--white)',
            WebkitBackdropFilter: 'blur(2.5rem)',
            backdropFilter: 'blur(2.5rem)',
            backgroundColor: '#ffffff1a'
          }}
        >
          <ul className="flex items-center md:space-x-8">
            {/* Mobile Menu Button */}
            <li className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 font-medium"
                style={{
                  border: '1px solid var(--white)',
                  WebkitBackdropFilter: 'blur(2.5rem)',
                  backdropFilter: 'blur(2.5rem)',
                  backgroundColor: '#ffffff1a',
                  padding: '',
                  borderRadius: '0.5rem'
                }}
              >
                Menu
              </button>
            </li>

            {/* Desktop Navigation Items */}
            {menuItems.map((item) => (
              <li key={item.path} className="hidden md:block">
                <Link
                  to={item.path}
                  className={`text-gray-700 hover:text-gray-900 font-medium ${
                    location.pathname === item.path ? "text-gray-900" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* "Say hi" button */}
        <Link
          to="/contact"
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg"
        >
          Say hi
        </Link>
      </div>
    </>
  );
};

export default BottomNav;