import { motion } from "framer-motion";
import voidHero from "@/assets/void-hero.jpg";

const Index = () => {
  return (
    <div>
      <motion.div
        className="w-full h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={voidHero}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="page-padding py-20 md:py-32">
        <motion.p
          className="text-editorial-subtitle text-foreground max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          An artistic practice shaped by feeling, perception, and the act of making.
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
