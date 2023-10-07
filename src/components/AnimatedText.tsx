import { motion } from "framer-motion";
import { CSSProperties, ComponentProps, ReactNode } from "react";
import { letterAnimation } from "../animations/text";

type AnimatedTextProps = {
  segments: ReactNode[];
  className?: string;
  style?: CSSProperties;
} & ComponentProps<typeof motion.span>;

export const AnimatedText = ({
  segments,
  style,
  className,
  ...props
}: AnimatedTextProps) => {
  return (
    <span style={style} className={className}>
      {segments.map((segment, i) => (
        <motion.span
          style={{ display: "inline-block" }}
          key={`${segment}-${i}`}
          variants={letterAnimation}
          {...props}
        >
          {segment}
        </motion.span>
      ))}
    </span>
  );
};
