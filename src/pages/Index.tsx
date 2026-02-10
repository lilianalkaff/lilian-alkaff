import { motion } from "framer-motion";
const Index = () => {
  return <div className="min-h-[80vh] flex items-center">
      <div className="page-padding max-w-3xl ml-0">
        <motion.p className="text-editorial-subtitle text-foreground" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.2,
        delay: 0.3
      }}>
          An artistic practice shaped by feeling, perception, and the act of making.
        </motion.p>
      </div>
    </div>;
};
export default Index;