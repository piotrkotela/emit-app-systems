import styles from "./LandingPage.module.css";

import { motion } from "framer-motion";
import { AnimatedText } from "../../components/AnimatedText";
import { clsx } from "clsx";
import { SpaceshipButton } from "../../components/SpaceshipButton";
import { HeroTitle } from "../../components/HeroTItle";
import { textAnimation } from "../../animations/text";
import { jsxWordSplit } from "../../lib/jsxSplit";
import { Earth } from "../../components/earth/Earth";
import { useEffect, useState } from "react";
import { useTextures } from "../../context/textures";
import { LoadingProgress } from "../../components/LoadingProgress";
import { Iss } from "../../components/iss/Iss";
import Navigation from "../../components/Navigation/Navigation";
import Emit from "./emit";
import Data from "./data";

export const LandingPage = () => {
  const { loadingManager } = useTextures();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    loadingManager.onProgress = (_, itemsLoaded, itemsTotal) => {
      setProgress(itemsTotal / itemsLoaded);
    };

    loadingManager.onLoad = () => {
      setLoading(false);
    };
  }, []);

  if (loading) {
    return <LoadingProgress progress={progress} />;
  }

  return (
    <div className={styles.wrapper}>
      <Navigation />
      <section className={clsx(styles.section, styles.hero_section)}>
        <Earth className={styles.earth_bg} />
        <Iss />
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
          label={"See why methane is a huge threat"}
          onClick={() => console.log("hello")}
        />
      </section>
      <section className={styles.section}>
        <Emit />
      </section>
      <section className={styles.section}>
        <Data />
      </section>
      <section className={styles.section}>C</section>
    </div>
  );
};
