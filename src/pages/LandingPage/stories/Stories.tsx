import { forwardRef } from 'react';
import styles from "./Stories.module.css";

import PlanetImage from "../../../assets/images/planet.png";

const Stories = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <img
        src={PlanetImage}
        className={styles.planet}
        alt="Unknown blue planet image"
      />

      <div className={styles.layout}>
        <div className={styles.content_container}>
          <div className={styles.content_spacing}>
            <div className="heading1">stories</div>
            <div className="heading4">The world before EMIT</div>
            <div className={styles.description}>
              In the pre-EMIT era, methane rapidly intensified climate change,
              fueling destructive natural disasters like floods and storms. Iron
              oxide dust aggravated respiratory issues and contaminated
              ecosystems, compounding the environmental crisis.
            </div>
            <div className={styles.description}>
              We used to underestimate the potential impacts of methane and iron
              oxide dust, getting often caught by surprise. Now, equipped with
              EMIT's insights and capabilities, we are better poised to
              anticipate and prepare for environmental disasters of this nature,
              paving the way for a more resilient future.
            </div>
          </div>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </div>
  );
});

export default Stories;
