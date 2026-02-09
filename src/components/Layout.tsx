import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/void", label: "Void" },
  { path: "/works", label: "Works" },
  { path: "/notes", label: "Notes" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
        <nav className="flex items-center justify-between page-padding py-5 md:py-6">
          <Link to="/" className="text-editorial-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors duration-500">
            Artist Name
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.slice(1).map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-editorial-sm transition-colors duration-500 ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-b border-border"
            >
              <ul className="page-padding pb-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-editorial-sm transition-colors duration-500 ${
                        location.pathname === item.path
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16 md:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="page-padding py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-editorial-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
          <p className="text-editorial-sm text-muted-foreground">
            All works shown here are part of an ongoing practice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
