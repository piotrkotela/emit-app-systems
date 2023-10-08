const CONTENT = {
  description_up:
    "As the iron oxide dust settled on unsuspecting lands, it contributed to a more far-reaching crisis - the intensification of global warming. As these particles settled on icy surfaces in polar regions and snow-capped mountain ranges, they absorbed sunlight, causing the ice to absorb more heat.",
  description_down:
    "This accelerated the thawing process, contributing to rising sea levels and disrupting ecosystems that depended on ice cover.",
};
import styles from "./DustTwo.module.css";

export const DustTwo = () => {
  return (
    <>
      <div className={styles.backgroundSecond} />
      <div className={styles.dustContainer}>
        <div className={styles.dustRight}>
          <p>{CONTENT.description_up}</p>
          <p>{CONTENT.description_down}</p>
        </div>
        <div className={styles.dustLeft}>
          <p>dust</p>
          <p>It enhanced the global warming</p>
        </div>
      </div>
    </>
  );
};
