import styles from "./LandingPage.module.css";

import { motion } from "framer-motion";
import { AnimatedText } from "../../components/AnimatedText";
import { clsx } from "clsx";
import { HeroTitle } from "../../components/HeroTItle";
import { textAnimation } from "../../animations/text";
import { jsxWordSplit } from "../../lib/jsxSplit";
import { Earth } from "../../components/earth/Earth";
import { ComponentProps, useEffect, useState } from "react";
import { useTextures } from "../../context/textures";
import { LoadingProgress } from "../../components/LoadingProgress";
import { Iss } from "../../components/iss/Iss";
import Navigation from "../../components/Navigation/Navigation";
import { Emit } from "./Emit";
import { Data } from "./Data";
import { DustOne } from "./dust/DustOne";
import { DustTwo } from "./dust/DustTwo";
import { MethaneFirst } from "./methane/MethaneFirst";
import { MethaneSecond } from "./methane/MethaneSecond";
import Stories from "./stories/Stories";
import { StoryPage } from "./stories/StoryPage";

import GarbageImage from "../../assets/images/garbage.png";
import FloodsImage from "../../assets/images/floods.png";
import MosquitoImage from "../../assets/images/mosquito.png";

const stories: ComponentProps<typeof StoryPage>[] = [
  {
    header: (
      <>
        garbage
        <br /> patches
      </>
    ),
    location: "North Atlantic",
    date: "SINCE 1997",
    story:
      "The amount of debris in the Great Pacific Garbage Patch accumulates because much of it is not biodegradable. The North Pacific Subtropical Gyre is too large for scientists to trawl. In addition, not all of the trash floats on the surface, making the vortex’s area nearly impossible to measure. No one has fully studied the composition of the Great Pacific Garbage Patch, so humanity does not know what dangerous substances are spreading across the North Pacific.",
    emitImpact:
      "EMIT is able to identify the chemical composition of a surface based on the radiation reflecting off it. Using the data collected by this instrument, we can study the composition of the Great Pacific Garbage Patch and map the spread of toxic substances and dangerous microorganisms that arise there.",
    bgSrc: GarbageImage,
  },
  {
    header: "floods",
    location: "Pakistan",
    date: "06-10.2022",
    story:
      "In 2022, floods in Pakistan resulted in 1,739 casualties and caused extensive damage and economic losses totalling $14.9 billion and $15.2 billion. The floods were primarily attributed to heavier monsoon rains and glacier melt, exacerbated by a preceding severe heat wave—all linked to climate change. Even though Pakistan contributes less than 1% of global greenhouse gas emissions, it is one of the places most vulnerable to climate change.",
    emitImpact:
      "EMIT has the capability to continuously monitor soil moisture, mineral composition, and vegetation health. This ongoing geological surveillance of the region enables the early detection of indicators suggesting the soil's reduced capacity to absorb water, especially during extreme monsoon rains. Such early detection allows for the implementation of timely preventive measures, such as population evacuation or the construction of protective dikes, to mitigate potential risks.",
    bgSrc: FloodsImage,
  },
  {
    header: (
      <>
        vector borne <br /> diseases
      </>
    ),
    location: "Pakistan",
    date: "06-10.2022",
    story:
      "According to the WHO, nearly half of the world's population was at risk of malaria in 2021, with an estimated 247 million cases worldwide. As many as 95% of malaria cases and 96% of malaria-related deaths were reported in the African Region that year, with children under the age of 5 accounting for 80% of victims. Malaria elimination involves stopping local transmission in specific areas through targeted interventions.",
    emitImpact:
      "Using EMIT capabilities, it is possible to map geographic areas that favor the presence of mosquitoes. The data can be used to map the habitats of disease vectors that spread malaria to support public health efforts to reduce the incidence of the disease. Countries could predict where malaria is likely to occur and implement a prevention program by distributing vaccines or advising against visiting these areas.",
    bgSrc: MosquitoImage,
  },
];

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
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
        className={styles.section}
      >
        <Emit />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
        className={styles.section}
      >
        <MethaneFirst />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
        className={styles.section}
      >
        <MethaneSecond />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
        className={styles.section}
      >
        <DustOne />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
        className={styles.section}
      >
        <DustTwo />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
        className={styles.section}
      >
        <Data />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
        className={styles.section}
      >
        <Stories />
      </motion.section>

      {stories.map((storyProps) => (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-300px" }}
          className={styles.section}
        >
          <StoryPage {...storyProps} />
        </motion.section>
      ))}
    </div>
  );
};
