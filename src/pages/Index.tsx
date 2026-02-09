import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import voidHero from "@/assets/void-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-[90vh] flex flex-col">
      {/* Hero image */}
      <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <motion.img
          src={voidHero}
          alt="From the Void series — light emerging from darkness"
          className="w-full h-full object-cover"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Text */}
      <div className="page-padding section-spacing max-w-2xl">
        <motion.p
          className="text-editorial-subtitle text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A practice of looking into what remains when everything else is removed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-10"
        >
          <Link
            to="/void"
            className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500 border-b border-border pb-1"
          >
            Enter Void
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
