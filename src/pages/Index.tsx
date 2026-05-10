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
          She feels. She sees. She makes.
        </p>
        <Link
          to="/void"
          className="inline-block mt-16 text-[#EDEDED] text-sm tracking-[0.05em] no-underline hover:underline"
        >
          enter
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;
