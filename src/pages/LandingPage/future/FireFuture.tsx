import clsx from "clsx";
import styles from "./FireFuture.module.css";

import FireImage from "../../../assets/images/fire.png";

export const FireFuture = () => {
  return (
    <div className={styles.container}>
      <img src={FireImage} className={styles.bg_image} alt="" />
      <span className={styles.index}>#2</span>
      <div className={styles.content_container}>
        <div className={styles.container_left}>
          <h1 className="heading1">fires</h1>
          <h2 className={clsx(styles.subtitle, "heading4")}>
            Tracking the expansion of wildfire zones
          </h2>
        </div>
        <div className={styles.container_right}>
          <p>
            Nowadays, due to the increasing global warming, the amount of
            wildfires is rapidly increasing each year. In combination with
            drought and high wind speed, this phenomenon is extremely dangerous.
            There is no time to rescue your own life or asset.
            <br />
            <br />
            SWIR spectroscopy imaging region has an extraordinary property – it
            transmits through the smoke. Therefore, the EMIT hyperspectral
            module can particularly track the expanding wildfires. It gives the
            possibility to inform the residents under threat well beforehand
            about upcoming danger.
          </p>
        </div>
      </div>
    </div>
  );
};
