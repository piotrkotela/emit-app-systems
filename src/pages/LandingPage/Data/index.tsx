import styles from "./Data.module.css";

import IssImage from "./assets/iss.webp";
import BgImage from "./assets/5.png";

export const Data = () => {
  return (
    <div className={styles.container}>
      <img src={BgImage} className={styles.bg} />
      <img src={IssImage} className={styles.iss_large} />

      <div className={styles.layout}>
        <div className={styles.placeholder}></div>
        <div className={styles.content_container}>
          <div className="heading1">data</div>
          <div className="heading4">How we can see the unseen?</div>
          <div className={styles.description}>
            The data collected by EMIT provides a lot of possible applications
            from crop condition monitoring to precise methane leak detection.
            However, it's main mission is to determine the impact of surface
            dust migration on climate change issues either globally or locally.
          </div>
          <div className={styles.description}>
            Measurements captured by EMIT are openly available to the full
            science and applications communities for the range of additional
            investigations they enable.
          </div>
        </div>
      </div>
    </div>
  );
};
