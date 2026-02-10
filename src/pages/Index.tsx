import { motion } from "framer-motion";
import voidHero from "@/assets/void-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full">
        <motion.img
          src={voidHero}
          alt="Artwork"
          className="w-full h-screen object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>
      <div className="page-padding max-w-3xl py-16">
        <motion.p
          className="text-editorial-subtitle text-foreground"
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
