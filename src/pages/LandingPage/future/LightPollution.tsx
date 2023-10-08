import clsx from "clsx";
import styles from "./FireFuture.module.css";

import LightImage from "../../../assets/images/light.png";

export const LightPollution = () => {
  return (
    <div className={styles.container}>
      <img src={LightImage} className={styles.bg_image} alt="" />
      <span className={styles.index}>#3</span>
      <div className={styles.content_container}>
        <div className={styles.container_left}>
          <h1 className="heading1">light pollution</h1>
          <h2 className={clsx(styles.subtitle, "heading4")}>
            Observing the street light pollution
          </h2>
        </div>
        <div className={styles.container_right}>
          <p>
            Light pollution is a significant issue, particularly in highly
            urbanized areas like the Tokyo metropolitan region. The substantial
            emission of amber light from outdated sodium lamps has wide-ranging
            impacts. It disrupts the natural daily rhythms of humans and
            wildlife, affects plant growth, and obscures our view of the night
            sky. Fortunately, the process of replacing these older sodium and
            mercury lamps in cities has begun.
            <br />
            <br />
            New LED-based streetlights are more cost-effective, efficient, and,
            importantly, produce minimal light pollution. VIS hyperspectral
            imaging bands in the EMIT sensor enable precise monitoring of the
            progress in replacing old lamps. Each lamp type has a distinct
            spectrum in the visible range, allowing the creation of maps
            depicting the composition of streetlights in cities and the rate of
            old lamp replacements.
          </p>
        </div>
      </div>
    </div>
  );
};
