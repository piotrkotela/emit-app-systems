import { motion } from "framer-motion";
import { AnimatedText } from "../../components/AnimatedText";
import styles from "./LandingPage.module.css";
import { clsx } from "clsx";

export const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <section className={clsx(styles.section, styles["hero_section"])}>
        <AnimatedText
          textElement={motion.h1}
          text="EMIT"
          className={clsx(styles["hero_title"])}
        />
        <AnimatedText
          textElement={motion.p}
          text="for the future"
          className={clsx(styles["hero_subtitle"])}
        />
      </section>
      <section className={styles.section}>B</section>
      <section className={styles.section}>C</section>
    </div>
  );
};
