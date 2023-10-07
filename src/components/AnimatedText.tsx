import { Variants, motion } from "framer-motion";
import { jsxSplit } from "../lib/jsxSplit";

type MotionElement = {
  [K in keyof typeof motion]: (typeof motion)[K];
}[keyof typeof motion];

const textAnimation: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: 1.8,
    },
  },
};

type AnimatedTextProps = {
  text: string;
  textElement: MotionElement;
  className: string;
};

export const AnimatedText = ({
  text,
  textElement: TextElement,
  className,
}: AnimatedTextProps) => {
  return (
    <TextElement
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {jsxSplit(text).map((letter, i) => (
        <motion.span
          style={{ display: "inline-block" }}
          key={`${letter}-${i}`}
          variants={letterAnimation}
        >
          {letter}
        </motion.span>
      ))}
    </TextElement>
  );
};
