import clsx from "clsx";
import styles from "./MethaneFirst.module.css";

import MethaneImage from "../../../assets/images/methane.png";

export const MethaneFirst = () => {
  return (
    <div className={styles.container}>
      <img
        src={MethaneImage}
        alt="methane molecule image"
        className={styles.background_image}
      />
      <div className={styles.content}>
        <h1 className={clsx("heading1", styles.heading)}>methane</h1>
        <p>
          In the heart of Earth's natural cycles, lay a seemingly innocuous gas
          called methane. It had been present since time immemorial, generated
          by both natural processes and human activities.
        </p>
        <p>
          Methane, a byproduct of decay and digestion in the animal kingdom,
          emerged from swamps, wetlands, and the bellies of livestock. Yet, it
          was also born from human endeavors—agriculture, landfills, and the
          extraction and use of fossil fuels.
        </p>
      </div>
    </div>
  );
};
