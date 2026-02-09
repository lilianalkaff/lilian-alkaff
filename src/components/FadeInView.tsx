import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeInView = ({ children, delay = 0, className = "" }: FadeInViewProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeInView;
