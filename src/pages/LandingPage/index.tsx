import styles from "./LandingPage.module.css";

import { motion } from "framer-motion";
import { AnimatedText } from "../../components/AnimatedText";
import { clsx } from "clsx";
import { SpaceshipButton } from "../../components/SpaceshipButton";
import { HeroTitle } from "../../components/HeroTItle";
import { textAnimation } from "../../animations/text";
import { jsxWordSplit } from "../../lib/jsxSplit";
import { Earth } from "../../features/earth/Earth";
// import { Earth } from "../../features/earth/Earth";

export const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <section className={clsx(styles.section, styles.hero_section)}>
        <HeroTitle />
        <motion.p
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={clsx(styles.subtitle)}
        >
          <AnimatedText
            segments={jsxWordSplit(
              "This is the story of how one molecule can reshape our world."
            )}
          />
        </motion.p>
        <SpaceshipButton
          label={"Why methane is a huge threat"}
          onClick={() => console.log("hello")}
        />
      </section>
      <section className={styles.section}>
        <Earth />
      </section>
      <section className={styles.section}>C</section>
    </div>
  );
};
