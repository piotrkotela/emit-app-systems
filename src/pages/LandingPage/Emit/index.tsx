import styles from "./Emit.module.css";
import clsx from "clsx";

import EarthImage from "./assets/earth.png";
import OrbitImage from "./assets/orbit.png";
import IssImage from "./assets/iss.webp";

export const Emit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images_container}>
        <img src={OrbitImage} className={clsx(styles.orbit)} />
        <img src={EarthImage} className={styles.earth} />
        <img src={IssImage} className={clsx(styles.iss, styles.floating)} />
      </div>

      <div className={styles.layout}>
        <div className={styles.placeholder}></div>
        <div className={styles.content_container}>
          <div className="heading1">EMIT</div>
          <div className="heading4">
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
            Its primary mission, though, is understanding how surface dust
            affects global and local climate change. EMIT's data is openly
            accessible for further research.
          </div>
        </div>
      </div>
    </div>
  );
};
