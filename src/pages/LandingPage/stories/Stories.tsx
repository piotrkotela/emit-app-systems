import styles from "./Stories.module.css";
import clsx from "clsx";

const Stories = () => {
  return (
    <div>
      <div className={styles.earth}></div>
      <div className={clsx(styles.iss, styles.floating)}></div>
      <div className={clsx(styles.orbit)}></div>
      <div className={clsx(styles.orbit)}></div>
      <div className={styles.sideContainer}>
        <div className={clsx("heading1")}>stories</div>
        <div className={clsx(styles.subtitle)}>The world before EMIT</div>
        <div className={styles.description}>
          In the pre-EMIT era, methane rapidly intensified climate change,
          fueling destructive natural disasters like floods and storms. Iron
          oxide dust aggravated respiratory issues and contaminated ecosystems,
          compounding the environmental crisis.
        </div>
        <div className={styles.description}>
          We used to underestimate the potential impacts of methane and iron
          oxide dust, getting often caught by surprise. Now, equipped with
          EMIT's insights and capabilities, we are better poised to anticipate
          and prepare for environmental disasters of this nature, paving the way
          for a more resilient future.
        </div>
      </div>
    </div>
  );
};

export default Stories;
