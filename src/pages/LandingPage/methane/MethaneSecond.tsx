import styles from "./MethaneSecond.module.css";

import MethaneImage from "../../../assets/images/methane.png";
import clsx from "clsx";

export const MethaneSecond = () => {
  return (
    <div className={styles.container}>
      <img
        src={MethaneImage}
        alt="methane molecule image"
        className={styles.background_image}
      />
      <div className={styles.content}>
        <h1 className={clsx("heading1", styles.heading)}>80x</h1>
        <h2 className={styles.subtitle}>
          METHANE IS MORE DANGEROUS THAN CARBON DIOXIDE MOLECULE
        </h2>
        <p>
          As it wafted into the atmosphere, methane joined the league of
          greenhouse gases, a major player in the grand theater of climate
          change. Its molecules had a remarkable knack for trapping heat, far
          more efficient than their carbon dioxide counterparts.
        </p>
        <p>
          Methane, in its invisible dance with the sun's rays, increased the
          Earth's temperature, like a blanket slowly tightening its grip.
        </p>
      </div>
    </div>
  );
};
