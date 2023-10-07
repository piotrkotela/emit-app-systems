import styles from "./EmitPage.module.css";
import clsx from "clsx";

const Data = () => {
  return (
    <div>
      <div className={styles.rain}></div>
      <div className={styles.bg}></div>
      <div className={clsx(styles.iss_large)}></div>
      <div className={styles.sideContainer}>
        <div className={clsx("heading1")}>data</div>
        <div className={clsx(styles.subtitle)}>How we can see the unseen?</div>
        <div className={styles.description}>
          The data collected by EMIT provides a lot of possible applications
          from crop condition monitoring to precise methane leak detection.
          However, it's main mission is to determine the impact of surface dust
          migration on climate change issues either globally or locally.
        </div>
        <div className={styles.description}>
          Measurements captured by EMIT are openly available to the full science
          and applications communities for the range of additional
          investigations they enable.
        </div>
      </div>
    </div>
  );
};

export default Data;
