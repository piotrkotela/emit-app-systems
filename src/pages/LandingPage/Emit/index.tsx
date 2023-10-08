import styles from "./Emit.module.css";
import clsx from "clsx";

export const Emit = () => {
  return (
    <div>
      <div className={styles.earth}></div>
      <div className={clsx(styles.iss, styles.floating)}></div>
      <div className={clsx(styles.orbit)}></div>
      <div className={clsx(styles.orbit)}></div>
      <div className={styles.sideContainer}>
        <div className={clsx("heading1")}>EMIT</div>
        <div className={clsx(styles.heading1smaller)}>
          The Earth Surface Mineral
          <br /> Dust Source Investigation
        </div>
        <div className={styles.description}>
          EMIT, NASA's advanced sensor, launched in July 2022, is aboard the
          International Space Station. It boasts a hyperspectral camera with
          60x60 m spatial resolution, collecting valuable data for various
          applications, from crop monitoring to methane detection.
        </div>
        <div className={styles.description}>
          Its primary mission, though, is understanding how surface dust affects
          global and local climate change. EMIT's data is openly accessible for
          further research."
        </div>
      </div>
    </div>
  );
};
