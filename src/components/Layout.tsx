import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems: { path: string | null; label: string; disabled?: boolean }[] = [
  { path: "/void", label: "Void Body" },
  { path: null, label: "All Seeing Eyes", disabled: true },
  { path: "/works", label: "Works" },
  { path: "/writing", label: "Writing" },
  { path: "/about", label: "About" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  const renderNavItem = (item: typeof navItems[number], onClick?: () => void) => {
    const isActive =
      item.path &&
      (location.pathname === item.path ||
        (item.path === "/void" && location.pathname.startsWith("/void")) ||
        (item.path === "/works" && location.pathname.startsWith("/works")));

    if (item.disabled || !item.path) {
      return (
        <span
          aria-disabled="true"
          className="text-editorial-sm text-muted-foreground/50 cursor-default select-none"
        >
          {item.label}
        </span>
      );
    }

    return (
      <Link
        to={item.path}
        onClick={onClick}
        className={`text-editorial-sm transition-colors duration-500 ${
          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
        <nav className="flex items-center justify-between page-padding py-5 md:py-6">
          <Link
            to="/"
            className="text-editorial-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors duration-500"
          >
            LILIAN ALKAFF
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>{renderNavItem(item)}</li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

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
                  <li key={item.label}>
                    {renderNavItem(item, () => setMenuOpen(false))}
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

      <footer className="page-padding py-20 md:py-28 flex justify-center">
        <a
          href="mailto:liliankaff@gmail.com"
          className="text-editorial-sm text-muted-foreground hover:text-foreground no-underline transition-colors duration-500"
        >
          liliankaff@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default Layout;
