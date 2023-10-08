import { forwardRef } from "react";
import styles from "./Future.module.css";
import BgImage from "./assets/8.png";

export const Future = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.layout}>
        <img src={BgImage} className={styles.bg_image} />
        <div className={styles.content_container}>
          <div className="heading1">future</div>
          <div className="heading4">
            The EMIT still has not reached its limits
          </div>
        </div>
        <div className={styles.content_container2}>
          <div className={styles.description}>
            <div className={styles.heading35}>#1</div>
            <div className="heading4">
              Monitoring the mineral dust impact on global warming
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.heading35}>#2</div>
            <div className="heading4">
              Monitoring the mineral dust impact on global warming
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.heading35}>#3</div>
            <div className="heading4">
              Monitoring the mineral dust impact on global warming
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
