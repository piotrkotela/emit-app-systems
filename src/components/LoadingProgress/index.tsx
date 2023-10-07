import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./LoadingProgress.module.css";
import { letterAnimation } from "../../animations/text";

export type LoadingProgressProps = {
  progress: number;
};

export const LoadingProgress = ({ progress }: LoadingProgressProps) => {
  return (
    <main className={clsx(styles.container)}>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={letterAnimation}
        className={clsx(styles.loading_progress)}
      >
        {progress * 100}%
      </motion.span>
    </main>
  );
};
