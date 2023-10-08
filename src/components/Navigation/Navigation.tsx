import { forwardRef } from 'react';
import styles from "./Navigation.module.css";

interface SectionRefs {
  emit: React.RefObject<HTMLElement>;
  map: React.RefObject<HTMLElement>;
  future: React.RefObject<HTMLElement>;
  story: React.RefObject<HTMLElement>;
}

interface NavigationProps {
  refs: SectionRefs;
}
const Navigation = forwardRef<HTMLElement, NavigationProps>((props, ref) => {

  const scrollIntoViewHandler = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  console.log('>>>', JSON.stringify(props))
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationContainer}>
        <p onClick={() => scrollIntoViewHandler(props.refs.emit)}>EMIT</p>
        <div className={styles.navRight}>
          <p onClick={() => scrollIntoViewHandler(props.refs.story)}>story</p>
          <p onClick={() => scrollIntoViewHandler(props.refs.map)}>map</p>
          <p onClick={() => scrollIntoViewHandler(props.refs.future)}>future</p>
        </div>
      </div>
    </div>
  );
});

export default Navigation;
