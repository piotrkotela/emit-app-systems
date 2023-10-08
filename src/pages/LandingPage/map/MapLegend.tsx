import styles from "./MapLegend.module.css";

const MapLegend = () => {
  return (
    <div>
      <div className={styles.legend}>
        <span>0</span>
        <span>20</span>
      </div>
      <div className={styles.legendBar} />
      <span className={styles.imei}>IMEI INDEX</span>
    </div>
  );
};
export default MapLegend;
