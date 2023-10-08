import clsx from "clsx";
import styles from "./StoryPage.module.css";
import { ReactNode } from "react";

export type Story = {
  title: string;
  content: string;
};

type StoryPageProps = {
  header: ReactNode;
  location: string;
  date: string;
  bgSrc: string;
  story: ReactNode;
  emitImpact: ReactNode;
};

export const StoryPage = ({
  header,
  bgSrc,
  location,
  date,
  story,
  emitImpact,
}: StoryPageProps) => {
  return (
    <div className={styles.container}>
      <img src={bgSrc} className={styles.bg_image} />
      <div className={clsx(styles.header, "heading1")}>
        {header}
        <div className={styles.details_container}>
          <span className="heading4">{location}</span>
          <span className={styles.details}>{date}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h2>story</h2>
        <p>{story}</p>
      </div>
      <div className={styles.content}>
        <h2>EMIT impact</h2>
        <p>{emitImpact}</p>
      </div>
    </div>
  );
};
