import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./HeroTitle.module.css";
import { AnimatedText } from "../AnimatedText";
import { jsxLetterSplit } from "../../lib/jsxSplit";
import { textAnimation } from "../../animations/text";

export const HeroTitle = () => {
  return (
    <motion.h1
      className={clsx(styles["hero_title"], "heading1")}
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <AnimatedText segments={jsxLetterSplit("EMIT")} />
    </motion.h1>
  );
};
