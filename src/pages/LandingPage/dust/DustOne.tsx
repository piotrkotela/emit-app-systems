const CONTENT = {
  description_up:
    "Iron oxide dust began its silent descent, carried on the wind like a ghostly messenger. The particles, birthed from both natural erosion and industrial processes, held a perilous secret.",
  description_down:
    "From the iron-rich soils of arid regions to volcanic eruptions, nature played its part in releasing these particles into the air. However, human activities exacerbated the problem as factories belched out plumes of iron oxide-laden smoke and neglected infrastructure crumbled.",
};

import styles from "./DustOne.module.css";

export const DustOne = () => {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.dustContainer}>
        <div className={styles.dustLeft}>
          <p>dust</p>
          <p>Once it got to the atmosphere...</p>
        </div>
        <div className={styles.dustRight}>
          <p>{CONTENT.description_up}</p>
          <p>{CONTENT.description_down}</p>
        </div>
      </div>
    </>
  );
};
