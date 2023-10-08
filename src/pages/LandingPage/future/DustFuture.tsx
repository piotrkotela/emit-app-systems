import styles from "./DustFuture.module.css";

import Scan1Image from "../../../assets/images/Scan1.png";
import Scan2Image from "../../../assets/images/Scan2.png";
import clsx from "clsx";

export const DustFuture = () => {
  return (
    <div className={styles.container}>
      <span className={styles.index}>#1</span>
      <div className={styles.content_container}>
        <div className={styles.header}>
          <h1 className="heading1">dust</h1>
          <h2 className={clsx(styles.subtitle, "heading4")}>
            Monitoring the mineral dust impact on global warming
          </h2>
        </div>
        <div className={styles.images}>
          <figure>
            <img
              src={Scan1Image}
              className={styles.scan}
            />
            <figcaption>
              Image of Mapped Iron Oxide Minerals Dust (Yellow)
            </figcaption>
          </figure>
          <figure>
            <img
              src={Scan2Image}
              className={styles.scan}
            />
            <figcaption>
              Image without Highlighted Iron Oxide Minerals
            </figcaption>
          </figure>
        </div>
        <div className={styles.story}>
          <p>
            High iron oxide content in natural dust significantly impacts global
            warming due to its unique properties. Recent studies reveal that
            minerals like hematite efficiently trap thermal energy and absorb
            sunlight radiation. As a result, iron oxide dust, transported
            globally by wind currents, contributes to rising temperatures in
            many regions, posing a particular threat to polar areas by
            accelerating ice cap melting.
          </p>
        </div>
        <div className={styles.story}>
          <p>
            EMIT's VIS/SWIR spectrometer precisely tracks iron oxide dust
            migration, enabling the development of advanced mapping algorithms.
            Monitoring this migration offers a chance to mitigate future global
            warming consequences, such as rising sea levels.
          </p>
        </div>
      </div>
    </div>
  );
};
