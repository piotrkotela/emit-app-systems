import { ReactNode, useRef } from "react";
import styles from "./SpaceshipButton.module.css";
import clsx from "clsx";

export type SpaceshipButtonProps = {
  label: ReactNode;
  onClick: () => void;
};

// This component is heavily inspired (in fact almost copied) from https://wope.com
export function SpaceshipButton({ label, onClick }: SpaceshipButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ position: "relative" }}>
      <div ref={buttonRef} className={clsx(styles.container)}>
        {/* Shiny Border */}
        <div className={clsx(styles.swoosh_mask)}>
          <div className={clsx(styles.swoosh)} />
        </div>

        {/* Glow */}
        <div className={clsx(styles["glow_container"])}>
          <div className={clsx(styles.glow)} />
        </div>

        {/* Button */}
        <button
          // className={`enabled:hover:bg-slate-800 enabled:hover:text-white disabled:pointer-events-none disabled:bg-slate-300 disabled:opacity-60 disabled:shadow-sm`}
          className={clsx(styles.button)}
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
