import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-[900px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p
          className="text-[#EDEDED] font-normal leading-[1.2]"
          style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
        >
          An artistic practice shaped by feeling, perception, and the act of making.
        </p>
        <Link
          to="/void"
          className="inline-block mt-12 text-[#EDEDED]/60 hover:text-[#EDEDED] text-sm tracking-[0.05em] no-underline hover:underline transition-all duration-500"
        >
          enter the void
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;
